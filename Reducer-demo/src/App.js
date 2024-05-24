import './App.css';
import Home from "./Pages/Home";
import New from './Pages/New';
import { RouterProvider,  Outlet,  Route, createBrowserRouter, createRoutesFromElements, NavLink } from 'react-router-dom';
// odczytujemy dane z pliku z danymi
import startingTodos from './data';
import { useEffect, useState } from 'react';
import Login from './Pages/Login';
import { logout, useUser } from './data/userService';
import { readTodos } from './data/todoService';
import { NoteProvider } from './contexts/noteContext';
import Footer from './Components/Footer';
import {DoneProvider} from './contexts/doneContext';


// ten zapis wydaje mi się prostszy
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="new" element={<New />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function AppLayout() {

  // z danych tworzymy stan, który będziemy mogli sobie przekazywać
  const [todos, setTodos] = useState([]);
  const user = useUser();

  useEffect(()=>{

    readTodos().then(docs => setTodos(docs))

  }, [user]);


  return (
    <div>
      <DoneProvider>
      <NoteProvider>
      <header>
        <span>To jest header</span>
        {!!user || <NavLink to="/login" className="App-mini-button">Login</NavLink> }
        {!!user && <button className="App-mini-button" onClick={logout}>
          Logout {user?.displayName}
        </button>}

      </header>
      <div className='main-nav-container'>

          <nav>
            {/* // zamieniamy <a> na NavLink i za pomocą 'to=' mówimy gdzie ma nas przenieść */}
            <NavLink to="/" className="App-mini-button">Home</NavLink>
            <NavLink to="/new" className="App-mini-button">Add New</NavLink>
          </nav>

          {/* // Outlet to obiekt, który zastępuje to, co będzie renderowane */}
          {/* // 'context' to specjalny, UKRYTY props, który możemy odcyztać w jego dzieciach */}
          <Outlet context={[todos, setTodos]}/>
        <Footer/>
      </div>
      </NoteProvider>
      </DoneProvider>
    </div>
  );
}

const App = () => <RouterProvider router={router} />


export default App;
