import * as types from "../actionTypes/fieFolderActionTypes";
import fire from "../../config/firebase"

//actions
const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload
});
//action Creators
export const createFolder = (data) => (dispatch) => {
    fire
    .firestore()
    .collection("folders")
    .add(data)
    .then(async(folder) => {
        const folderData= await (await folder.get()).data();
        dispatch(addFolder(folderData));
        alert("folder created successfully");
    })
    console.log(data);
}