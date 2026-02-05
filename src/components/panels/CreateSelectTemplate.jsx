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
        <button className="back-btn" onClick={onBack}>←</button>
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
