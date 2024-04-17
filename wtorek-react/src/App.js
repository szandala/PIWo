import './App.css';
import Home from "./Pages/Home";
import New from './Pages/New';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new",
        element: <New/>
      },
    ]
  }
])

function AppLayout() {

  return (
    <div>

      <header>To jest header</header>
      <div className='main-nav-container'>

        <nav>
          <a>Link 1</a>
          <a>Link 2</a>
        </nav>

        <Outlet/>

        <footer>A tu jest stopka</footer>
      </div>
    </div>
  );
}

const App = () => <RouterProvider router={router} />

export default App;
