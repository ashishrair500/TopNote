import React from 'react'
import { useParams } from 'react-router-dom'
const FolderComponent = () => {

    const { folderId } = useParams();
    return (
        <div>
            FolderComponent:{folderId}
        </div>
    )
}

export default FolderComponent
