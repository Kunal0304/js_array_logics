import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFunction } from "../Thunk/Actions/PersonAction";

function PersonInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFunction());
  }, []);
  const UserId = useSelector((state) => state);

  return (
    <div>
      <h2>Redux-Thunk</h2>
      {UserId?.map((e) => (
        <div key={e}>
          {console.log(e)}
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonInfo;
