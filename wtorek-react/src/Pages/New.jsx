import { useState } from "react";
import ListItem from "../Components/ListItem";


const New = () => {
  const [newTodo, setNewTodo] = useState("");


  const [todoList, setTodoList] = useState([
    "Zrobić pranie",
    "Kupić samochód",
    "Zrobić pizzę",
  ]);

  const todoListHTML = todoList
    .map(it => <ListItem key={it} text={it} jamnik={"pies"}/>)

  const handleAddNew = () => {
    if(newTodo !== "") {
      setTodoList(todoList.concat([newTodo]));
      setNewTodo("")
    }
  }

  return <main>
    <input
      placeholder="New TODO"
      className="App-input"
      value={newTodo}
      onChange={(e)=>setNewTodo(e.target.value)} />
    <button onClick={handleAddNew}>Add new TODO</button>
    <ul>
      {todoListHTML}
    </ul>
  </main>
}

export default New;
