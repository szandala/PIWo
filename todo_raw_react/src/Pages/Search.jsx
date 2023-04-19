import { useState } from "react";

const Search = ({toDoList}) => {
    // {zmienna} === props.zmienna czyli destrukturyzacja zmiennej

    const toDoListHTMLDefault = toDoList.map(
        (it, i) => <p key={i}>{it}</p>
    );

    const [ searchQuery, setSearchQuery] = useState("");
    const [toDoListHTML, setToDoListHTML] = useState(toDoListHTMLDefault);

    const handleSearch = (event) => {
        setToDoListHTML(toDoList
            .filter(it=>it.includes(event.target.value))
            .map(
                (it, i) => <p key={i}>{it}</p>
            ));
        setSearchQuery(event.target.value);
    }

    return (
        <div className="App">
            <input type="text" value={searchQuery} onChange={handleSearch}></input>
            {toDoListHTML}
        </div>
        );
}

export default Search;
