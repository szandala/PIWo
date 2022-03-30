import './App.css';
import {useState} from 'react';
import Main from './Pages/Main';
import Search from './Pages/Search';
import {BrowserRouter, NavLink, Routes, Route, Link} from 'react-router-dom'

function App() {

  const [toDosList, setToDoList] = useState(["Sprawdzić zadania", "Wpisać oceny", "uwalić paru Studentów"]);

  return (
    <>
    <header><h2>This is the header</h2></header>
    <main>
    <BrowserRouter>
      <nav>
      <NavLink to="/">Cho do Maina</NavLink>
      <NavLink to="/search">Catch me if You can</NavLink>
      </nav>
      <Routes>

      <Route path="/" element={<Main toDosList={toDosList} setToDoList={setToDoList}/>}/>
      <Route path="/search" element={<Search toDosList={toDosList}/>} />

      </Routes>
      </BrowserRouter>
    </main>
    <footer>footer</footer>
    </>
  )
  //return <Main toDosList={toDosList} setToDoList={setToDoList}/>
}

// const App = () => {

// }
export default App;
