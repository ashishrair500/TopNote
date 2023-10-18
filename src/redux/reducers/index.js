import { combineReducers } from "redux";

//importing all reducers then exporting in onces
import authReducer from "./authreducer";
import fileFoldersReducer from "./fileFolderReducer";
0
const rootReducer = combineReducers({ auth: authReducer, 
    filefolders: fileFoldersReducer });

export default rootReducer;