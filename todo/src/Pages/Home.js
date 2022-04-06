import { useState, useRef, useContext } from 'react';
import NameContext from '../Contexts/NameContext';

const Home = (props) => {
    const {setToDos, toDos} = props;
    const inputRef = useRef();
    const [name, setName] = useContext(NameContext);

    console.log("Home rendered");

    const [newToDo, setNewToDo] = useState("");
    const toDosHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
    });

    const handleNewInput = (event) => {
        setNewToDo(event.target.value);
    }

    const handleNewToDo = () => {
        // setToDos(toDos.concat([newToDo]));
        // setNewToDo("");
        setToDos(toDos.concat([inputRef.current.value]));
        inputRef.current.value = "tomek";
    }

    return (
        <div>
        {/* <input value={newToDo} onChange={handleNewInput} /> */}
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <input ref={inputRef} />
        <button onClick={handleNewToDo} type="button">Add </button>

        {toDosHTML}
        </div>
    )
}


export default Home;
