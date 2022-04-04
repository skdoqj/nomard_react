import Button from "./Button";
import { useState, useEffect } from "react"
 

function App() {
  const [toDo, setToDo] = useState("");
  //리스트
  const [toDoss, setToDoss] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    //서브밋 방지
    event.preventDefault();
    // 빈칸일 때
    if (toDo === "") {
      return;
    };
    //기존 리스트 안에 새로운 항목 추가하기 
    setToDoss(currentArray => [toDo, ...currentArray]);
    //창 비우기
    setToDo("");
    
  }
  console.log(toDoss.map( (item, index) => (
    <li key={index}>{item}</li>
  )));
  
  return (
    <div >
      <h1>My To Do ({toDoss.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write to do"></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoss.map( (item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
