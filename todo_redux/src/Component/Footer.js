import { useContext } from "react"
import UserContext from "../Data/UserContext"
import { ReducerContext } from "../Data/ReducerContext";

const Footer = () => {
    const [userName] = useContext(UserContext);
    const [state] = useContext(ReducerContext);

    return (
        <footer>Logged as: {userName} | Reducer state: {state.counter} </footer>
    )
}

export default Footer;
