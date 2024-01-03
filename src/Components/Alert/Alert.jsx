import React from 'react'

function Alert() {
  return (
    <>

<div class="rounded-md border-l-4 border-green-500 bg-green-100 p-4">
  <div class="flex items-center justify-between space-x-4">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-green-600"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
    <div>
      <p class="text-sm font-medium text-green-600">
      👋 Welcome Nerd!! Thanks For Using This Tool Hope You Like It Stay Tune For Future Updates
      </p>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer text-green-600"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  </div>
</div>



    
    
    </>
  )
}

export default Alert
