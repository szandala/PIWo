import { useContext, useEffect, useRef, useState } from 'react';
import Item from '../Component/Item';
import UserContext from '../Data/UserContext';


const Home = (props) => {
    console.log("Render Home");
    const [userName, setUserName] = useContext(UserContext);

    const {setToDos, toDos } = props;
    // const [newToDo, setNewToDo] = useState("");
    const newInputRef = useRef(null);

    const toDosHTML = toDos.map((it, i)=>{
        return <Item key={i} text={it}></Item>
    });

    const handleNewInput = (event) => {

        // setNewToDo(event.target.value);
    }

    const handleNewToDo = () => {
        setToDos(toDos.concat([newInputRef.current.value]));
        // setNewToDo("");
        newInputRef.current.value = ""
    }

    return (
        <div>
            <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        {/* <input value={newToDo} onChange={handleNewInput} /> */}
        <input ref={newInputRef} />
        <button onClick={handleNewToDo} type="button">Add </button>



        {toDosHTML}
        </div>
    )
}


export default Home;
