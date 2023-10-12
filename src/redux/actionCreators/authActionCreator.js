import * as types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase";

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload
    };
}

const logoutUser = () => {
    return {
        type: types.SIGN_OUT,
    };
}

//action creator
//----------------------------------------------------------------action creator-1---------------------------------------------------------------------------

export const signInUser = (email, password, setSuccess) => (dispatch) => {
    console.log(email, password)
    fire.auth().signInWithEmailAndPassword(email, password).then(user => {
        dispatch(
            loginUser({
                uid: user.user.uid,
                displayName: user.user.displayName,
                email: user.user.email,
            })
        );
        setSuccess(true);
        console.log(user);
    }).catch(error => { alert("Invalid : User not exist") })
};

//-----------------------------------------------------action creator-2-----------------------------------------------------------------------------------------

/*name,email,password,setSuccess are coming from RegisterForm through the use of dispatcher after getting all these parameter user is created ,then after usercreated this method return a promise like uid ,name,email,  and also setting setSucces to true. */

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        fire
            .auth()
            .currentUser.updateProfile({
                displayName: name,
            }).then(() => {
                //after login we are getting these things from the firebase
                const currentUser = fire.auth().currentUser;
                dispatch(loginUser({
                    uid: currentUser,
                    name: currentUser.displayName,
                    email: currentUser.email,
                })
                );
                setSuccess(true);
                console.log(currentUser.user)
            }).catch((error) => {
                console.log(error)
            })

    }).catch((error) => {
        if (error.code === "auth/email-already-in-use") {
            alert("Email alread in use ")
        }
        if (error.code === "auth/invalid-email") {
            alert("Invalid email")
        }
        if (error.code === "auth/weak-password") {
            alert("weak email")
        }
    })
};

//-----------------------------------------------------------action creator-3-----------------------------------------------------------------------------------
//to sign out user whenever it click on logout button

export const signOutUser = (dispatch) => {

    fire.auth().signOut().then(() => {

        dispatch(logoutUser());

    })
}


//---------------------------------------------------------------action creator-4-----------------------------------------------------------------------------
//to check whether the user is logged in or not
export const checkIsLoggedIn = () => (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(
                loginUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                })
            );
        }

    })
}