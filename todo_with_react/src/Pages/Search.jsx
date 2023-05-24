import { useState, useRef } from "react";

const Search = ({toDoList}) => {
    // {zmienna} === props.zmienna czyli destrukturyzacja zmiennej

    const toDoListHTMLDefault = toDoList.map(
        (it, i) => <p key={i}>{it}</p>
    );

    const [ searchQuery, setSearchQuery] = useState("");
    const [toDoListHTML, setToDoListHTML] = useState(toDoListHTMLDefault);
    const inputRef = useRef();


    const handleSearch = (event) => {
        setToDoListHTML(toDoList
            .filter(it=>it.includes(event.target.value))
            .map(
                (it, i) => <p key={i}>{it}</p>
            ));
        setSearchQuery(event.target.value);
    }
    // to do kitu, nie działa
    // let i = 0;
    // i += 1;
    const counterRef = useRef(0);
    counterRef.current += 1;
    console.log(`Rendering nr ${counterRef.current}`);

    return (
        <div className="App">
            <input type="text" value={searchQuery} onChange={handleSearch}></input>

            <input type="text" ref={inputRef}></input>
            <button onClick={()=>alert(inputRef.current.value)}>Alert Ref value</button>
            <button onClick={()=>inputRef.current.focus()}>Set focus</button>

            {toDoListHTML}
        </div>
        );
}

export default Search;
