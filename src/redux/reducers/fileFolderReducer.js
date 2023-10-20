//How to do
/*
Reducer: Reducers are the functions that take the current state and an action as arguments, and return a new state result
*/
import * as types from "../actionTypes/fieFolderActionTypes"
const initialState = {
    isLoading: true,
    currentFolder: "",
    userFolders: [],
    userFiles: [],
    adminFolders: [],
    adminFiles: [],
}
const fileFoldersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_FOLDER:
            return {
                ...state,
                userFolders: [...state.userFolders, action.payload]
            };
        case types.ADD_FOLDERS: //this is to get all the folders from the firebase

            return {
                ...state,
                userFolders: action.payload
            };
        case types.SET_LOADING:      //is to get folder and loading
            return {
                ...state,
                isLoading: action.payload
            };
        case types.CHANGE_FOLDER:
            return {
                ...state,
                currentFolder: action.payload,
            }
        default:
            return state;
    }
}
export default fileFoldersReducer;