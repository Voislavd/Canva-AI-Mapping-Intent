import './ThinkingIndicator.css'

export default function ThinkingIndicator() {
  return (
    <div className="thinking-indicator">
      <span className="thinking-text">Thinking</span>
      <span className="thinking-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </span>
    </div>
  )
}
