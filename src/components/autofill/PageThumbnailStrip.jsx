import './autofill.css'

export default function PageThumbnailStrip({ pages, selectedIndex, onPageSelect, mappings = {} }) {
  // Count mapped elements per page
  const getMappingCount = (page) => {
    return page.elements.filter(el => mappings[el.id]).length
  }

  // Render page-specific thumbnail content
  const renderPagePreview = (page, pageNumber) => {
    switch (pageNumber) {
      case 1:
        // Cover page
        return (
          <div className="thumb-preview cover">
            <div className="thumb-p-header">
              <span className="thumb-p-company"></span>
            </div>
            <div className="thumb-p-banner">
              <span className="thumb-p-title"></span>
            </div>
            <div className="thumb-p-image"></div>
            <div className="thumb-p-footer">
              <span className="thumb-p-text"></span>
            </div>
          </div>
        )
      case 2:
        // Overview page
        return (
          <div className="thumb-preview overview">
            <div className="thumb-p-header dark">
              <span className="thumb-p-heading"></span>
            </div>
            <div className="thumb-p-rows">
              <div className="thumb-p-row"></div>
              <div className="thumb-p-row"></div>
              <div className="thumb-p-row"></div>
            </div>
          </div>
        )
      case 3:
        // Contact page
        return (
          <div className="thumb-preview contact">
            <div className="thumb-p-tabs">
              <span className="thumb-p-tab"></span>
              <span className="thumb-p-tab"></span>
            </div>
            <div className="thumb-p-body">
              <span className="thumb-p-heading"></span>
              <div className="thumb-p-table">
                <div className="thumb-p-table-row"></div>
                <div className="thumb-p-table-row"></div>
                <div className="thumb-p-table-row"></div>
              </div>
            </div>
          </div>
        )
      default:
        // Generic page
        return (
          <div className="thumb-preview generic">
            <div className="thumb-p-header" />
            <div className="thumb-p-content" />
          </div>
        )
    }
  }

  return (
    <div className="page-thumbnail-strip">
      <div className="thumbnails-container">
        {pages.map((page, index) => {
          const mappingCount = getMappingCount(page)
          const pageNumber = index + 1
          
          return (
            <button
              key={page.id}
              className={`page-thumbnail ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => onPageSelect(index)}
            >
              <div className="thumb-visual">
                {renderPagePreview(page, pageNumber)}
                {mappingCount > 0 && (
                  <span className="thumb-mapping-count">{mappingCount}</span>
                )}
              </div>
            </button>
          )
        })}
      </div>
      
      {pages.length > 3 && (
        <button className="strip-nav-arrow">›</button>
      )}
    </div>
  )
}

