import { useState, useEffect, useRef } from 'react'
import './canvas-preview.css'

export default function FieldPopover({
  position,
  currentFieldId,
  schema,
  elementType = 'text', // 'text', 'image', or 'table'
  onSelect,
  onDisconnect,
  onClose
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const popoverRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Get icon for field type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'image': return '🖼'
      case 'table': return '⊞'
      default: return 'T'
    }
  }

  // Combine all schema items with their types
  const allItems = [
    ...schema.fields.map(f => ({ ...f, fieldType: 'text' })),
    ...schema.media.map(m => ({ ...m, fieldType: 'image' })),
    ...schema.tables.map(t => ({ ...t, fieldType: 'table' }))
  ]

  // Filter by element type - show relevant fields first, then others
  const getRelevantItems = () => {
    // For text elements, prioritize text fields
    // For image elements, prioritize media
    // For table elements, prioritize tables
    const primary = allItems.filter(item => {
      if (elementType === 'text') return item.fieldType === 'text'
      if (elementType === 'image') return item.fieldType === 'image'
      if (elementType === 'table') return item.fieldType === 'table'
      return true
    })
    const secondary = allItems.filter(item => {
      if (elementType === 'text') return item.fieldType !== 'text'
      if (elementType === 'image') return item.fieldType !== 'image'
      if (elementType === 'table') return item.fieldType !== 'table'
      return false
    })
    return [...primary, ...secondary]
  }

  const relevantItems = getRelevantItems()
  
  // Filter by search
  const filteredItems = searchQuery 
    ? relevantItems.filter(f => f.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : relevantItems

  // Display limit
  const displayLimit = showAll ? filteredItems.length : 4
  const displayItems = filteredItems.slice(0, displayLimit)
  const hasMore = filteredItems.length > 4

  return (
    <div 
      className="field-popover"
      ref={popoverRef}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -100%) translateY(-10px)'
      }}
    >
      {/* Search */}
      <div className="popover-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search data field"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>

      {/* Suggested/Results */}
      <div className="popover-section">
        <span className="popover-section-label">
          {searchQuery ? 'Results' : 'Suggested'}
        </span>
        
        <div className="popover-options">
          {displayItems.length === 0 ? (
            <div className="popover-no-results">No fields found</div>
          ) : (
            displayItems.map(field => (
              <button
                key={field.id}
                className={`popover-option ${currentFieldId === field.id ? 'selected' : ''}`}
                onClick={() => onSelect(field.id)}
              >
                <span className="option-type-icon">{getTypeIcon(field.fieldType)}</span>
                <div className="option-content">
                  <span className="option-label">{field.label}</span>
                  {field.sampleValue && (
                    <span className="option-sample">{field.sampleValue}</span>
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {hasMore && (
          <button 
            className="popover-see-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show less' : `See all (${filteredItems.length})`}
          </button>
        )}
      </div>

      {/* Disconnect */}
      {currentFieldId && (
        <button className="popover-disconnect" onClick={onDisconnect}>
          Disconnect data
        </button>
      )}
    </div>
  )
}

