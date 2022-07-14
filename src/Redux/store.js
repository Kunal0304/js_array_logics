import {createStore} from "redux"
// import { rootReducer } from "./Reducers/combineReducer";
import { UserReducers } from "./Reducers/UserReducers";

export const store = createStore(UserReducers);