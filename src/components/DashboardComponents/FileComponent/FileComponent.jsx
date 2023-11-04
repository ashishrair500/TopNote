import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Header from './Header';
import CodeEditor from './CodeEditor';
import { useState } from 'react';
import { useEffect } from 'react';
const FileComponent = () => {
    const { fileId } = useParams();
    const [fileData, setFileData] = useState("");
    const [prevFileData, setPrevFileData] = useState("");
    const navigate = useNavigate();
    const { currentFile, isAuthenticated } = useSelector(
        (state) => ({
            currentFile: state.filefolders.userFiles.find((file) => file.docId === fileId),
            isAuthenticated: state.auth.isAuthenticated,
        }),
        shallowEqual
    );
useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, []);



    useEffect(() => {
        if (currentFile) {
            setFileData(currentFile.data.data);
        }
    }, [currentFile, currentFile?.data.data]);


    const downloadFile = () => {
      
        const element = document.createElement("a");
        element.setAttribute("href", currentFile?.data.url);
        element.setAttribute("download", currentFile?.data.name);
        element.setAttribute("target", "_blank");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);     
    }
    if(isAuthenticated)
    return (
        <div>
            {
               isAuthenticated && fileData !== null ? (
                    <>
                        <Header
                            fileName={currentFile?.data.name}
                            fileData={fileData}
                            prevFileData={prevFileData}
                            fileId={fileId}
                        />
                        <CodeEditor fileName={currentFile?.data.name} data={fileData} setData={setFileData} />
                    </>
                ) :
                    (

               <div className='position-fixed left-0 top-0 w-100 h-100 bg-black text-white '>
                            {/* Sub Menu Bar */}
             <div className='d-flex py-4 mt-4 px-5 justify-content-between align-items-center '>
                                <p
                                    title={currentFile?.data.name}
                                    className="my-0"   >
                                    {currentFile?.data.name.length > 40 ?
                                        currentFile?.data.name.slice(0, 40) + "... ." +
                                        currrentFile?.data.extention :
                                        currentFile?.data.name
                                    }
                                </p>
                                <div className='d-flex align-items-center me-5'>
                                    <button className='btn btn-sm btn-outline-light me-3'
                                        onClick={() => navigate(-1)}> Go Back</button>

                                    <button className='btn btn-primary   me-3  '
                                    onClick={() =>  downloadFile()}
                                    >Download</button>
                                </div>



                            </div>
                  <div className='w-100 mt-4' style={{ height: '650px', width: 'auto' }}>

                              {
                                    currentFile?.data.extension.includes('pdf') ||
                                        currentFile?.data.extension.includes('docx') ||
                                        currentFile?.data.extension.includes('ppt') ||
                                        currentFile?.data.extension.includes('jpg') ||
                                        currentFile?.data.extension.includes('png') ||
                                        currentFile?.data.extension.includes('jpeg') ||
                                        currentFile?.data.extension.includes('txt') ?
                                     (

                                            <img
                                                src={currentFile?.data.url}
                                                alt={currentFile?.data.name}
                                                className='w-100 h-100 object-fit-contain '

                                            />
                                        ) :
                                        (
                                            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>

                                  <p className='text-center'>

                                   File Preview Not Available , Please Download the file to view it
                                                </p>
                                            </div>
                                        )

                                }
                            </div>
                        </div>


                    )
            }


        </div>
    )

    return (
        <div>
            <h1>Login First</h1>
        </div>
    )
}

export default FileComponent


