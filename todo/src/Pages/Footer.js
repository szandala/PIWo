import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { ReducerContext } from "../Contexts/ReducerContext";

const Footer = () => {

    const [userName] = useContext(UserContext);
    const [state] = useContext(ReducerContext);

    return (
    <footer style={{color: "white"}}>
        footer UserName: {userName}<br/>
        Counter={state.counter}
        </footer>
    )
}

export default Footer;
