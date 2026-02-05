import { DATA_SOURCES } from '../../data/sampleData'
import './panels.css'

export default function ConfigureSources({ onBack, onClose }) {
  return (
    <div className="configure-sources">
      {/* Header */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2 className="panel-nav-title">Configure data sources</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      {/* Connected Sources Label */}
      <label className="section-label">Connected Data Sources</label>

      {/* Data Sources List */}
      <div className="sources-list">
        {DATA_SOURCES.filter(s => s.connected).map(source => (
          <div key={source.id} className="source-row">
            <span className="source-icon">☰</span>
            <span className="source-name">{source.name}</span>
            <span className="connected-badge">Connected</span>
          </div>
        ))}
      </div>

      {/* Add Source Button */}
      <button className="add-source-btn">
        + Add data source
      </button>
    </div>
  )
}
