import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
  const [showX, setshowX] = useState(false)
  return (
    <nav >
      <div className="relative min-w-full bg-[#ffff] md:p-8 py-8 px-4 h-8 flex gap-8 md:justify-around  justify-between items-center z-20">
        <div className='flex items-center gap-1 '>
          {showX ?<X className='md:hidden mr-1' onClick={() => setshowX(!showX)} />: <Menu className='md:hidden mr-2' onClick={() => setshowX(!showX)} />}
          <img className='md:w-[42px] w-[28px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt51zEvozEhQyIVSndg4_cMZ6AqePz8nqgGtBDZSDrmEyBlyeuRVPEnQ&s=10" alt="" />
          <h2 className='inter-semibold  md:text-2xl text-xl '>InvoiceMaster</h2></div>
        <div className=' items-center gap-8 inter-normal md:flex hidden'>
          <button className='flex items-center gap-1 cursor-pointer '>Features  <IoIosArrowDown></IoIosArrowDown> </button>
          <Link className=''>Templates</Link>
          <Link className=''>Pricing</Link>

        </div>
        <div className='flex items-center gap-8 inter-normal'>
          <Link className='md:inter-light md:underline-none inter-semibold underline'>Login </Link>
          <button className='cursor-pointer flex items-center justify-center gap-1  md:p-2 p-0 bg-blue-600 rounded-lg text-[#ffff] hover:bg-blue-700 transition-all duration-150 md:flex hidden'>Get Started <span className='md:flex hidden'>Free</span> </button>
        </div>
      </div>
      {/* Mobile Section */}
      {showX && <div className='sub_nav min-w-full min-h-36  md:hidden pl-4  top-0 bottom-0 z-10 flex flex-col gap-2 p-4'>

        <a className=' inter-normal'>Features</a>
          <a className='inter-normal'>Pricing</a>
          <a className=' inter-normal'>About</a>              
           <a className=' inter-normal'>Contact</a>
          <a className='cursor-pointer flex items-center justify-center gap-1 mt-1  md:p-2 p-2 bg-blue-600 rounded-lg text-[#ffff] hover:bg-blue-700 transition-all duration-150 ' >Get Started for Free</a>


        </div>}



        </nav>
        )
}

        export default Navbar
