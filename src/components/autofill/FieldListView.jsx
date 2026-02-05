import { useState } from 'react'
import './autofill.css'

export default function FieldListView({ 
  category, // 'fields', 'media', or 'tables'
  schema, 
  mappings = {},
  template,
  onBack,
  onFieldClick
}) {
  const [searchQuery, setSearchQuery] = useState('')

  // Get items based on category
  const getItems = () => {
    switch (category) {
      case 'fields':
        return schema.fields.map(f => ({ ...f, fieldType: 'text' }))
      case 'media':
        return schema.media.map(m => ({ ...m, fieldType: 'image' }))
      case 'tables':
        return schema.tables.map(t => ({ ...t, fieldType: 'table' }))
      default:
        return []
    }
  }

  const items = getItems()
  
  // Filter by search
  const filteredItems = searchQuery
    ? items.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  // Check if a field is mapped and to which element
  const getMappingInfo = (fieldId) => {
    // Find which element ID maps to this field
    const elementId = Object.entries(mappings).find(([_, fId]) => fId === fieldId)?.[0]
    if (!elementId) return null

    // Find the element across all pages
    for (const page of template.pages) {
      const element = page.elements.find(el => el.id === elementId)
      if (element) {
        const pageIndex = template.pages.indexOf(page)
        return {
          elementId,
          elementLabel: element.label,
          pageNumber: pageIndex + 1
        }
      }
    }
    return null
  }

  // Get icon for field type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'image': return '🖼'
      case 'table': return '⊞'
      default: return 'T'
    }
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'fields': return 'Text Fields'
      case 'media': return 'Media'
      case 'tables': return 'Tables'
      default: return 'Fields'
    }
  }

  return (
    <div className="field-list-view">
      {/* Header */}
      <div className="field-list-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h3 className="field-list-title">{getCategoryTitle()}</h3>
        <span className="field-list-count">{items.length} items</span>
      </div>

      {/* Body */}
      <div className="field-list-body">
        {/* Search */}
        <div className="field-list-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder={`Search ${category}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* List */}
        <div className="field-list-items">
          {filteredItems.length === 0 ? (
            <div className="field-list-empty">No {category} found</div>
          ) : (
            filteredItems.map(item => {
              const mappingInfo = getMappingInfo(item.id)
              
              return (
                <div 
                  key={item.id} 
                  className={`field-list-item ${mappingInfo ? 'is-mapped' : ''}`}
                  onClick={() => onFieldClick?.(item)}
                >
                  <span className="field-list-icon">{getTypeIcon(item.fieldType)}</span>
                  <div className="field-list-info">
                    <span className="field-list-label">{item.label}</span>
                    {item.sampleValue && (
                      <span className="field-list-sample">{item.sampleValue}</span>
                    )}
                  </div>
                  {mappingInfo ? (
                    <span className="field-list-mapping">
                      Page {mappingInfo.pageNumber}
                    </span>
                  ) : (
                    <span className="field-list-unmapped">Unmapped</span>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}



