import './App.css'
import { Route, Routes } from "react-router-dom";

import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";
import  HomePage from "./pages/HomePage/HomePage" ;

const  App=()=> {


  return (
    
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>

        </Routes>
      </div>
      
                                                                           
  )
}

export default App
