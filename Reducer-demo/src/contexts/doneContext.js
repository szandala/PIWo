import { createContext,useReducer } from 'react';

export const initState = {
  counter: 0,
  text: ""
}


const decrement = (state) => {
  const newCounter = state.counter -1
  if(newCounter < 0)
    return state
  return {...state, counter: state.counter -1 }
}

export const reducer = (state, action) => {
  const {type, payload} = action;

  switch(type){
      case "increment":
        state = {...state, counter: state.counter +1 }
          break;
      case "decrement":
        state = decrement(state);
          break;
      case "set_text": state = {...state, text: payload.text }
          break;
      default:
          console.error(`Incorrect action type ${type}`)
  }
  return state;
}

const DoneContext = createContext();

export const DoneProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DoneContext.Provider value={{state, dispatch}}>
      {children}
    </DoneContext.Provider>
  );
};

export default DoneContext;
