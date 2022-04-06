import { createContext } from "react";

export const ReducerContext = createContext([{}, ()=>{}]);

export const initState = {
    counter: 0,
    user: ""
}
const decrement = (state) => {
    return {...state, counter: state.counter -1 }
}

export const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case "increment": state = {...state, counter: state.counter +1 }
            break;
        case "decrement": state = decrement(state);
            break;
        case "set_name": state = {...state, name: payload.name }
            break;
        default:
            console.error(`Incorrect action type ${type}`)
    }
    return state;
}
