import { useState } from "react";

const IntroduceSelf = () => {

    const [ name, setName] = useState("");

    return (
        <div className="App">
            <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
            <h2>Hello, my name is {name}</h2>
        </div>
        );
}

export default IntroduceSelf;
