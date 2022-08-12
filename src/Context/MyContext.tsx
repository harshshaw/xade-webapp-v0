import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { State } from "./Models";
import MyReducer from "./MyReducer";


const AppContext = createContext<any>('')

const MyContext = ({children}:{children:ReactNode}) =>{

        const initialState : State = {
           MyCart:{state:{CartProducts:[]}}
        }

        const [state,dispatch] = useReducer(MyReducer,initialState);

        return (
            <AppContext.Provider value={{state,dispatch}}>
                {children}
            </AppContext.Provider>
        )
}

export default MyContext

export const MyContextState = () =>{
    return useContext(AppContext)
}