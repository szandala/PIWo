import UserContext from "../Data/UserContext";
import { useContext } from "react";
import { MyReducerContext } from "../Data/MyReducer";


const Footer = () => {
    const [userName] = useContext(UserContext);
    const [state] = useContext(MyReducerContext);

    return <footer style={{color: "white"}}>
        A to jest footer
        <br/> My name is '{userName}'
        <br/> Counter is {state.counter}

    </footer>
}

export default Footer;
