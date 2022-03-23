import { useState } from "react";

const Main = (props) => {
  const { setListOfToDos, listOfToDos } = props;

  const listOfToDosHTML = listOfToDos.map((it, i) => <p key={i}>{it}</p>);
  const [newToDo, setNewToDo] = useState("");
  const handleNewInput = (event) => {
    // console.log({event});
    setNewToDo(event.target.value);
  };

  const handleAdd = () => {
    setListOfToDos(listOfToDos.concat([newToDo]));
    setNewToDo("");
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" value={newToDo} onChange={handleNewInput} />
      <input type="button" value="Add" onClick={handleAdd} />
      {listOfToDosHTML}
    </div>
  );
};

export default Main;
