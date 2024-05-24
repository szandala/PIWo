import { useState } from "react";
import ListItem from "../Components/ListItem";
// specjalny metoda do odczytywania ukrytego contextu
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../contexts/noteContext";
import DoneContext from "../contexts/doneContext";


const Home = () => {

  // const [todoList, setTodoList] = useState();
  // wczesniej mieliśmy tutaj obiekt z todoListą.
  // teraz tworzymy go w App.js i przekazujemy
  const [todoList, setTodoList] = useOutletContext()
  const [query, setQuery] = useState("");

  const {setNote} = useContext(NoteContext);
  const {dispatch} = useContext(DoneContext);

  const todoListHTML = todoList
    .filter(it => it.text.includes(query))
    .map(it => <ListItem key={it.id} text={it.text} jamnik={"pies"}/>)

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  return (
    <main>
      <input
        placeholder="Search TODOs"
        className="App-input"
        value={query}
        onChange={handleSearch}/>

      <ul>
        {todoListHTML}
      </ul>
      <br/>
      <input
      className="App-input"
      onChange={e=>setNote(e.target.value)}/>
    <br/>
      <button onClick={()=>dispatch({type: "increment"})}>Increment by 1</button>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement by 1</button>

      <button onClick={()=>dispatch({type: "set_text", text: "pies"})}>Set text to 'pies'</button>
      <button
      onClick={()=>dispatch({type: "set_text", payload: {text: "kod"}})}>
        Set text to 'kod'</button>
    </main>
  )
}

export default Home;
