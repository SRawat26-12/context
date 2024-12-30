import { useContext } from "react"
import { mycontext } from "./CounterContext";

const Counter = () => {
    const {count,setCount}=useContext(mycontext);
  return (
    <>
      <h1>Counter Program:{count}</h1>
      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter
