import './App.css';
import { useState } from 'react';


import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Routing from './Pages/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const toDoListDefault = [
    "wpisać oceny",
    "sprawdzić zadanie",
    "kupić broń na poniedziałek Wielkanocny"
  ];

  const [toDoList, setToDoList] = useState(toDoListDefault);

  return (
    <div className="App">
      <header>This is a header</header>
      <main>
        <BrowserRouter>

          <Menu />

          <Routing toDoList={toDoList} setToDoList={setToDoList} />

        </BrowserRouter>
      </main>
      <Footer />

    </div>
  );
}

export default App;
