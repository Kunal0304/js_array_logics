import { SET_PERSON_ID } from "../Actions/Actiontype";
import { setProduct } from "../Actions/PersonAction";

export const initalState=[];

export const PersonReducers = (state = initalState,action) => {
  switch (action.type) {
    case SET_PERSON_ID:return [...action.payload]
    default:return state
  }
}; 