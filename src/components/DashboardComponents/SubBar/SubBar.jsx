import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import DashboardPage from "../../../pages/DashboardPage/DashboardPage";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const SubBar = ({ setIsCreateFolderModalOpen }) => {
    const { userFolders, user, currentFolder } = useSelector(
        (state) => ({
          //jo folder abhi open hai dashboard me uske ander jitne folder hai bo ha "userFolder" , jis user ke hai bo hai "user" or jis folder me uska name hai "currentFolder"  or ye sab help karenge new folder banane me;       useSelector ki help se redux se la rahe hai
    
    
          userFolders: state.filefolders.userFolders,
          user: state.auth.user,
          currentFolder: state.filefolders.currentFolder,
        }),
        shallowEqual
    
      );


console.log(user.uid+" from subbar folder")

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-5">
          <nav className="ms-5" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">root</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                New Folder
              </li>
            </ol>
          </nav>
      
          {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (
            <>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button className="btn btn-outline-dark mx-2 px-1">
                    <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-dark mx-2">
                    <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className="btn btn-outline-dark mx-2"
                    onClick={() => setIsCreateFolderModalOpen(true)}
                  >
                    <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
            <a href="https://google.com" target="_blank" class="btn btn-primary">Go to Google</a>
                  
                </li>
                </ul>
          )}
        </nav>
      );
      
}

export default SubBar
