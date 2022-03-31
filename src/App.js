import Button from "./Button";
import { useState, useEffect } from "react"

function App() {
  const [count , setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  // console.log("I run every time")

  const [key, setKey] = useState("");
  const onChange = (event) => setKey(event.target.value);
    useEffect(() => {
      console.log("I run only once")
    }, []);

    useEffect(()=> {
        console.log("I run when 'key' changes")
    },[key])
  
    useEffect(()=> {
      console.log("I run when 'count' changes")
    },[count])
    
    useEffect(()=> {
      console.log("I run when 'key' & 'count' change")
    },[key, count])
  

  return (
    <div >
      <input 
        value={key}
        onChange={onChange}
        type="text"
        placeholder="search" 
      />
      <h1>{count}</h1>
      <button onClick={onClick}>버튼</button>
      {/* <Button text={"hey"}/> */}
    </div>
  );
}

export default App;
