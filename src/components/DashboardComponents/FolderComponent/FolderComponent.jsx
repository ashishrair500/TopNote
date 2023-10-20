import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


const FolderComponent = () => {
    const { folderId } = useParams();
    const { currentFolderData, childFolders } = useSelector((state) =>
    ({
        currentFolderData: state.filefolders.userFolders.find(
            (folder) => folder.docId === folderId
        ).data,
        childFolders: state.filefolders.userFolders.filter(
            (folder) => folder.parent === folderId
        ),
    }),
        shallowEqual
    );
    return (
        <div>
            {
                childFolders.length > 0 ? (
                    <p>
                        {JSON.stringify(childFolders)}
                    </p>
                ) : (
                    <p className='text-center my-5'>
                        Empty folder
                    </p>
                )
            }
        </div>
    )
}

export default FolderComponent
