import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Route, Routes, useNavigate } from 'react-router-dom'


import Navbar from '../../components/DashboardComponents/Navbar/Navbar'
import SubBar from '../../components/DashboardComponents/SubBar/SubBar'
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent'
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder'
import { shallowEqual, useDispatch } from 'react-redux'
import { getFolders } from '../../redux/actionCreators/fileFoldersActionCreator'
import FolderComponent from '../../components/DashboardComponents/FolderComponent/FolderComponent'
const DashboardPage = () => {

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);


  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual);
  //getting isAuthenticated and isLoading from redux

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));         //jaise hi dashboard folder render hoga is .......is for getfolders
    }
  }, [isLoading, userId, dispatch]);

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
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      {/*nested routes*/}
      <Routes>
        <Route path='' element={<HomeComponent />} />
        <Route path='folder/:folderId' element={<FolderComponent/>} />
      </Routes>
    </>
  )
}

export default DashboardPage
