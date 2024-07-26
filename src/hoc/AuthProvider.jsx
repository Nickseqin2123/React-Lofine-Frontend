import { createContext, useState } from "react";

import { login } from "../Requests/Login";
import { register } from '../Requests/Register'


export const AuthContext = createContext(null)


export const AuthProvid = ({children}) => {
    const [user, setUser] = useState(null)


    function loginProvider (form) {
        let response = login(form)
        
        if (typeof response === 'object') {
            setUser(response)
        } else {
            return response
        }
    }

    function registerProvider(form) {
        let response = register(form)

        if (typeof response === 'object') {
            setUser(response)
        } else {
            return response
        }
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}