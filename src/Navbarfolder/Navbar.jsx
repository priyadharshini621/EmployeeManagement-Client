import React from 'react'
//import setting from '../assets/setting_img.jpeg'
//import bell from '../assets/bell_img.png'
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
    <div>
      <nav className=' bg-slate-200 border-1px solid border-gray-800 flex flex-row h-14 justify-between '>
      <h2 className='pl-4 mt-4 font-bold text-lg'>RS-TECH</h2>
        <ul className='flex flex-row pr-4 mt-4 pl-50'>
          <li className='pr-4'><IoSettingsSharp /></li>
          <li><FaBell /></li>
        </ul>
      </nav>
    </div>
    
    
    </>
  )
}
