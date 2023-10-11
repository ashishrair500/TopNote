import React from 'react'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

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
      <h1>Welcome to the DashboardPage</h1>
    </div>
  )
}

export default DashboardPage
