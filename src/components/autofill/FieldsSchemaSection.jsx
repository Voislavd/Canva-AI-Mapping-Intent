import { useState, useRef, useEffect } from 'react'
import './autofill.css'

// Mock data sources
const DATA_SOURCES = [
  { id: 'benefits-hris', name: 'Benefits HRIS One Digital' },
  { id: 'employee-db', name: 'Employee Database' },
  { id: 'payroll-system', name: 'Payroll System' }
]

export default function FieldsSchemaSection({ 
  schema, 
  mappings = {}, 
  template,
  onCategoryClick,
  onViewAllClick
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSourceId, setSelectedSourceId] = useState(schema.id)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedSource = DATA_SOURCES.find(s => s.id === selectedSourceId) || DATA_SOURCES[0]

  // Count mapped fields across all pages
  const getMappedCount = (type) => {
    const mappedFieldIds = new Set(Object.values(mappings))
    
    switch (type) {
      case 'fields':
        return schema.fields.filter(f => mappedFieldIds.has(f.id)).length
      case 'media':
        return schema.media.filter(m => mappedFieldIds.has(m.id)).length
      case 'tables':
        return schema.tables.filter(t => mappedFieldIds.has(t.id)).length
      default:
        return 0
    }
  }

  const fieldsTotal = schema.fields.length
  const mediaTotal = schema.media.length
  const tablesTotal = schema.tables.length

  const fieldsMapped = getMappedCount('fields')
  const mediaMapped = getMappedCount('media')
  const tablesMapped = getMappedCount('tables')

  const fieldsUnmapped = fieldsTotal - fieldsMapped
  const mediaUnmapped = mediaTotal - mediaMapped
  const tablesUnmapped = tablesTotal - tablesMapped

  return (
    <div className="fields-schema-section">
      <h4 className="section-label">Fields & Schema</h4>

      {/* Data Source Selector */}
      <div className="schema-source-wrapper" ref={dropdownRef}>
        <button 
          className={`schema-source-card ${isDropdownOpen ? 'open' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="source-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="4" rx="1" fill="currentColor"/>
              <rect x="2" y="8" width="16" height="4" rx="1" fill="currentColor" opacity="0.6"/>
              <rect x="2" y="14" width="16" height="4" rx="1" fill="currentColor" opacity="0.3"/>
            </svg>
          </span>
          <span className="source-name">{selectedSource.name}</span>
          <span className={`source-chevron ${isDropdownOpen ? 'open' : ''}`}>⌄</span>
        </button>
        
        {isDropdownOpen && (
          <div className="source-dropdown">
            {DATA_SOURCES.map(source => (
              <button
                key={source.id}
                className={`source-option ${selectedSourceId === source.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedSourceId(source.id)
                  setIsDropdownOpen(false)
                }}
              >
                <span className="source-option-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="3" rx="1" fill="currentColor"/>
                    <rect x="2" y="6" width="12" height="3" rx="1" fill="currentColor" opacity="0.6"/>
                    <rect x="2" y="10" width="12" height="3" rx="1" fill="currentColor" opacity="0.3"/>
                  </svg>
                </span>
                <span className="source-option-name">{source.name}</span>
                {selectedSourceId === source.id && (
                  <span className="source-option-check">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fields Card */}
      <button 
        className="schema-category-card"
        onClick={() => onCategoryClick?.('fields')}
      >
        <span className="category-icon">T</span>
        <span className="category-name">Fields</span>
        <span className={`category-count ${fieldsUnmapped > 0 ? 'unmapped' : 'complete'}`}>
          {fieldsUnmapped > 0 ? (
            <>
              <span className="count-dot"></span>
              {fieldsUnmapped} unmapped
            </>
          ) : (
            '✓ All mapped'
          )}
        </span>
        <span className="category-chevron">›</span>
      </button>

      {/* Media Card */}
      <button 
        className="schema-category-card"
        onClick={() => onCategoryClick?.('media')}
      >
        <span className="category-icon">🖼</span>
        <span className="category-name">Media</span>
        <span className={`category-count ${mediaUnmapped > 0 ? 'unmapped' : 'complete'}`}>
          {mediaUnmapped > 0 ? (
            <>
              <span className="count-dot"></span>
              {mediaUnmapped} unmapped
            </>
          ) : (
            '✓ All mapped'
          )}
        </span>
        <span className="category-chevron">›</span>
      </button>

      {/* Tables Card */}
      <button 
        className="schema-category-card"
        onClick={() => onCategoryClick?.('tables')}
      >
        <span className="category-icon">⊞</span>
        <span className="category-name">Tables</span>
        <span className={`category-count ${tablesUnmapped > 0 ? 'unmapped' : 'complete'}`}>
          {tablesUnmapped > 0 ? (
            <>
              <span className="count-dot"></span>
              {tablesUnmapped} unmapped
            </>
          ) : (
            '✓ All mapped'
          )}
        </span>
        <span className="category-chevron">›</span>
      </button>

      {/* View All Button */}
      <button 
        className="view-all-mappings-btn"
        onClick={() => onViewAllClick?.()}
      >
        View all mappings
      </button>
    </div>
  )
}

