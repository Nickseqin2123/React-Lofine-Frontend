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

        if (access !== null && refresh !== null) {
            const verify = await verifyJWT(access)

            if (verify) {
                const resp = await login(access)
                if (resp) {
                    setUser(resp)
                    return resp
                }
            }

            const newTokens = await Refresh(refresh)

            if (newTokens) {
                setTokensForJWTStoarge(newTokens.access, newTokens.refresh)
                const resp = await login(newTokens.access)
                if (resp) {
                    setUser(resp)
                    return resp
                }
            }

        }

        const tokens = await getTokens(form)

        if (tokens) {
            setTokensForJWTStoarge(tokens.access, tokens.refresh)
            const resp = await login(tokens.access)
            setUser(resp)
        }
    }


    async function registerProvider(form) {
        const resp = await register(form)

        if (resp) {
            const {username, password} = form
            const {access, refresh} = getTokens({username: username, password: password})

            setTokensForJWTStoarge(access, refresh)
            setUser(resp)
        }
    }


    const value = {user, loginProvider, registerProvider}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}