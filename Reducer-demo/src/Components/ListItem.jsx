import { useState } from "react";

const ListItem = ({text}) => {

  const [striked, setStriked] = useState(false);

  return <li
    onClick={()=>setStriked(!striked)}
    className={striked ? "striked" : ""}
    >{text}</li>
}

export default ListItem;
