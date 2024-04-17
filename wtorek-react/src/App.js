import './App.css';
import Home from "./Pages/Home";
import New from './Pages/New';
import { RouterProvider,  Outlet,  Route, createBrowserRouter, createRoutesFromElements, NavLink } from 'react-router-dom';
// odczytujemy dane z pliku z danymi
import startingTodos from './data';
import { useState } from 'react';


// ten zapis wydaje mi się prostszy
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="new" element={<New />} />
    </Route>
  )
);

function AppLayout() {

  // z danych tworzymy stan, który będziemy mogli sobie przekazywać
  const [todos, setTodos] = useState(startingTodos);

  return (
    <div>

      <header>To jest header</header>
      <div className='main-nav-container'>

          <nav>
            {/* // zamieniamy <a> na NavLink i za pomocą 'to=' mówimy gdzie ma nas przenieść */}
            <NavLink to="/" className="App-mini-button">Home</NavLink>
            <NavLink to="/new" className="App-mini-button">Add New</NavLink>
          </nav>

          {/* // Outlet to obiekt, który zastępuje to, co będzie renderowane */}
          {/* // 'context' to specjalny, UKRYTY props, który możemy odcyztać w jego dzieciach */}
          <Outlet context={[todos, setTodos]}/>

        <footer>A tu jest stopka</footer>
      </div>
    </div>
  );
}

const App = () => <RouterProvider router={router} />


export default App;
