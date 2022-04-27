import { useContext } from "react";
import NameContext from "../Context/NameContext";
import { ReducerContext } from "../Context/ReducerContext";

const Footer = ()=>{
    const [name] = useContext(NameContext);
    const state = useContext(ReducerContext);

    return <footer>Context has {name} | Counter is {state.counter} </footer>
}

export default Footer;
