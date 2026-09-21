import React from 'react'
import { LuPencilRuler } from "react-icons/lu";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { GiSpeedometer } from "react-icons/gi";
const Main2 = () => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center md:p-6 p-2 '>
            <h2 className='inter-semibold text-3xl  md:mt-2 mt-4'>Key Features</h2>
            <div className='md:flex-row flex flex-col gap-8 justify-around min-w-full px-8'>

                <div className='flex flex-col gap-1 items-center justify-center   p-8 shadow-lg md:mt-6 rounded-lg'>
                    <div className='p-3 text-center rounded-[7px] text-blue-500 bg-[#E6F1FF]'>
                        <LuPencilRuler size={32}/> 
                    </div>
                    <h3 className='inter-semibold text-lg mt-2'>Easy Customization</h3>
                    <p className='inter-normal  max-w-[70%] text-slate-800 text-center '>Easy customizable invoices, Easy to Create and share.</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center p-8 shadow-lg mt-6 rounded-lg'>
                    <div className='p-3 text-center rounded-[7px] text-green-500 bg-[#E2F8EC]'>
                        <GiSpeedometer  size={32}/> 
                    </div>
                    <h3 className='inter-semibold text-lg mt-2'>Tracks Status</h3>
                    <p className='inter-normal  max-w-[70%] text-slate-800 text-center '>Easy customizable invoices, Easy to Create and share.</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center p-8 shadow-lg mt-6 rounded-lg'>
                    <div className='p-3 text-center rounded-[7px] text-green-500 bg-[#E2F8EC]'>
                        <RiDashboardHorizontalLine size={32}/> 
                    </div>
                    <h3 className='inter-semibold text-lg mt-2'>User Dashboards</h3>
                    <p className='inter-normal max-w-[70%] text-slate-800 text-center '>Easy customizable invoices, Easy to Create and share.</p>
                </div>

            </div>
        </div>
    )
}

export default Main2
