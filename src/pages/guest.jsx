import React from 'react'
import { useState, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { X, Menu, Plus, Calendar } from 'lucide-react';
import { Printer } from 'lucide-react';
import { LuPrinter } from 'react-icons/lu';
const guest = () => {
    const [showX, setshowX] = useState(false)
    const [issueDate, setissueDate] = useState(null)
    const [dueDate, setdueDate] = useState(null)
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    function handleshowPicker() {
        // Safely opens the native calendar popup programmatically
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    }
    return (
        <>
            <nav className=' '>

                <div className="relative min-w-full bg-[#ffff] md:p-8 py-8 px-4 md:px-8 h-8 flex gap-8  justify-between items-center z-20">
                    <div className='flex items-center gap-1 '>
                        {showX ? <X className='md:hidden mr-1' onClick={() => setshowX(!showX)} /> : <Menu className='md:hidden mr-2' onClick={() => setshowX(!showX)} />}
                        <img className='md:w-[42px] w-[28px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt51zEvozEhQyIVSndg4_cMZ6AqePz8nqgGtBDZSDrmEyBlyeuRVPEnQ&s=10" alt="" />
                        <h2 className='inter-semibold  md:text-2xl text-xl '>InvoiceBuilder</h2>
                        <h2 className='px-2 py-1 bg-blue-400 text-white rounded-[4px] ml-2'>Guest</h2>
                    </div>
                    <div className='flex gap-6 items-center justify-center'>
                        <button className='border-2 border-blue-300 cursor-pointer text-blue-700 px-4 py-1 rounded-[8px]'>Sign In/ Register</button>
                        <button className='border-2 border-blue-300 text-white cursor-pointer bg-blue-700 px-4 py-2 rounded-[8px]'>Download PDF</button>
                        <button className='flex items-center gap-1 text-gray-700 text-xl gap-1 cursor-pointer'>
                            <LuPrinter />
                            Print</button>
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

            {/* Section Below the NavBar */}
            <div className='bg-[#E9EDF0] min-w-full min-h-[90vh] p-4'>
                {/* Invoice Section */}
                <div className='max-w-4xl  min-h-[70vh] bg-[#ffff] mx-auto my-8  shadow-lg  px-12 py-4'>
                    <h2 className="inter-semibold text-4xl text-center mt-6">INVOICE</h2>
                    <div className='flex justify-between items-center mt-6'>

                        <div className='border-2 border-dotted gap-2 flex items-center rounded-lg justify-center p-8 py-12'>
                            <Plus size={28} />
                            <h2>Add Your Company Logo</h2>

                        </div>
                        <div className=' flex flex-col items-center justify-center p-8'>

                            <div className='flex flex-col gap-2 mt-4 justify-center items-end'>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        < h4 className='inter-semibold '>Issued Date :</h4>
                                        <label htmlFor="issuedDate" className='border-1 p-1 gap-8 rounded-sm cursor-pointer flex justify-between items-center' onClick={handleshowPicker}>
                                            {issueDate || 'Select Date'} <Calendar />
                                        </label></div>

                                    <input
                                        ref={inputRef}
                                        name="issuedDate"
                                        id="issuedDate"
                                        type="datetime-local"
                                        className="border-1 p-1 rounded-sm cursor-pointer absolute opacity-0"
                                        onChange={(e) => setissueDate(e.target.value)}
                                    />
                                </div>
                                <div className='flex gap-2 items-center justify-end'>
                                    <div className='flex gap-2  justify-end'>
                                        < h4 className='inter-semibold '>Due Date :</h4>
                                        <label htmlFor="issuedDate" className='border-1 p-1 gap-8 rounded-sm cursor-pointer flex justify-between items-center' onClick={handleshowPicker}>
                                            {dueDate || 'Select Date'} <Calendar />
                                        </label></div>

                                    <input
                                        ref={inputRef2}
                                        name="issuedDate"
                                        id="issuedDate"
                                        type="datetime-local"
                                        className="border-1 p-1 rounded-sm cursor-pointer absolute opacity-0"
                                        onChange={(e) => setdueDate(e.target.value)}
                                    />
                                </div>
                            </div>


                        </div>

                    </div>
                    <hr />

                </div>

            </div>

        </>


    )
}

export default guest
