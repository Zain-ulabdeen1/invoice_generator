import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  const [showopt, setshowopt] = useState(false)  
  return (
    <section className="hero-container w-full md:h-[50vh] grid grid-cols-1 grid-rows-1 overflow-hidden ">

      {/* Background Image */}
      <img
        src="/bg.jpg"
        fetchPriority='high'
        alt="Invoice background"
        class="col-start-1 row-start-1 w-full h-full  z-0"
      />

      {/* Hero Content */}
      <div class="col-start-1 row-start-1 z-10 flex flex-col md:ml-12 md:max-w-[38%] max-w-[30vh] gap-3 items-start justify-center text-center md:px-6 ml-5 md:py-0 py-6">

        <h2 class="text-2xl md:text-5xl  font-bold text-slate-900 text-start md:max-w-full max-w-[25vh]">
          Create Professional Invoices in Seconds
        </h2>

        <p class="text-start text-gray-600 max-w-[80%]">
          Create professional invoices in seconds, hoxs and complete imports and partners
        </p>
        <div className='flex flex-col'>
        <button onClick={()=>setshowopt(!showopt)} class="z-10 cursor-pointer items-center justify-between flex gap-1 md:mt-6 mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors">
          Get Started
          <IoIosArrowDown size={24}/>
        </button>
      {showopt &&  <div className='sub_nav z-0 p-2 flex flex-col gap-1 justify-start inter-normal rounded-b-xl bg-[#ffff]'>
        <Link className='hover:bg-gray-50 ' to="/guest">Start as Guest</Link>
        <Link className='hover:bg-gray-50 ' to="/guest">Create Account</Link>
         </div>} 

        
        </div>

      </div>

    </section>
  )
}

export default Main