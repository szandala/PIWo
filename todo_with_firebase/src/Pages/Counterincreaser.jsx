import { MyReducerContext } from "../Data/MyReducer";
import { useContext } from "react";


const CounterIncreaser = () => {
    const [, dispatcher] = useContext(MyReducerContext);

    return <div>
        <button onClick={()=>dispatcher({type: "increment"})}>Increment</button>
        <button onClick={()=>dispatcher({type: "decrement"})}>Decrement</button>
        <button onClick={()=>dispatcher({type: "set_name", payload: {name: "Johnny"}})}>SetName</button>
    </div>
}

export default CounterIncreaser;
