import { useContext } from "react";
import NoteContext from "../contexts/noteContext";
import DoneContext from "../contexts/doneContext";

const Footer = () => {
  const {note} = useContext(NoteContext);
  const {state} = useContext(DoneContext);

  return <footer>A tu jest stopka<br/>
    Notatka: {note}<br/>
    Counter: {state.counter} <br/>
    Text: {state.text}
  </footer>
}

export default Footer;
