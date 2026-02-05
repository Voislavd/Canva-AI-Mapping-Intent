import './UserMessage.css'

export default function UserMessage({ text }) {
  return (
    <div className="user-message">
      <div className="user-message-bubble">
        {text}
      </div>
    </div>
  )
}
