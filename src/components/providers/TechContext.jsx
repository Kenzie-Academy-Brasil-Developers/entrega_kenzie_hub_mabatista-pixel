import { createContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {


    return(
        <TechContext.Provider value={{}}>
            {children}
        </TechContext.Provider>
    )
}