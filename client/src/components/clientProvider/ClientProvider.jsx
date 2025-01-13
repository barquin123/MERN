import { createContext } from "react";

const clientContext = createContext();

export default clientProvider = ({children}) => {

    const tasks = 

    return (
        <clientContext.Provider>
        {children}
        </clientContext.Provider>
    )
}