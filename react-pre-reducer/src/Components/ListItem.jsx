import { useState } from "react";

const ListItem = ({text, jamnik}) => {

  const [striked, setStriked] = useState(false);

  return <li
    onClick={()=>setStriked(!striked)}
    className={striked ? "striked" : ""}
    >{text} - {jamnik}</li>
}

export default ListItem;
