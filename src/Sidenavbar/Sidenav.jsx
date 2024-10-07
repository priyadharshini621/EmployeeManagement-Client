import React from 'react'
import { Link } from 'react-router-dom'
import '../Sidenavbar/Sidenav.css'
import { RiDashboardFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { RiMessage2Fill } from "react-icons/ri";


export default function Sidenav() {
  return (
    <>
    <div className='nav'>
      <nav>
      
      
        <ul className='ml-10 mt-8 '>
        
          <li className='mt-6 font-bold'><RiDashboardFill/>Dashboard</li>
          <li className='mt-6 font-bold bg-blue-700 w-40 rounded-sm'><Link to='/'><GrUserWorker />Employee</Link></li>
          <li className='mt-6 font-bold'><SlCalender />Calender</li>
          <li className='mt-6 font-bold'><RiMessage2Fill />Messages</li>
        </ul>
      </nav>
    </div>
    </>
  )
}
