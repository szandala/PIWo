import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";
import { useState } from "react";
import Search from "./Pages/Search";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
  const [listOfToDos, setListOfToDos] = useState([
    "Sprawdzić zadania",
    "Wpisać oceny",
    "Oblać Studentów",
  ]);

  return (
    <>
      <header>
        <h2>This is the header</h2>
      </header>
      <main>
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/border_collie">ni ma</NavLink>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  listOfToDos={listOfToDos}
                  setListOfToDos={setListOfToDos}
                />
              }
            />
            <Route
              path="/search"
              element={<Search listOfToDos={listOfToDos} />}
            />
            <Route path="/nein" element={<h1>Nie ma</h1>} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>footer</footer>
    </>
  );
  // <Main listOfToDos={listOfToDos} setListOfToDos={setListOfToDos}/>
}

// const App = () => {

// }
export default App;
