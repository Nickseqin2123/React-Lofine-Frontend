import { Navigate } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

export default function RequireAuth({children}) {

    const auth = useAuth()
    console.log(auth.user)
    if (!auth.user) {
        return <Navigate to='/login' />
    }
    
    return children
}