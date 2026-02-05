import './TemplateCard.css'

export default function TemplateCard({ template, onMapTemplate }) {
  return (
    <div className="template-card">
      <div className="template-card-preview">
        <img 
          src={template.thumbnail} 
          alt={template.name} 
          className="template-card-image"
        />
      </div>
      <button className="map-template-btn" onClick={onMapTemplate}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4.5C2 3.67157 2.67157 3 3.5 3H6.5C7.32843 3 8 3.67157 8 4.5V6.5C8 7.32843 7.32843 8 6.5 8H3.5C2.67157 8 2 7.32843 2 6.5V4.5Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 9.5C8 8.67157 8.67157 8 9.5 8H12.5C13.3284 8 14 8.67157 14 9.5V11.5C14 12.3284 13.3284 13 12.5 13H9.5C8.67157 13 8 12.3284 8 11.5V9.5Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 8V10.5C5 11.3284 5.67157 12 6.5 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Map template
      </button>
    </div>
  )
}
