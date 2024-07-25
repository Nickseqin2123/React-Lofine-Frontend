import { createContext, useState } from "react";


export const AuthContext = createContext(null)


export const AuthProvid = ({children}) => {
    const [data, setData] = useState(null)
    
    
    const login = (form) => {
        
    }

    const register = (form) => {

    }

    const logout = (token) => {

    }

    const value = {data, login, register, logout}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}