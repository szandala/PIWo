import { useState } from 'react';


const Home = (props) => {
    const {setToDos, toDos} = props;

    const [newToDo, setNewToDo] = useState("");
    const toDosHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
    });

    const handleNewInput = (event) => {
        setNewToDo(event.target.value);
    }

    const handleNewToDo = () => {
        setToDos(toDos.concat([newToDo]));
        setNewToDo("");
    }

    return (
        <div>
        <input value={newToDo} onChange={handleNewInput} />
        <button onClick={handleNewToDo} type="button">Add </button>

        {toDosHTML}
        </div>
    )
}


export default Home;
