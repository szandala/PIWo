import { useState, useRef, useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const Home = (props) => {
    const {setToDos, toDos} = props;
    const [userName, setUserName] = useContext(UserContext);


    const myInput = useRef();
    const [newToDo, setNewToDo] = useState("");
    const toDosHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
    });

    const handleNewInput = (event) => {
        setNewToDo(event.target.value);

    }
    console.log("bazinga")
    const handleNewToDo = () => {

        setToDos(toDos.concat([myInput.current.value]));
        // setNewToDo("");
    }

    return (
        <div>
        <input ref={myInput}/>
        <input value={userName} style={{color: "red"}} onChange={e => setUserName(e.target.value)}/>
        {/* <input value={newToDo} onChange={handleNewInput} /> */}
        <button onClick={handleNewToDo} type="button">Add new item </button>

        {toDosHTML}
        </div>
    )
}


export default Home;
