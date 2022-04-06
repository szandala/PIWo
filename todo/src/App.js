import "./App.css";
import { useState, useEffect, useReducer } from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from "./Pages/Search";
import axios from "axios";
import NameContext from "./Contexts/NameContext";
import Footer from "./Pages/Footer";
import {initState, reducer, ReducerContext} from "./Contexts/ReducerContext";


function App() {
  const [toDos, setToDos] = useState([]);
  const [state, dispatcher] = useReducer(reducer, initState);

  useEffect(() => {
    axios.get("http://localhost:3000/dummy/todos.json")
          .then(res => {
            const todos = res.data.map(it=>it.title);
            setToDos(todos);
            console.log("bazinga");
          });
    },[]);


  return (
    <div className="App">
      <header>
        <h2>This is the header</h2>
      </header>
      <ReducerContext.Provider value={[state, dispatcher]}>
      <NameContext.Provider value={useState("")}>
      <main>

        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nie_ma">nie klikać</NavLink>

          <button onClick={()=>dispatcher({type: "increment"})}>increment</button>
          <button onClick={()=>dispatcher({type: "decrement"})}>decrement</button>

        </nav>

        <Routes>

          <Route path="/" element={<Home toDos={toDos} setToDos={setToDos} />}/>
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
          <Route path="/search" element={<Search toDos={toDos}/>} />
        </Routes>
        </BrowserRouter>

      </main>
      <Footer />
      </NameContext.Provider>
      </ReducerContext.Provider>
    </div>
  );
}

export default App;
