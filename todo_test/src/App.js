import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [listOfToDos] = useState(["one item", "second item", "seconder item"]);

  return (
    <>
      <header>
        <h1>This is dummy header</h1>
      </header>
      <main>
        <Router>
          <nav>
            {/* <NavLink to="/" exact>Lista wszytkich</NavLink>
          <NavLink to="/new">Dodaj nowy</NavLink>
          <NavLink to="/trash">Śmietnik</NavLink> */}
            <NavLink to="/">
              all
            </NavLink>
            <NavLink to="/search">search</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/search" element={<Search listOfToDos={listOfToDos} text="troll"/>}>
              {/* <Search text="bazinga"  /> */}
            </Route>

            <Route path="*" element={<h1>404 not found</h1>}/>

          </Routes>
        </Router>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
