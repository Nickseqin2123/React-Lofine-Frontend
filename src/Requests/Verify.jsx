import axios from "axios"

export const verifyJWT = async (access) => {
    let response = null
    
    try {
        response = await axios.post('http://127.0.0.1:8000/api/v8/token/verify/', {token: access})
    }
    catch (error) {
        return false
    }
    
    return true
    
}