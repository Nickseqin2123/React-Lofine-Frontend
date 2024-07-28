import { createContext, useState } from "react";

import { login, getTokens } from "../Requests/Login";
import { register } from '../Requests/Register'


export const AuthContext = createContext(null)


export const AuthProvid = ({children}) => {
    const [user, setUser] = useState(null)


    async function loginProvider (form) {
        const access = localStorage.getItem('access')
        const refresh = localStorage.getItem('refresh')

        
    }


    async function registerProvider(form) {
        const user_or_not = await register(form)

        if (typeof user_or_not !== 'object') {
            return false
        } 
        const {password, username} = form

        const {access, refresh} = await getTokens({password: password, username: username})
        
        localStorage.setItem('access', `JWT ${access}`)
        localStorage.setItem('refresh', refresh)

        setUser(user_or_not)

        return true
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}