import './Sidebar.css'
import canvaAiIcon from '../assets/icons/canva-ai-icon.svg'

const sidebarItems = [
  'design',
  'elements', 
  'text',
  'brand',
  'uploads',
  'draw',
  'apps',
  'projects',
  'photos',
  'videos',
  'audio',
  'more',
]

export default function Sidebar({ activePanel, onPanelClick }) {
  const isCanvaAIActive = activePanel === 'canva-ai'
  
  return (
    <aside className="sidebar">
      {/* Canva AI Icon - Special styling at top */}
      <button
        className={`canva-ai-icon ${isCanvaAIActive ? 'active' : ''}`}
        onClick={() => onPanelClick('canva-ai')}
        aria-label="Canva AI"
      >
        <img src={canvaAiIcon} alt="Canva AI" className="canva-ai-icon-img" />
      </button>
      
      {/* Regular sidebar items */}
      {sidebarItems.map((id) => (
        <button
          key={id}
          className={`sidebar-icon ${activePanel === id ? 'active' : ''}`}
          onClick={() => onPanelClick(id)}
        />
      ))}
      <div className="sidebar-spacer" />
    </aside>
  )
}


