import React from 'react'

const Spinner = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen text-white bg-[#0e0e0e] gap-6">
  {/* Spinner */}
  <div className="flex items-center gap-3">
    <svg
      className="h-7 w-7 animate-spin text-orange-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <span className="text-sm text-gray-300 tracking-wide">
      Running audit — please wait…
    </span>
  </div>

  {/* Optional Tip */}
  <p className="text-xs text-gray-500 italic">
    Optimizing site performance and SEO metrics...
  </p>
</div>
    </>
  )
}

export default Spinner