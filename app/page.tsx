import VendingMachine from '../components/VendingMachine'
import TouchScreen from '../components/TouchScreen'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 p-4 md:p-8 flex items-center justify-center">
      <div className="relative bg-[#E8F4F2] p-4 md:p-8 rounded-xl shadow-2xl w-full max-w-7xl">
        {/* Branding */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#E8F4F2] px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
          <div className="bg-[#45B5A1] text-white p-1 md:p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          <span className="text-lg md:text-2xl font-bold tracking-wider text-[#2C7A6B]">
            Medi<span className="text-[#45B5A1]">Go</span>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mt-8">
          <VendingMachine />
          <TouchScreen />
        </div>
      </div>
    </main>
  )
}

