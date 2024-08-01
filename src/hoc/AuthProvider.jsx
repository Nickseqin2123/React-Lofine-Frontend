import { createContext, useState } from "react";
import { getTokens, login } from "../Requests/Login";
import { verifyJWT } from "../Requests/Verify";
import { Refresh } from '../Requests/Refresh'
import { register } from "../Requests/Register";

export const AuthContext = createContext(null)


const getTokensFromLclStoarge = () => {
    return {
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh')
    }
}

const setTokensForJWTStoarge = (access, refresh) => {
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
}


export const AuthProvid = ({children}) => {
    const [user, setUser] = useState(null)

    async function loginProvider (form) {
        // Неправильные ключи в  форме
        
    }


    async function registerProvider(form) {
        // Неправильные ключи в  форме
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}