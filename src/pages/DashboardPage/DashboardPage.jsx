import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'


import Navbar from '../../components/DashboardComponents/Navbar/Navbar'
import SubBar from '../../components/DashboardComponents/SubBar/SubBar'
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent'

const DashboardPage = () => {

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated); //getting isAuthenticated from redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, []);

  return (
    <>
      <Navbar />
      <SubBar />
      <HomeComponent />
    </>
  )
}

export default DashboardPage
