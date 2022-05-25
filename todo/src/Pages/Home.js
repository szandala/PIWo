import { useRef, useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import { auth } from "../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import { addNewToDo } from '../firebase/todos';

const Home = (props) => {
    const {setToDos, toDos} = props;
    const [userName, setUserName] = useContext(UserContext);

    const [user] = useAuthState(auth);

    const myInput = useRef();
    const toDosHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
    });
    const handleNewToDo = () => {
        addNewToDo(user, myInput.current.value);
        setToDos(toDos.concat([myInput.current.value]));
        myInput.current.value = "";
    }

    return (
        <div>
        <input ref={myInput}/>
        <button onClick={handleNewToDo} type="button">Add new item </button>

        {toDosHTML}
        </div>
    )
}


export default Home;
