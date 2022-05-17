import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { ReducerContext } from "../Contexts/ReducerContext";

const Footer = ()=>{
    const [name] = useContext(UserContext);
    const [state] = useContext(ReducerContext);
    console.log({state})
    return <footer style={{color: "white"}}>Context has {name} | Counter is {state.counter} </footer>
}

export default Footer;
