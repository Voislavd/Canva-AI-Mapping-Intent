import { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

export default function Dropdown({ 
  trigger, 
  items, 
  onSelect, 
  chipStyle = false,
  fullWidth = false 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(items[0]?.value)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleSelect = (item) => {
    setSelected(item.value)
    setIsOpen(false)
    onSelect?.(item)
  }

  return (
    <div 
      className={`dropdown ${isOpen ? 'open' : ''} ${fullWidth ? 'full-width' : ''}`}
      ref={dropdownRef}
    >
      <button 
        className={`dropdown-trigger ${chipStyle ? 'chip-style' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </button>
      <div className="dropdown-menu">
        {items.map((item) => (
          <div
            key={item.value}
            className={`dropdown-item ${selected === item.value ? 'selected' : ''}`}
            onClick={() => handleSelect(item)}
          >
            {item.icon && <span className="dropdown-item-icon" />}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

