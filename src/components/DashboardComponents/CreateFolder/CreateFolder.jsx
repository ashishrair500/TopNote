
import { useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { createFolder } from '../../../redux/actionCreators/fileFoldersActionCreator'

const CreateFolder = ({ setIsCreateFolderOpen }) => {


  const [FolderName, setFolderName] = useState('')

  const { userFolders, user, currentFolder } = useSelector(
    (state) => ({
      //jo folder abhi open hai dashboard me uske ander jitne folder hai bo ha "userFolder" , jis user ke hai bo hai "user" or jis folder me uska name hai "currentFolder"  or ye sab help karenge new folder banane me;       useSelector ki help se redux se la rahe hai


      userFolders: state.filefolders.userFolders,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
    }),
    shallowEqual

  );
  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    if (currentFolder === "root") {

      const folderPresent = userFolders.find((folder) => folder.name === name);
      if (folderPresent) {
        return true
      }
      else {
        return false
      }
    } else {

    }
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    if (FolderName) {

      if (FolderName.length > 3) {
        if (!checkFolderAlreadyPresent(FolderName)) {
          //here we are making new folder and send to the redux using dispatch
          const data = {
            createdAt: new Date(),
            name: FolderName,
            userId: user.uid,          //adding: yaha pr bhi kuchh locha krna padega
            createdBy: user.displayName,
            path: currentFolder === "root" ? [] : ["Parent Folder Path"],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),

          };


          dispatch(createFolder(data))

        }
        else {
          alert('Folder already present')
        }
      }
      else {
        alert('Folder name must be greater than 3 characters')
      }
    } else {
      alert('Folder name is required')
    }
  }
  console.log(user.uid+"from createfolder component")
  return (
    <div
      className='col-md-12  position-fixed top-0 left-0 w-100'
      style={{
        background: "rgba(0,0,0,0.4)", zIndex: 9999
      }}
    >
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-4 mt-5 bg-white rounded p-4'>
          <div className='d-flex justify-content-between'>
            <h4>Create Folder </h4>
            <button className='btn' onClick={() => setIsCreateFolderOpen(false)}>
              <FontAwesomeIcon icon={faTimes}
                className='text-black'
                size='sm'

              />
            </button>
          </div>
          <hr />
          <div className='d-flex flex-column align-items-center'>
            <form className='mt-3 w-100' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='folderName'
                  placeholder='Folder Name'
                  value={FolderName}
                  onChange={(e) => setFolderName(e.target.value)}
                />


              </div>
              <button type='submit' className='btn btn-primary mt-5 form-control'>
                Create Folder
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateFolder