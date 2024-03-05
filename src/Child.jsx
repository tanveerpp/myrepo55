import React from 'react'
import store from './store'
import { useDispatch, useSelector } from 'react-redux';
import {square,cube} from './Action';
export const Child = () => {
  let init=useSelector((state)=>state.Squarecube)
  let dispatch=useDispatch();
  return (
    <>
    <h1>Child Component is running</h1>
    <h2>value is {init}</h2>
    <button onClick={()=>{dispatch(square())}}>square</button>
    <button onClick={()=>{dispatch(cube())}}>cube</button>  
    </>
  )
}
export default Child