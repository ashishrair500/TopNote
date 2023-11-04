import authReducer from "./authReducer.js"
import fileFoldersReducer from "./fileFoldersReducer.js";
import { combineReducers } from "redux";





const rootReducer =
 combineReducers({ 
    auth: authReducer, 
    filefolders: fileFoldersReducer ,
});



export default rootReducer;
