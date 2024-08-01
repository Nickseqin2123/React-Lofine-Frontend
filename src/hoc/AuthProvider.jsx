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
        const {access, refresh} = getTokensFromLclStoarge()

        if (access && refresh) {
            const resp = await login(access)
            
            if (!resp) {
                localStorage.clear()
                const newToks = Refresh(refresh)

                const resp = await login(newToks.access)

                setTokensForJWTStoarge(newToks.access, newToks.refresh)
                setUser(resp)
            }
            return resp
        } else {
            const data = await getTokens(form)

            if (data) {
                const {access, refresh} = data

                const resp = await login(access)
                if (resp) {
                    setUser(resp)
                    setTokensForJWTStoarge(access, refresh)
                }
                return resp

            }
            return data
        }
    }


    async function registerProvider(form) {
        const data = await getTokens(form)

        if (data.access && data.refresh) {
            setTokensForJWTStoarge(data.access, data.refresh)
            const user = await register(form)
            setUser(user)
        }
        return data
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}