import { SET_PERSON_ID } from "./Actiontype";

// export const fetchFunction = dispatch => {
//   return async (dispatch) => {
//     console.log(dispatch, "aaaaa");
//     const res = await fetch("https://api.github.com/users/xiaotian/repos")
//     const data = await res.json();
//     console.log(data);

//     dispatch(setProduct(data.id));
//   };
// };


export const fetchFunction = () => async (dispatch) => {
  const response = await fetch("https://api.github.com/users/xiaotian/repos");
  const res=await response.json()
  // console.log(res)
  const result=res?.flat().map(i=>i.id)
  // console.log(result);
  dispatch(setProduct(result));
};


// export const fetchFunction = ()=>({
//     type:SET_PERSON_ID
// })

export const setProduct = (data = null) => {
  if (data) {
    return { type: SET_PERSON_ID, payload: data };
  }
};
