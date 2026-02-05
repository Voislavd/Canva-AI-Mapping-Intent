import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
      <div className="header-logo" />
    </div>
      <div className="header-right">
        <button className="header-btn primary" />
        <button className="header-btn secondary">Share</button>
      </div>
    </header>
  )
}


