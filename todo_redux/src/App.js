import "./App.css";
import { useState, useEffect, useLayoutEffect, useMemo, useReducer } from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from "./Pages/Search";
import axios from 'axios';
import UserContext from "./Data/UserContext";
import Footer from "./Component/Footer";
import { ReducerContext, initState, reducer } from "./Data/ReducerContext";

function App() {
  const [toDos, setToDos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [state, dispatcher] = useReducer(reducer, initState);

  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos")
  //       .then(res => {
  //         const todos = res.data.map(it=>it.title);
  //         setToDos(todos);
  //         console.log("bazinga");
  //       });
  //     }, [counter])



      useEffect(() => {
        axios.get("http://localhost:3000/dummy/todos.json")
            .then(res => {
              const todos = res.data.todos.map(it=>it.text);
              setToDos(todos);
              console.log("bazinga");
            });
          }, [counter])


      return (
    <div className="App">
      <UserContext.Provider value={useState("")}>
        <ReducerContext.Provider value={[state, dispatcher]} >
      <header>
        <h2>This is the header</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nie_ma">nie klikać</NavLink>
          <button onClick={()=>setCounter(counter+1)}>Increment</button>
          <button onClick={()=>dispatcher({type: "increment"})}>Increment Reducer</button>
          <button onClick={()=>dispatcher({type: "decrement"})}>decrement Reducer</button>
        </nav>


        <Routes>
          <Route path="/" element={<Home toDos={toDos} setToDos={setToDos}/>}/>
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
          <Route path="/search" element={<Search toDos={toDos}/>} />
        </Routes>
        </BrowserRouter>
      </main>
      <Footer/>
      </ReducerContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
