import { useState } from 'react'
import './Accordion.css'

export default function Accordion({ icon, label, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-icon">{icon}</span>
        <span className="accordion-label">{label}</span>
        <span className="accordion-chevron">›</span>
      </div>
      <div className="accordion-content">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

