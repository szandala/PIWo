import { useState } from "react";
import ListItem from "../Components/ListItem";


const Home = () => {

  const [todoList, setTodoList] = useState([
    "Zrobić pranie",
    "Kupić samochód",
    "Zrobić pizzę",
  ]);

  const [query, setQuery] = useState("");

  const todoListHTML = todoList
    .filter(it => it.includes(query))
    .map(it => <ListItem key={it} text={it} jamnik={"pies"}/>)

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
