import { useRef, useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const Home = (props) => {
    const {setToDos, toDos} = props;
    const [userName, setUserName] = useContext(UserContext);


    const myInput = useRef();
    const toDosHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
    });
    const handleNewToDo = () => {

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
