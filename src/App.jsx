import './App.css'
import Sidenav from './Sidenavbar/Sidenav'
import{Routes,Route} from 'react-router-dom'
import Navbar from './Navbarfolder/Navbar'
import Emplist from './Empcomponents/Emplist'
import Addnewemp from './Empcomponents/Addnewemp'
import UpdateEmployee from './Empcomponents/UpdateEmployee'
import ViewEmployee from './Empcomponents/ViewEmployee'


function App() {
  return (
    <>
    <div>
    <Navbar/>
    
    <div className='flex flex-row'>
      <div className='w-60 bg-gray-300'>
      <Sidenav/>
      </div>
      <Routes>
        <Route path='/' element={<Emplist/>}/>
        <Route path='/Addnewemp' element={<Addnewemp/>}/>
        {/* <Route path='/Empview' element={<Empview/>}/> */}
        <Route path='/UpdateEmployee/:id' element={<UpdateEmployee/>}/>
        <Route path='/ViewEmployee/:id' element={<ViewEmployee/>}/>
      </Routes>
      </div>
      </div>
    </>
  )
}

export default App
