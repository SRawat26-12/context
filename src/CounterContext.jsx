import { createContext, useState } from "react"
const mycontext=createContext()
const CounterContext = ({children}) => {
const [count,setCount]=useState(0);
  return (
    <>
    <mycontext.Provider value={{count,setCount}}>
         {children}
    </mycontext.Provider>
    </>
  )
}
export {mycontext};
export default CounterContext;
