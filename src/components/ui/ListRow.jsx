import './ListRow.css'

export default function ListRow({ icon, label, badge, badgeType = 'orange', onClick }) {
  return (
    <div className="list-row" onClick={onClick}>
      <span className="list-row-icon">{icon}</span>
      <span className="list-row-label">{label}</span>
      {badge && (
        <span className="list-row-badge">
          <span className={`dot ${badgeType}`} />
          {badge}
        </span>
      )}
      <span className="list-row-chevron">›</span>
    </div>
  )
}

