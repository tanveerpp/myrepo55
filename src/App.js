import React from 'react'
import store from './store'
import { useDispatch, useSelector } from 'react-redux';
import {square,cube,pow} from './Action';
import Child from './Child';
export const App = () => {
  store.subscribe(()=>console.log(store.getState()));
  let init=useSelector((state)=>state.Squarecube)
  let dispatch=useDispatch();
  return (
    <>
    <h1>App Component is running</h1>
    <h2>value is {init}</h2>
    <button onClick={()=>{dispatch(square())}}>square</button>
    <button onClick={()=>{dispatch(cube())}}>cube</button>  
    <button onClick={()=>{dispatch(pow(5))}}>pow</button>  
    <Child/>
    </>
  )
}
export default App