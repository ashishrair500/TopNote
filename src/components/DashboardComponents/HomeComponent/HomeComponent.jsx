import React from 'react'
import ShowItems from '../ShowItems/ShowItems'

const HomeComponent = () => {

const folders=["newFolder","newfolder2" ];
const files=["newfiles", "NewFIles2"];

  return (
    <div className='col-md-12 w100'>
     <ShowItems title={"Created-Folders"} items={folders}/> 
     <ShowItems title={"Created-Files"} items={files}/>
    </div>
  )
}

export default HomeComponent
