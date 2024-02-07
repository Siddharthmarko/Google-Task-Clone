import React, {useContext, createContext, useReducer} from "react";
import localData from './localData';
import reducer from "./operation";

const TaskContext = createContext();

export function useData (){
    return useContext(TaskContext);
}

export default function ContextProvider({children}){
    const [state, dispatcher] = useReducer(reducer, localData);
    return (
        <TaskContext.Provider value={{state, dispatcher}} >
            {children}
        </TaskContext.Provider>
    )
}