import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import DashboardPage from "../../../pages/DashboardPage/DashboardPage";
import { Link } from "react-router-dom";
const SubBar = ({ setIsCreateFolderModalOpen }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-5">

            <nav className="ms-5" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">root</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     New Folder
                        </li>
                </ol>
            </nav>

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
                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark mx-2" onClick={() => setIsCreateFolderModalOpen(true)}>
                        <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;
                        Create Folder
                    </button>
                </li>
            </ul>
        </nav>

    )
}

export default SubBar
