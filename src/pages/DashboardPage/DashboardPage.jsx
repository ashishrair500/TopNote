import React from 'react'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/DashboardComponents/Navbar/Navbar'

const DashboardPage = () => {

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated); //getting isAuthenticated from redux
  const navigate = useNavigate();

useEffect(()=>{
  if(!isLoggedIn){
    navigate("/")
  }
},[]);

  return (
    <div>
    <Navbar/>
    </div>
  )
}

export default DashboardPage
