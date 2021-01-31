import React,{createContext,useState} from 'react'

export const WinnerContext = createContext();

export function WinnerProvider({children}){
    const [winner,setWinner] = useState([]);
    return(
        <WinnerContext.Provider value={{winner,setWinner}}>{children}</WinnerContext.Provider>
    )
}