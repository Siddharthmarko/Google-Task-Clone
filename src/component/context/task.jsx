import React, {useContext, createContext} from "react";

const TaskContext = createContext();

export function useData (){
    return useContext(TaskContext);
}

export default function ContextProvider({children}){
    // const []
    return (
        <TaskContext.Provider>
            {children}
        </TaskContext.Provider>
    )
}