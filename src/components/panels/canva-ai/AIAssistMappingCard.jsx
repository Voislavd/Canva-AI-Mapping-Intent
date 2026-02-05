import './AIAssistMappingCard.css'

export default function AIAssistMappingCard({ state, onMapWithAI, onCancel }) {
  // Render based on state
  const renderContent = () => {
    switch (state) {
      case 'analyzing':
        return (
          <>
            <div className="ai-card-header">
              <span className="ai-card-icon spinning">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C10 2 10 6 10 6" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 14C10 14 10 18 10 18" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                  <path d="M2 10C2 10 6 10 6 10" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  <path d="M14 10C14 10 18 10 18 10" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="20" y2="20">
                      <stop stopColor="#03A5AB"/>
                      <stop offset="1" stopColor="#8B3DFF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="ai-card-title gradient">Analysing this design</span>
            </div>
            <button className="ai-card-btn secondary" onClick={onCancel}>
              Cancel
            </button>
          </>
        )
      
      case 'complete':
        return (
          <>
            <div className="ai-card-header">
              <span className="ai-card-icon success">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" fill="#00C4CC" fillOpacity="0.15"/>
                  <path d="M6 10L9 13L14 7" stroke="#00C4CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="ai-card-title success">Auto-mapping complete!</span>
            </div>
          </>
        )
      
      case 'idle':
      default:
        return (
          <>
            <div className="ai-card-header">
              <span className="ai-card-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2L12 6L16 6.5L13 9.5L14 14L10 12L6 14L7 9.5L4 6.5L8 6L10 2Z" fill="url(#starGradient)"/>
                  <defs>
                    <linearGradient id="starGradient" x1="4" y1="2" x2="16" y2="14">
                      <stop stopColor="#03A5AB"/>
                      <stop offset="1" stopColor="#8B3DFF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="ai-card-title gradient">AI Assisted Mapping</span>
            </div>
            <button className="ai-card-btn primary" onClick={onMapWithAI}>
              Map with AI
            </button>
          </>
        )
    }
  }

  return (
    <div className={`ai-assist-mapping-card ${state}`}>
      {renderContent()}
    </div>
  )
}
