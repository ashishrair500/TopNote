import * as types from "../actionTypes/fieFolderActionTypes";
import fire from "../../config/firebase"


/*
Action:- Actions are the plain Javascript objects that have a type field. Actions only tell what to do , but they don't tell how to do
*/
//-------------------------------------------------------------actions--1---------------------------------------------------------------------------------------
const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload
});

//-------------------------------------------------------------actions--2---------------------------------------------------------------------------------------
//this is to get all the folders from the firebase
const addFolders = (payload) => ({
    type: types.ADD_FOLDERS,
    payload
})
//-------------------------------------------------------------actions--3---------------------------------------------------------------------------------------
const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload

})
//-------------------------------------------------------------actions--3---------------------------------------------------------------------------------------
const setChangeFolder = (payload) => ({
    type: types.CHANGE_FOLDER,
    payload,
})

//action Creators
/*Action Creator : Pure function which creates an action. Reusable , Portable and Easy to Test
*/
//------------------------------------------------------action---creator-----1----------------------------------------------------------------------------------
export const createFolder = (data) => (dispatch) => {

    fire
        .firestore()
        .collection("folders")
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();
            dispatch(addFolder(folderData));
            alert("folder created successfully");
        })
    console.log(data);
}

//----------------------------------------------------------------action--creator--2---------------------------------------------------------------------------
//this to get all the folders of the user who is logged in
export const getFolders = (userId) => async (dispatch) => {
    dispatch(setLoading(true));

    fire
        .firestore()
        .collection("folders")
        
        //here i have replaced userId with admin id T3XBsF3xtDMgTRQIi7xVQYqffpe2

        .where("userId", "==", "T3XBsF3xtDMgTRQIi7xVQYqffpe2")
        .get()
        .then(async (folders) => {

            const foldersData = folders.docs.map((folder) => ({
                data: folder.data(),
                docId: folder.id,
                // folderName:folder.name,
            })

            )
            // console.log("FileFOlderactioncreator"+data);

            //this is to get all the folders from the firebase
            dispatch(setLoading(false));      //if you have to check this again
            dispatch(addFolders(foldersData));
        });

}
/*


export const getFolders = (userId) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const foldersSnapshot = await fire
        .firestore()
        .collection("folders")
        .where("userId", "==", userId)
        .get();
  
      const foldersData = foldersSnapshot.docs.map((folders) => ({
        data: folders.data(),
        docId: folders.id,
      }));
      dispatch(setLoading(false));      //if you have to check this again

      dispatch(addFolders(foldersData));
    } catch (error) {
      // Handle errors, e.g., dispatch an error action
      console.error("Error fetching folders:", error);
      // You might want to dispatch an error action here
    }
  };
  
*/
//----------------------------------------------------------------action--creator--3---------------------------------------------------------------------------

export const changeFolder = (folderId) => (dispatch) => {
    dispatch(setChangeFolder(folderId));
}
