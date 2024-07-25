import { Navigate } from "react-router-dom"

export default function RequireAuth({children}) {

    const auth = false
    
    if (!auth) {
        return <Navigate to='/login' />
    }
    
    
    return children
}