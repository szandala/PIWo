import { createContext } from "react";

export const MyReducerContext = createContext();

export const initState = {
    counter: 0,
    name: ""
}

export const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "increment": state = {
            ...state,
            counter: state.counter + 1
        }
        break;
        case "decrement": state = {
            ...state,
            counter: state.counter - 1
        }
        break;
        case "set_name": state = {
            ...state,
            name: payload.name
        }
        break;
        default:
            console.error(`Type ${type} unknown`)
    }

    return state;
}
