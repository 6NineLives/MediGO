export default function Keypad() {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B']

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-200">
      <div className="grid grid-cols-3 gap-2">
        {buttons.map((button) => (
          <button
            key={button}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  )
}

