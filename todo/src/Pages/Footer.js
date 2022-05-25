import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { ReducerContext } from "../Contexts/ReducerContext";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import { logout } from "../firebase/users";


const LogOutButton = ({who}) => <button onClick={logout}>Log {who} out</button>

const Footer = ()=>{
    const [name] = useContext(UserContext);
    const [state] = useContext(ReducerContext);

    const [user] = useAuthState(auth);

    return <footer style={{color: "white"}}>
        Context has {name} | Counter is {state.counter}
        {user && <LogOutButton who={user.displayName}/> }
        </footer>
}

export default Footer;
