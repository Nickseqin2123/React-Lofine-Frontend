import { createContext, useState } from "react";
import { getTokens, login } from "../Requests/Login";
import { verifyJWT } from "../Requests/Verify";
import { Refresh } from '../Requests/Refresh'
import { register } from "../Requests/Register";
import axios from "axios";

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
        const CorrectForm = {
            "username": form.login,
            "password": form.password
        }
        const resp = await axios.get('http://127.0.0.1:8000/api/v8/users/')
        return resp
    }


    async function registerProvider(form) {
        const CorrectForm = {}
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}