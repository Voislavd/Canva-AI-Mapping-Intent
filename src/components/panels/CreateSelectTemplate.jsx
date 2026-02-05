import TemplateGrid from '../autofill/TemplateGrid'
import './panels.css'

export default function CreateSelectTemplate({
  templates,
  onTemplateClick,
  onBack,
  onClose
}) {
  // Only show mapped templates in Create flow
  const mappedTemplates = templates.filter(t => t.isMapped)

  return (
    <div className="create-select-template">
      {/* Header */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="panel-nav-title">Create</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      {/* Subtitle */}
      <p className="panel-subtitle">Select a template</p>

      {/* Template Grid */}
      <div className="template-section">
        <TemplateGrid
          templates={mappedTemplates}
          onTemplateClick={onTemplateClick}
          showMappedBadge={false}
        />
      </div>
    </div>
  )
}
