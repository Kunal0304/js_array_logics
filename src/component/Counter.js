import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from "../redux/action";


const Counter = ({ counter, increment, decrement }) => {
  return (
    <>
      <p>Counter{counter} </p>
      <button onClick={increment}>inc</button>
      <button onClick={counter >=1 && decrement}>dec</button>
    </>
  );
};

 const mapStateToProp=(state)=>{
     return {
         counter: state.count
     }
 }



  const mapDispatchToProp =(dispatch)=>{
    console.log("+++++++++++++++++++");
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
    };
  }


export default connect(mapStateToProp, mapDispatchToProp)(Counter);