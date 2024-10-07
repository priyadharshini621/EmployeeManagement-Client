import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addnewemp from './Addnewemp';
import { Link } from 'react-router-dom';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";




export default function Emplist() {
  const [employer, setEmployer] = useState([]);

  // Fetch employees from API on component mount
  useEffect(() => {
    console.log("within useeffect");
   
    (axios.get("http://localhost:8000/employee/getEmployee")).then((res)=>{
      console.log(res);
      const empData=res.data;

      const response=empData.response;
      console.log("db res:",response);
      setEmployer(response);
      console.log("employee:",employer);
    })

    // fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    
    console.log("within handledelete");
    console.log("ID within handledelete:",id )
    await axios.delete(`http://localhost:8000/employee/deleteEmployee/${id}`).then((res) => {
      console.log("response:", res);
    
    })
  }
     
  return (
    <>
    <div className="container mx-auto p-4">
     
      <Link to={'/Addnewemp'}><button className='text-white bg-blue-900 p-5 py-2 float-end border-solid border-2 border-indigo-600 flex'> <IoMdAddCircleOutline className='mt-1 mr-2'/>Add Employee</button></Link>

      {/* Employee Table */}
      <h2 className=" font-bold mb-4 text-3xl ">Employee</h2>
      <table className="min-w-full bg-white border border-gray-300 mt-10">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
           
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Department</th>
            <th className="py-2 px-4 border">Designation</th>
            <th className="py-2 px-4 border">Project</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border ">Action</th>
          </tr>
        </thead>
        <tbody>
          {employer.map((employee) => (
            <tr key={employee._id} className="hover:bg-gray-100">
              
              <td className="py-2 px-4 border">{employee.Name}</td>
              <td className="py-2 px-4 border">{employee.Employee_ID}</td>
              <td className="py-2 px-4 border">{employee.Department}</td>
              <td className="py-2 px-4 border">{employee.Designation}</td>
              <td className="py-2 px-4 border">{employee.Project}</td>
              <td className="py-2 px-4 border">{employee.Type}</td>
              <td className="py-2 px-4 border">{employee.Status}</td>
              <td  className='flex flex-row py-2 px-4 border'>
                <Link to={`/ViewEmployee/${employee._id}`}><FaEye className='mr-2'/></Link>
                <Link to={`/UpdateEmployee/${employee._id}`}><FaPen className='mr-2'/></Link>
              <button onClick={()=>handleDelete(employee._id)}><MdDelete className='2'/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  )
}

