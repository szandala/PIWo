import { useState } from "react";
import ListItem from "../Components/ListItem";
// specjalny metoda do odczytywania ukrytego contextu
import { useOutletContext } from "react-router-dom";

const Home = () => {

  // const [todoList, setTodoList] = useState();
  // wczesniej mieliśmy tutaj obiekt z todoListą.
  // teraz tworzymy go w App.js i przekazujemy
  const [todoList, setTodoList] = useOutletContext()

  const [query, setQuery] = useState("");

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
    </main>
  )
}

export default Home;
