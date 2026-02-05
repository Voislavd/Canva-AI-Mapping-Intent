import { useEffect, useRef } from 'react'
import './MessageList.css'

export default function MessageList({ children }) {
  const listRef = useRef(null)

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [children])

  return (
    <div className="message-list" ref={listRef}>
      {children}
    </div>
  )
}
