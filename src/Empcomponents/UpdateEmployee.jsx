
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateEmployee() 
{ 
    console.log("within updateEmployee");
  const {id}=useParams();
  console.log("ID:",id);
  const [Name,setName]=useState('');
  const [Employee_ID,setEmployee_ID]=useState('');
  const [Department,setDepartment]= useState('');
  const [Designation,setDesignation]=useState('');
  const [Project,setProject] = useState('');
  const [Status,setStatus]=useState('');
  const [Type,setType]=useState('');
  useEffect(()=>{
    console.log("Within UseEffect");
  
    (axios.get(`http://localhost:8000/employee/getEmployeeById/${id}`)).then((res)=>{
      //console.log(res.data);
      const userData = res.data;
      const response = userData.response;
      console.log(response);
      setName(response.Name);
      setEmployee_ID(response.Employee_ID);
      setDepartment(response.Department);
      setDesignation(response.Designation);
      setProject(response.Project);
      setStatus(response.Status);
      setType(response.Type);
      //setTabData(response);
    
    })
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
        const formData={
            Name,
            Employee_ID,
            Department,
            Designation,
            Project,
            Status,
            Type,
        }
      await (axios.put(`http://localhost:8000/employee/updateEmployeeById/${id}`, formData)).then((res) => {
        console.log("response:", res);
  
      }) 
    }
  return (
    <>
    <div className="bg-white shadow-md rounded px-8 pt-6 w-1/2 pb-8 mb-4 mx-auto ">
      <h2 className="text-xl font-bold mb-4">Update Employee</h2>
      
      <form className='mx-auto ' onSubmit={handleSubmit}>
       {/* name field */}
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='EmployeeName'>
              {/* {Name.charAt(0).toUpperCase() + Name.slice(1).replace(/([A-Z])/g, ' $1')} */}
              EmployeeName
            </label>
            <input
              type="text"
              name='Name'
              value={Name}
              onChange={(e)=>{setName(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

        {/* id field */}
        <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Employee_ID'>
             {/* {Employee_ID.charAt(0).toUpperCase() + Employee_ID.slice(1).replace(/([A-Z])/g, ' $1')}  */}
              Employee_ID
            </label>
            <input
              type="text"
              name='Employee_ID'
              value={Employee_ID}
              onChange={(e)=>{setEmployee_ID(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        {/* Deparment field */}
        <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Department'>
              {/* {Department.charAt(0).toUpperCase() + Department.slice(1).replace(/([A-Z])/g, ' $1')} */}
              Deparment
            </label>
            <input
              type="text"
              name='Department'
              value={Department}
              onChange={(e)=>{setDepartment(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Designation field */}
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Designation'>
              {/* {Designation.charAt(0).toUpperCase() + Designation.slice(1).replace(/([A-Z])/g, ' $1')} */}
              Designation
            </label>
            <input
              type="text"
              name='Designation'
              value={Designation}
              onChange={(e)=>{setDesignation(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* project field */}
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Project'>
              {/* {Project.charAt(0).toUpperCase() + Project.slice(1).replace(/([A-Z])/g, ' $1')} */}
              Project
            </label>
            <input
              type="text"
              name='Project'
              value={Project}
              onChange={(e)=>{setProject(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* type field */}
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Type'>
              {/* {Type.charAt(0).toUpperCase() + Type.slice(1).replace(/([A-Z])/g, ' $1')} */}
              Type
            </label>
            <input
              type="text"
              name='Type'
              value={Type}
              onChange={(e)=>{setType(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* status field */}
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='Status'>
              {/* {Status.charAt(0).toUpperCase() + Status.slice(1).replace(/([A-Z])/g, ' $1')} */}
              Status
            </label>
            <input
              type="text"
              name='Status'
              value={Status}
              onChange={(e)=>{setStatus(e.target.value)}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
        <div className="flex items-center justify-between">
          <button
          type="submit"
            
            className="bg-blue-500 hover:bg-blue-700 ml-12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            
          >
            Confirm
          </button>
        </div>
          </form>
          </div>
          </>
  )
}
