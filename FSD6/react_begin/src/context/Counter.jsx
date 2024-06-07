import { createContext,useState } from "react";

export const CounterContext=createContext(null);




export const CounterProvider = (props) => {
    const [count,SetCount] = useState(5);
    return(
    <CounterContext.Provider value={{count,SetCount,name:"Pankaj"}}>
        {props.children}
    </CounterContext.Provider>
    )
}