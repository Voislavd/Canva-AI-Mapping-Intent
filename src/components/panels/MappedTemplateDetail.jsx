import { SCHEMA } from '../../data/sampleData'
import './panels.css'

export default function MappedTemplateDetail({
  template,
  mappings,
  onEditMappings,
  onBack,
  onClose
}) {
  if (!template) return null

  // Get mapped fields count
  const mappedFieldIds = Object.values(mappings)
  const textFields = SCHEMA.fields.filter(f => mappedFieldIds.includes(f.id))
  const mediaFields = SCHEMA.media.filter(m => mappedFieldIds.includes(m.id))
  const tableFields = SCHEMA.tables.filter(t => mappedFieldIds.includes(t.id))

  const totalMapped = textFields.length + mediaFields.length + tableFields.length

  return (
    <div className="mapped-template-detail">
      {/* Header */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2 className="panel-nav-title">{template.title}</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      {/* Status Card */}
      <div className="mapping-status-card success">
        <div className="status-icon">✓</div>
        <div className="status-content">
          <span className="status-title">Mappings configured</span>
          <span className="status-desc">{totalMapped} fields connected to data source</span>
        </div>
      </div>

      {/* Template Info */}
      <div className="template-info-section">
        <div className="template-info-thumb">
          {template.thumbnail ? (
            <img src={template.thumbnail} alt={template.title} />
          ) : (
            <div className="thumb-placeholder">📄</div>
          )}
        </div>
        <div className="template-info-details">
          <span className="template-info-type">{template.type}</span>
          <span className="template-info-pages">{template.pages?.length || 1} pages</span>
        </div>
      </div>

      {/* Mapped Fields Summary */}
      <div className="mapped-summary-section">
        <h3 className="section-label">Connected fields</h3>

        <div className="mapped-summary-list">
          {textFields.length > 0 && (
            <div className="mapped-summary-group">
              <span className="summary-group-label">Text fields</span>
              <div className="summary-items">
                {textFields.map(field => (
                  <div key={field.id} className="summary-item">
                    <span className="summary-item-icon">Aa</span>
                    <span className="summary-item-label">{field.label}</span>
                    <span className="summary-item-check">✓</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mediaFields.length > 0 && (
            <div className="mapped-summary-group">
              <span className="summary-group-label">Media</span>
              <div className="summary-items">
                {mediaFields.map(field => (
                  <div key={field.id} className="summary-item">
                    <span className="summary-item-icon">🖼</span>
                    <span className="summary-item-label">{field.label}</span>
                    <span className="summary-item-check">✓</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tableFields.length > 0 && (
            <div className="mapped-summary-group">
              <span className="summary-group-label">Tables</span>
              <div className="summary-items">
                {tableFields.map(field => (
                  <div key={field.id} className="summary-item">
                    <span className="summary-item-icon">☰</span>
                    <span className="summary-item-label">{field.label}</span>
                    <span className="summary-item-check">✓</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Button */}
      <button className="edit-mappings-btn" onClick={onEditMappings}>
        Edit mappings
      </button>
    </div>
  )
}
