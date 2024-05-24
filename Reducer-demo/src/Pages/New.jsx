import { useState, useRef, useEffect } from "react";
import ListItem from "../Components/ListItem";
import { useOutletContext } from "react-router-dom";
import { createTodo } from "../data/todoService";

const New = () => {
  const [newTodo, setNewTodo] = useState("");

  const newTodoRef = useRef();

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
    .map(it => <ListItem key={it.id} text={it.text}/>)

  useEffect(()=>newTodoRef?.current.focus(), []);
  // newTodoRef.current.focus();

  const handleAddNew = () => {
    const newTodo = newTodoRef.current.value;
    if(newTodo !== "") {
      const tempTodo = {
        id: todoList.length,
        text: newTodo
      }
      setTodoList(todoList.concat([tempTodo]));
      // setNewTodo("")
      newTodoRef.current.value = "";
      newTodoRef.current.focus();
      createTodo(tempTodo);
    }
  }

  console.log("Rendering NEW")

  return <main>
    <input
      placeholder="New TODO"
      className="App-input"
      ref={newTodoRef}
      // value={newTodo}
      // onChange={(e)=>setNewTodo(e.target.value)}
      />
    <button onClick={handleAddNew} className="App-mini-button">Add new TODO</button>
    <ul>
      {todoListHTML}
    </ul>
  </main>
}

export default New;
