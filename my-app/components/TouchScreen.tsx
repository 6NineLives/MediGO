'use client'

import { useState } from 'react'
import { MessageSquare, CreditCard, HelpCircle, MapPin } from 'lucide-react'

type Screen = 'main' | 'chat' | 'payment' | 'help' | 'map'

export default function TouchScreen() {
  const [screen, setScreen] = useState<Screen>('main')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([])
  const [input, setInput] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            text: "I'm here to help with any questions about our medications. Please note that this is for informational purposes only. Always consult a healthcare professional for medical advice.",
            sender: 'bot'
          }
        ])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="w-full lg:w-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-[#45B5A1] p-4 text-white">
        <h2 className="text-lg font-bold">Virtual Assistant</h2>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-50">
        <button
          onClick={() => setScreen('chat')}
          className={`flex flex-col items-center p-2 rounded ${
            screen === 'chat' ? 'bg-[#E8F4F2] text-[#45B5A1]' : 'hover:bg-gray-100'
          }`}
        >
          <MessageSquare size={20} />
          <span className="text-xs mt-1">Chat</span>
        </button>
        <button
          onClick={() => setScreen('payment')}
          className={`flex flex-col items-center p-2 rounded ${
            screen === 'payment' ? 'bg-[#E8F4F2] text-[#45B5A1]' : 'hover:bg-gray-100'
          }`}
        >
          <CreditCard size={20} />
          <span className="text-xs mt-1">Pay</span>
        </button>
        <button
          onClick={() => setScreen('map')}
          className={`flex flex-col items-center p-2 rounded ${
            screen === 'map' ? 'bg-[#E8F4F2] text-[#45B5A1]' : 'hover:bg-gray-100'
          }`}
        >
          <MapPin size={20} />
          <span className="text-xs mt-1">Map</span>
        </button>
        <button
          onClick={() => setScreen('help')}
          className={`flex flex-col items-center p-2 rounded ${
            screen === 'help' ? 'bg-[#E8F4F2] text-[#45B5A1]' : 'hover:bg-gray-100'
          }`}
        >
          <HelpCircle size={20} />
          <span className="text-xs mt-1">Help</span>
        </button>
      </div>

      {/* Screen Content */}
      <div className="flex-1 p-4 flex flex-col min-h-0 h-[400px] lg:h-[500px]">
        {screen === 'chat' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-[#45B5A1] text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex gap-2 mt-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about medications..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45B5A1]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#45B5A1] text-white rounded-lg hover:bg-[#2C7A6B] whitespace-nowrap"
              >
                Send
              </button>
            </form>
          </div>
        )}
        {screen === 'map' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1629789999999!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-sm mb-2">Nearby Locations:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#45B5A1]" />
                  <span>City Hospital - 0.3 miles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#45B5A1]" />
                  <span>Central Station MediGo - 0.5 miles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#45B5A1]" />
                  <span>Downtown Medical Center - 0.8 miles</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {screen === 'payment' && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Select a product first to proceed with payment</p>
            </div>
          </div>
        )}
        {screen === 'help' && (
          <div className="space-y-4 overflow-y-auto">
            <h3 className="font-bold">How to use:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Browse available medications</li>
              <li>Select your desired product</li>
              <li>Follow payment instructions</li>
              <li>Collect your item from the dispenser</li>
            </ol>
            <p className="text-sm text-gray-600 mt-4">
              For medical advice or emergencies, please consult a healthcare professional or call emergency services.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

