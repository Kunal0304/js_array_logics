import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { PersonReducers } from "./Reducers/PersonReducers";

export const store = createStore(PersonReducers, applyMiddleware(thunk));
