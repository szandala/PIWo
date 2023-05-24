import { useContext } from "react";
import UserContext from "../Data/UserContext";


const IntroduceSelf = () => {

    // const [ name, setName] = useState("");
    const [userName, setUserName] = useContext(UserContext);
    return (
        <div className="App">
            <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}></input>
            <h2>Hello, my name is {userName}</h2>
        </div>
        );
}

export default IntroduceSelf;
