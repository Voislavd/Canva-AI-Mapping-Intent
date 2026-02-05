import { useEffect, useRef } from 'react'
import './canvas-preview.css'

export default function MappedBadge({ element, label, isHighlighted, onClick }) {
  const badgeRef = useRef(null)
  
  // Scroll into view when highlighted
  useEffect(() => {
    if (isHighlighted && badgeRef.current) {
      badgeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isHighlighted])
  
  // Position based on element coordinates
  const style = {
    left: element.x ? `${(element.x / 1200) * 100}%` : '10%',
    top: element.y ? `${(element.y / 800) * 100}%` : '20%',
  }

  return (
    <button 
      ref={badgeRef}
      className={`mapped-badge-pill ${isHighlighted ? 'highlighted' : ''}`}
      style={style}
      onClick={onClick}
    >
      <span className="badge-label">{label}</span>
      <span className="badge-icon">📋</span>
      <span className="badge-remove">−</span>
    </button>
  )
}

