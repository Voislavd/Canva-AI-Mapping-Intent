import './AIMessage.css'

export default function AIMessage({ text, children }) {
  return (
    <div className="ai-message">
      {text && <p className="ai-message-text">{text}</p>}
      {children}
    </div>
  )
}
