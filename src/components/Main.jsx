import React from 'react'

const Main = () => {
  return (
    <section className="hero-container w-full h-[50vh] grid grid-cols-1 grid-rows-1 overflow-hidden">

      {/* Background Image */}
      <img
        src="/bg.jpg"
        alt="Invoice background"
        class="col-start-1 row-start-1 w-full h-full  z-0"
      />

      {/* Hero Content */}
      <div class="col-start-1 row-start-1 z-10 flex flex-col ml-12 max-w-[38%] gap-3 items-start justify-center text-center px-6">

        <h2 class="text-3xl md:text-5xl font-bold text-slate-900 text-start">
          Create Professional Invoices in Seconds
        </h2>

        <p class="text-start text-gray-600 max-w-[80%]">
          Create professional invoices in seconds, hoxs and complete imports and partners
        </p>

        <button class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors">
          Get Started
        </button>

      </div>

    </section>
  )
}

export default Main