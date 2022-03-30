import { useState } from "react";

const Main = (props) => {
  const { setToDoList, toDosList } = props;

  const [newToDo, setNewToDo] = useState("");

  const handleNewToDo = (event) => {
    // console.log({event});
    setNewToDo(event.target.value);
  };

  const handleAddNewItem = () => {
    setToDoList(toDosList.concat([newToDo]));
    setNewToDo("");
  };

  const toDosListHTML = toDosList.map((it, i) => {
    return <p key={i}>{it}</p>;
  });
  return (
    <div className="App">
      <input type="text" value={newToDo} onChange={handleNewToDo} />
      <input type="button" value="Add new item" onClick={handleAddNewItem} />
      {toDosListHTML}
    </div>
  );
};

export default Main;
