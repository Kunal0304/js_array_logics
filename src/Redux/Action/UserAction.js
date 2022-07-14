import { USER_ADDRESS, USER_AGE, USER_MOBILE, USER_NAME } from "./ActionType";

export const UserName = (UserName) => ({
  type: USER_NAME,
  payload: UserName,
});
 
export const UserAge = (UserAge) => ({
  type: USER_AGE,
  payload: UserAge,
});

export const UserAddress = (UserAddress) => ({
  type: USER_ADDRESS,
  payload: UserAddress,
});

export const UserMobile = (UserMobile) => ({
  type: USER_MOBILE,
  payload: UserMobile,
});
