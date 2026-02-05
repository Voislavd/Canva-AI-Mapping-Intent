import TemplateGrid from '../autofill/TemplateGrid'
import { CLIENTS } from '../../data/sampleData'
import './panels.css'

export default function JobDetailPanel({
  job,
  client,
  onClientChange,
  templates,
  onTemplateClick,
  onBack,
  onClose
}) {
  if (!job) return null

  const clientData = CLIENTS.find(c => c.id === client)
  
  // Filter to mapped templates only (for Marketer)
  const mappedTemplates = templates.filter(t => t.isMapped)

  return (
    <div className="job-detail-panel">
      {/* Header with back button */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2 className="panel-nav-title">{job.panelTitle}</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      {/* Client selector */}
      <div className="job-client-section">
        <label className="section-label">Create for</label>
        <div className="client-dropdown">
          <span className="client-icon">🏢</span>
          <select 
            value={client} 
            onChange={(e) => onClientChange(e.target.value)}
            className="client-select"
          >
            {CLIENTS.map(c => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
          <span className="dropdown-chevron">⌄</span>
        </div>
      </div>

      {/* Template Section */}
      <div className="job-templates-section">
        <div className="section-header">
          <h3 className="section-title">Choose a template</h3>
          <button className="see-all-btn">See all</button>
        </div>
        
        <TemplateGrid 
          templates={mappedTemplates} 
          onTemplateClick={onTemplateClick}
          showMappedBadge={false}
          clientName={clientData?.label || 'Hyperscape'}
        />
      </div>
    </div>
  )
}

