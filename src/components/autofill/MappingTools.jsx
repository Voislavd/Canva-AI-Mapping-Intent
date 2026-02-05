import './autofill.css'

export default function MappingTools({ isClickToMapMode, onToggleClickToMap }) {
  return (
    <div className="mapping-tools">
      <h4 className="section-label">Mapping tools</h4>
      
      <button className="mapping-tool-btn ai-btn">
        <span className="tool-icon">✨</span>
        Map with AI
      </button>
      
      <button 
        className={`mapping-tool-btn click-btn ${isClickToMapMode ? 'active' : ''}`}
        onClick={onToggleClickToMap}
      >
        <span className="tool-icon">⎋</span>
        Click to map
      </button>
    </div>
  )
}



