import './App.css'
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {Login ,Register,DashboardPage,HomePage} from "./pages";
import { useEffect } from 'react';
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreator';

const  App=()=> {

const dispatch=useDispatch();


//to check whether the user is logged in or not
//jaise hi koi app ko refresh karega ya back karega app.js dobara render hoga or 
useEffect(()=>{
  dispatch(checkIsLoggedIn());
  
},[]);

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<DashboardPage/>}></Route>

        </Routes>
      </div>
      
                                                                           
  )
}

export default App
