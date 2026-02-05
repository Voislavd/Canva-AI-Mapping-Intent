import './autofill.css'

export default function FilterTabs({ tabs, selected, onChange }) {
  return (
    <div className="filter-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`filter-tab ${selected === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
