import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload ,faFileAlt ,faFolderPlus} from "@fortawesome/free-solid-svg-icons"; 
const SubBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-5">
            <p className="mg-4 ">Root</p>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
              
                    <button className="btn btn-outline-dark mx-2 px-1">
                    <FontAwesomeIcon icon={faFileUpload} /> &nbsp;
                        Upload File
                    </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-dark mx-2">
                    <FontAwesomeIcon icon={faFileAlt} /> &nbsp;
                        Create File
                    </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-dark mx-2">
                    <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;
                        Create Folder
                    </button>
                </li>
            </ul>
        </nav>

    )
}

export default SubBar
