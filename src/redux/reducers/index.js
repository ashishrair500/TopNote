import authReducer from "./authReducer"
import { combineReducers } from "redux";


import fileFoldersReducer from "./fileFoldersReducer.js";
const rootReducer =
 combineReducers({ 
    auth: authReducer, 
    filefolders: fileFoldersReducer ,
});



export default rootReducer;
