'use client'

import { useState } from 'react'

export default function ChatbotMonitor() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, `You: ${input}`])
      // Here you would typically send the input to a chatbot API
      // and receive a response. For now, we'll just echo the input.
      setMessages((prev) => [...prev, `Chatbot: You said: ${input}`])
      setInput('')
    }
  }

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-100 h-64 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <p key={index} className="mb-2">
            {message}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about medications..."
          className="flex-1 px-2 py-1 border border-gray-300 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}

