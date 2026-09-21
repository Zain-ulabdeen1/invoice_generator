import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="min-w-full bg-[#ffff] p-8 h-8 flex gap-8 justify-around  items-center">
      <div className='flex items-center gap-1 '>
        <img className='w-[42px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt51zEvozEhQyIVSndg4_cMZ6AqePz8nqgGtBDZSDrmEyBlyeuRVPEnQ&s=10" alt="" />
        <h2 className='inter-semibold text-2xl'>InvoiceMaster</h2></div>
      <div className='flex items-center gap-8 inter-normal'>
        <button className='flex items-center gap-1 cursor-pointer '>Features  <IoIosArrowDown></IoIosArrowDown> </button>
        <Link className=''>Templates</Link>
        <Link className=''>Pricing</Link>

      </div>
      <div className='flex items-center gap-8 inter-normal'>
        <Link className=''>Login </Link>
        <button className='cursor-pointer  p-2 bg-blue-600 rounded-lg text-[#ffff] hover:bg-blue-700 transition-all duration-150'>Get Started Free </button>



      </div>
    </nav>
  )
}

export default Navbar
