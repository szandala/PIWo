import "./App.css";
import { useState, useEffect, useReducer } from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from "./Pages/Search";
import axios from "axios";
import UserContext from "./Contexts/UserContext";
import Footer from "./Pages/Footer";
import {reducer, initState, ReducerContext} from "./Contexts/ReducerContext";
import Login from "./Pages/Login";
import { getAllToDos } from './firebase/todos';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/init";


function App() {
  const [toDos, setToDos] = useState([]);

  const [state, dispatcher] = useReducer(reducer, initState);

    const [user] = useAuthState(auth);

  useEffect(() => {
    // axios.get("http://localhost:3000/dummy/todos.json")
    // .then(res => {
    //   const todos = res.data.map(it=>it.title);
    //   setToDos(todos);
    // });
      getAllToDos(user).then((items)=>setToDos(items))
      }, [])

  return (
    <div className="App">
      <header>
        <h2>This is the header</h2>
      </header>
      <UserContext.Provider value={useState("")}>
      <ReducerContext.Provider value={[state, dispatcher]}>
      <main>

        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nie_ma">nie klikać</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <button onClick={()=>dispatcher({type: "increment"})}>Increment Reducer</button>
        <button onClick={()=>dispatcher({type: "decrement"})}>decrement Reducer</button>
        <Routes>

          <Route path="/" element={<Home toDos={toDos} setToDos={setToDos} />}/>
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
          <Route path="/login" element={<Login/>} />
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
