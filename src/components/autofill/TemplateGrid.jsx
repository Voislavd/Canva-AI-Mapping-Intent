import TemplateCard from '../ui/TemplateCard'
import './autofill.css'

export default function TemplateGrid({ 
  templates, 
  onTemplateClick, 
  showMappedBadge = false, 
  selectedTemplateId = null
}) {
  return (
    <div className="template-grid">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          title={template.title}
          type={template.type}
          thumbnail={template.thumbnail}
          bgColor={template.bgColor}
          onClick={() => onTemplateClick(template)}
          isSelected={selectedTemplateId === template.id}
          isMapped={template.isMapped}
        />
      ))}
    </div>
  )
}
