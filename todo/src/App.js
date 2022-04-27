import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from "./Pages/Search";

function App() {
  const [toDos, setToDos] = useState([
    "Sprawdzić prace",
    "Wpisać oceny",
    "Napisać do Studentów",
  ]);

  return (
    <div className="App">
      <header>
        <h2>This is the header</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nie_ma">nie klikać</NavLink>
        </nav>

        <Routes>

          <Route path="/" element={<Home toDos={toDos} setToDos={setToDos} />}/>
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
          <Route path="/search" element={<Search toDos={toDos}/>} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer>footer</footer>

    </div>
  );
}

export default App;
