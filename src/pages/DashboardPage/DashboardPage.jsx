import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'


import Navbar from '../../components/DashboardComponents/Navbar/Navbar'
import SubBar from '../../components/DashboardComponents/SubBar/SubBar'
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent'
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder'

const DashboardPage = () => {

const [isCreateFolderModalOpen,setIsCreateFolderModalOpen]=useState(false);

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated); //getting isAuthenticated from redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, []);

  return (
    <>
{
  //subBar me jab bhi koi create folder button pr click karega to isCreateFolderModalOpen true ho jayega jaise hi true hoga createFolder component render hoga of createfolder ke submit button ko click karega to isCreateFolderModalOpen false ho jayega or createFolder close ho jayega
  isCreateFolderModalOpen && (
    <CreateFolder
    setIsCreateFolderOpen={setIsCreateFolderModalOpen}
    />
  )
}
      <Navbar />
      <SubBar  setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      <HomeComponent />
    </>
  )
}

export default DashboardPage
