import {
  USER_ADDRESS,
  USER_AGE,
  USER_MOBILE,
  USER_NAME,
} from "../Action/ActionType";

const initialState = {Name: "kunal",Age:22,Mobile:123456,Address:"3/2 indore"};
export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state ,
        Name : action.payload
      }
    case USER_ADDRESS:
      return {...state,
        Address:action.payload}
    case USER_AGE:
      return { ...state,
         Age: action.payload };
    case USER_MOBILE:
      return { ...state,
         Mobile: action.payload };
    default:
      return state;
  }
};
