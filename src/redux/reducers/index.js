import fileFoldersReducer from "./fileFoldersReducer";
 
import { combineReducers } from "redux";

//import authReducer from "./authReducer";


const rootReducer =
 combineReducers({ 
    auth: authReducer, 
    filefolders: fileFoldersReducer ,
});



export default rootReducer;
