import { useEffect, useReducer, useState, useMemo } from 'react';
import './App.css';

// import axios from 'axios';
import { getAllToDos } from './Firebase/todoservice';
import { useAuth } from './Firebase/userService';

import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Routing from './Pages/Routing';

import UserContext from './Data/UserContext';
import { MyReducerContext, initState, reducer } from './Data/MyReducer';
function App() {

  const [state, dispatcher] = useReducer(reducer, initState);
  console.log({state});

  const [toDoList, setToDoList] = useState([]);
  // console.log(toDoList);
  const user = useAuth();
  console.log({user})
  useEffect(()=>{
    // const promise = axios.get("./data/todos.json");
    // promise.then(response => {
    //   console.log({response});
    //   setToDoList(response.data)
    // });
    // axios.get("./data/todos.json", {}).then(response => {
    //   // console.log({response});
    //   setToDoList(response.data)
    // });
    if(user)
    getAllToDos(user).then(response =>{
      console.log({response});
      setToDoList(response);
    })

  }, [user]);

  const value = useMemo(()=>{console.log("Calling useMemo"); return toDoList.length;}, [toDoList]);
  console.log(value);

  return (
    <div className="App">
      <header>This is a header</header>

      <MyReducerContext.Provider value={[state, dispatcher]}>
      <UserContext.Provider value={useState("")}>
      <main>
        <BrowserRouter>

          <Menu />

          <Routing toDoList={toDoList} setToDoList={setToDoList} />

        </BrowserRouter>
      </main>
      <Footer />
      </UserContext.Provider>
      </MyReducerContext.Provider>

    </div>
  );
}

export default App;
