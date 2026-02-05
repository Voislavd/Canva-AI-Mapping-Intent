import { useState } from 'react'
import './autofill.css'

// Icons
import iconUserCircle from '../../assets/icons/icon-user-circle.png'
import iconBrandSwatch from '../../assets/icons/icon-brand-swatch.png'
import iconDatabase from '../../assets/icons/icon-database.png'

export default function FilterChips({
  persona,
  onPersonaChange,
  brand,
  onBrandChange,
  category,
  onCategoryChange,
  personas,
  brands,
  categories
}) {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const handleSelect = (type, value) => {
    switch (type) {
      case 'persona':
        onPersonaChange(value)
        break
      case 'brand':
        onBrandChange(value)
        break
      case 'category':
        onCategoryChange(value)
        break
    }
    setOpenDropdown(null)
  }

  const getLabel = (items, id) => items.find(i => i.id === id)?.label || id

  return (
    <div className="filter-chips">
      {/* Persona Chip */}
      <div className="chip-container">
        <button 
          className={`chip ${openDropdown === 'persona' ? 'active' : ''}`}
          onClick={() => toggleDropdown('persona')}
        >
          <img src={iconUserCircle} alt="" className="chip-icon-img" />
          <span className="chip-chevron">⌄</span>
        </button>
        {openDropdown === 'persona' && (
          <div className="chip-dropdown">
            {personas.map(p => (
              <div 
                key={p.id} 
                className={`chip-option ${persona === p.id ? 'selected' : ''}`}
                onClick={() => handleSelect('persona', p.id)}
              >
                <img src={iconUserCircle} alt="" className="option-icon-img" />
                <span className="option-label">{p.label}</span>
                {persona === p.id && <span className="option-check">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Brand Chip */}
      <div className="chip-container">
        <button 
          className={`chip ${openDropdown === 'brand' ? 'active' : ''}`}
          onClick={() => toggleDropdown('brand')}
        >
          <img src={iconBrandSwatch} alt="" className="chip-icon-img" />
          <span className="chip-label">{getLabel(brands, brand)}</span>
          <span className="chip-chevron">⌄</span>
        </button>
        {openDropdown === 'brand' && (
          <div className="chip-dropdown">
            {brands.map(b => (
              <div 
                key={b.id} 
                className={`chip-option ${brand === b.id ? 'selected' : ''}`}
                onClick={() => handleSelect('brand', b.id)}
              >
                <img src={iconBrandSwatch} alt="" className="option-icon-img" />
                <span className="option-label">{b.label}</span>
                {brand === b.id && <span className="option-check">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category Chip (Data Source) */}
      <div className="chip-container">
        <button 
          className={`chip ${openDropdown === 'category' ? 'active' : ''}`}
          onClick={() => toggleDropdown('category')}
        >
          <img src={iconDatabase} alt="" className="chip-icon-img" />
          <span className="chip-label">{getLabel(categories, category)}</span>
          <span className="chip-chevron">⌄</span>
        </button>
        {openDropdown === 'category' && (
          <div className="chip-dropdown">
            {categories.map(c => (
              <div 
                key={c.id} 
                className={`chip-option ${category === c.id ? 'selected' : ''}`}
                onClick={() => handleSelect('category', c.id)}
              >
                <img src={iconDatabase} alt="" className="option-icon-img" />
                <span className="option-label">{c.label}</span>
                {category === c.id && <span className="option-check">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

