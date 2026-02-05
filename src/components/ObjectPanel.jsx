import './ObjectPanel.css'

export default function ObjectPanel({ 
  isOpen, 
  title, 
  canGoBack, 
  onBack, 
  onClose,
  hideHeader = false,
  children
}) {
  return (
    <section className={`object-panel ${isOpen ? '' : 'hidden'}`}>
      {!hideHeader && (
        <div className="panel-header">
          <div className="panel-header-left">
            {canGoBack && (
              <button className="panel-back" onClick={onBack}>
                ←
              </button>
            )}
            <span className="panel-title">{title}</span>
          </div>
          <button className="panel-close" onClick={onClose}>
            ×
          </button>
        </div>
      )}
      <div className={`panel-content ${hideHeader ? 'no-header' : ''}`}>
        {children}
      </div>
    </section>
  )
}


