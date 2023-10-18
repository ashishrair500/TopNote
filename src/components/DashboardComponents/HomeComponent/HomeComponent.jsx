import React from 'react'
import ShowItems from '../ShowItems/ShowItems'
import { shallowEqual, useSelector } from 'react-redux';

const HomeComponent = () => {

  const folders = ["newFolder", "newfolder2"];
  const files = [{name:"newfiles"}, {name:"NewFIles2"}];

  const { isLoading, userFolders } = useSelector((state) => ({ //this might create a problem
    isLoading: state.filefolders.isLoading,
    userFolders: state.filefolders.userFolders,      //all the folders coming from redux
  }), shallowEqual)

  return (
    <div className='col-md-12 w100'>
      {
        isLoading ? (
          <h1 className='display-1 my-5 text-center'>Loading...</h1>
        ) : (
          <>
            <ShowItems title={"Created-Folders"} type={"folder"} items={userFolders} />
           // <ShowItems title={"Created-Files"} type={"file"} items={files} />
          </>
        )}
    </div>
  )
}

export default HomeComponent;
