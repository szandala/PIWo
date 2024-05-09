import { useState } from "react";
import ListItem from "../Components/ListItem";
import { useOutletContext } from "react-router-dom";

const New = () => {
  const [newTodo, setNewTodo] = useState("");


  // const [todoList, setTodoList] = useState([
  //   "Zrobić pranie",
  //   "Kupić samochód",
  //   "Zrobić pizzę",
  // ]);
  // const [todoList, setTodoList] = useState();
  // wczesniej mieliśmy tutaj obiekt z todoListą.
  // teraz tworzymy go w App.js i przekazujemy
  const [todoList, setTodoList] = useOutletContext()

  const todoListHTML = todoList
    .map(it => <ListItem key={it.id} text={it.text} jamnik={"pies"}/>)

  const handleAddNew = () => {
    if(newTodo !== "") {
      const tempTodo = {
        id: todoList.length,
        text: newTodo
      }
      setTodoList(todoList.concat([tempTodo]));
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
