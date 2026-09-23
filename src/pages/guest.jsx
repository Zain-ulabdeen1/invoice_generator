import React from 'react'
import { useState, useRef } from 'react'

import { X, Menu, Plus, Calendar, Edit, Eye, Camera, PlusCircle, DeleteIcon, Trash } from 'lucide-react';

import { LuPrinter } from 'react-icons/lu';
import { BsBasket } from 'react-icons/bs';
const guest = () => {
    const [showX, setshowX] = useState(false)
    const [issueDate, setissueDate] = useState(null)
    const [dueDate, setdueDate] = useState(null)
    const [showSection, setshowSection] = useState("addInfo")
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

                <div className="relative min-w-full bg-[#ffff] border-b-1 md:p-8 py-8 px-4 md:px-8 h-8 flex gap-8  justify-between items-center z-20">
                    <div className='flex items-center gap-1 '>
                        {showX ? <X className='md:hidden mr-1' onClick={() => setshowX(!showX)} /> : <Menu className='md:hidden mr-2' onClick={() => setshowX(!showX)} />}
                        <img className='md:w-[42px] w-[28px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt51zEvozEhQyIVSndg4_cMZ6AqePz8nqgGtBDZSDrmEyBlyeuRVPEnQ&s=10" alt="" />
                        <h2 className='inter-semibold  md:text-2xl text-xl '>InvoiceBuilder</h2>
                        <h2 className='px-2 py-1 bg-blue-400 text-white rounded-[4px] ml-2'>Guest</h2>
                    </div>
                    <div className='flex gap-6 items-center justify-center'>
                        <button className='border-2 border-blue-300 cursor-pointer md:block hidden text-blue-700 px-4 py-1 rounded-[8px]'>Sign In/ Register</button>
                        <button className='flex gap-1 border-2 border-blue-300 text-white cursor-pointer bg-blue-700 px-1 py-1 md:px-4 md:py-2 rounded-[8px]'>Download <span className='md:block hidden'>PDF</span></button>
                        <button className='md:flex  hidden items-center gap-1 text-gray-700 text-xl gap-1 cursor-pointer'>
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

                <div className='flex justify-center items-center gap-2 bg-[#F2F3F7]'>
                    <button
                        onClick={() => setshowSection("addInfo")}
                        className={`md:px-8 px-4 md:py-4 py-2 inter-normal flex cursor-pointer transition-all duration-150 items-center gap-2 ${showSection === "addInfo" && "bg-[#D4E4F3] text border-blue-600 border-b-4"}`}> <Edit className={`${showSection === "addInfo" && "text-blue-400"}`} /> Add Information</button>
                    <button
                        onClick={() => setshowSection("preview")}
                        className={`md:px-8 px-4 md:py-4 py-2 inter-normal flex cursor-pointer transition-all duration-150 items-center gap-2 ${showSection === "preview" && "bg-[#D4E4F3] text border-blue-600 border-b-4"}`}> <Eye /> Preview Invoice</button>
                </div>
                <div className='min-h-[83vh] bg-[#E8ECEF]'>
                    {
                        showSection === "addInfo" && <>
                            <div className='min-h-full md:px-16 px-4 py-8 md:flex-row flex flex-col  gap-6 min-w-full'>

                                <div className='min-w-[30%] bg-white shadow-lg p-6 rounded-lg flex flex-col gap-4 '>
                                    <h2 className='inter-semibold text-xl'>1. Sender & Company Details</h2>
                                    <input type="text" className='px-4 py-1 inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='From (Company Name)' />

                                    <textarea name="" className='px-4 py-1  focus:border-2 inter-normal outline-none border-1 rounded-lg ' placeholder='Address' id=""></textarea>
                                    <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>

                                        <h3 className='inter-semibold mt-1 md:min-w-40'>City, State, Zip :</h3>
                                        <input type="text" className='flex-1   px-2 py-1 inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Enter City :' />
                                    </div>
                                    <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>

                                        <h3 className='inter-semibold mt-1 md:w-40'>Email :</h3>
                                        <input type="text" className='flex-1   px-2 py-1 inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Sender Email:' />
                                    </div>
                                    <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>

                                        <h3 className='inter-semibold mt-1 md:w-40 '>Phone :</h3>
                                        <input type="text" className='flex-1   px-2 py-1 inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Sender phone number :' />

                                    </div>
                                    <div className='flex flex-col gap-1 mt-2'>
                                        <h3 className='inter-semibold text-xl '>Upload Custom Logo</h3>
                                        <div className='flex items-center justify-center gap-1 border-2 rounded-xl border-dotted p-12 text-gray-500 inter-semibold mx-auto min-w-full'>

                                            <label htmlFor="image" className=' flex items-center justify-center flex-col gap-2 cursor-pointer z-10'>
                                                <Camera />
                                                <h3>Drop Custom Logo</h3></label>
                                            <input type="file" name='image' className=' absolute opacity-0 p-4 z-10' />

                                        </div>
                                    </div>
                                </div>
                                <div className='  flex gap-2 flex-col'>
                                    <div className='md:flex-row flex flex-col  gap-6'>
                                        {/* Contact Info Table  */}


                                        <div className=' bg-white shadow-lg p-6 rounded-lg flex flex-col gap-4 '>
                                            <h3 className='inter-semibold text-xl'>2. Contact & Bill-To Info</h3>

                                            <input type="text" className='px-4 py-1 inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='To (Client Name)' />
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Contact Person :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Person Contact Number:' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Client Address :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Address of Client:' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>City, State, Zip :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Enter City:' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Client Email :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Email of Client:' />
                                            </div>

                                        </div>

                                        {/* Contact info Ends Here */}

                                        {/* Basic Container Starts Here */}
                                        <div className='bg-white shadow-lg p-6 rounded-lg flex flex-col gap-4 '>
                                            <h3 className='inter-semibold text-xl'>3. Invoices Basics and Timings</h3>

                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Invoice # :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Invoice Title' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Invoice Date:</h3>
                                                <input type="datetime-local" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Address of Client:' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Due Date :</h3>
                                                <input type="datetime-local" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Address of Client:' />
                                            </div>
                                            <div className='md:flex-row flex flex-col justify-between items-center  md:gap-4 gap-1'>
                                                <h3 className='inter-semibold mt-1 w-35'>Payment Terms :</h3>
                                                <input type="text" className='px-2 py-1 flex-1   inter-normal focus:border-2 outline-none border-1 rounded-lg mt-2' placeholder='Enter City:' />
                                            </div>
                                            <div className='flex justify-start items-center gap-2 '>
                                                <div className='flex gap-1 items-center'>
                                                    <h3 className='inter-semibold mt-1 '>Currency</h3>
                                                </div>
                                                <div className='flex gap-1 items-center '>
                                                    <h3 className='inter-semibold mt-1 '>Template :</h3>
                                                    <div className='flex gap-2 items-center'>
                                                        <input type="radio" id="dark" name="dark" value="dark" checked />
                                                        <label for="email">Dark</label>
                                                        <input type="radio" id="light" name="light" value="light" />
                                                        <label for="email">Light</label></div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* Basic Container Starts Here */}

                                    <div className='bg-white shadow-lg px-6  py-6 rounded-lg flex flex-col gap-4 min-w-full mt-4 md:overflow-x-hidden overflow-x-auto'>
                                        <h3 className='inter-semibold text-xl'>3. Services / Line Items</h3>
                                        <div className='flex flex-col p-2 rounded-md gap-2 md:overflow-x-hidden overflow-x-scroll '>

                                            <div className='min-w-full flex  bg-gray-300 p-2 rounded-md md:overflow-x-hidden overflow-x-auto' >
                                                <h3 className='inter-semibold w-[90%] md:w-[40%]'>Description</h3>
                                                <div className='flex md:gap-16 gap-8 md:m-0 ml-8'>
                                                    <h4 className='inter-semibold '>Quantity</h4>
                                                    <h4 className='inter-semibold '>Rate   </h4>
                                                    <h4 className='inter-semibold '>Discount</h4>

                                                </div>



                                            </div>
                                            <div className='bg-white flex justify-between md:gap-1 gap-2 items-center overflow-x-auto md:overflow-x-hidden'>
                                                <textarea type="text" className=' md:px-2 focus:border-2 py-1 bg-white border min-w-[40%] outline-none rounded-lg h-8 md:h-12' placeholder='Enter Product Description' />
                                                <input type="text" className=' md:px-2 focus:border-2  bg-white w-[70px] md:w-[100px] md:py-2 py-1   border outline-none rounded-lg' placeholder='Qty ' />
                                                <input type="text" className=' md:px-2 focus:border-2  bg-white  w-[70px] md:w-[100px] md:py-2 py-1 border outline-none rounded-lg' placeholder='Rate ' />
                                                <input type="text" className=' md:px-2 focus:border-2  bg-white w-[70px] md:w-[100px] md:py-2 py-1 border outline-none rounded-lg' placeholder='Discount ' />
                                                <button className='bg-blue-400 md:p-2 p-1 gap-1 rounded-lg text-white inter-semibold flex items-center justify-center float-end cursor-pointer hover:bg-blue-500 transition-all duration-150 '>
                                                    <PlusCircle className='md:block hidden' />
                                                    Add <span className='md:block hidden'>New Item</span></button>
                                                <div>
                                                    <Trash className='cursor-pointer' /></div>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Services Container End Here */}
                                </div>



                            </div>
                        </>
                    }

                </div>
            </nav>




        </>


    )
}

export default guest
