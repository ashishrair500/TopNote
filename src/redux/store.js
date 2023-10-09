import thunk from "redux-thunk";
import authReducer from "./reducers/authreducer";
import {applyMiddleware,combineReducers,createStore} from "redux";
//import {configureStore} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    combineReducers({authReducer}),
    composeWithDevTools(applyMiddleware(thunk))
); 

export default store;