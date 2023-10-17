import * as types from "../actionTypes/fieFolderActionTypes"
const initialState={
    isLoading:false,
    currentFolder:"",
    userFolders:[],
    userFiles:[],
    adminFolders:[],
    adminFiles:[],
}
const fileFoldersReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CREATE_FOLDER:
            return{
                ...state,
                userFolders: [...state.userFolders,action.payload]
            };
            
        default: return state;
    }
}
export default fileFoldersReducer;