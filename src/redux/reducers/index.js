import { combineReducers } from "redux";

//importing all reducers then exporting in onces
import authReducer from "./authreducer";
import fileFoldersReducer from "./fileFolderReducer";

const rootReducer = combineReducers({ auth: authReducer, 
    filefolders: fileFoldersReducer });

export default rootReducer;