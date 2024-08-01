import axios from "axios"


export const register = async (form) => {
    try {
        const resp = await axios.post('http://127.0.0.1:8000/api/v8/auth/users/', form)
        return resp
    }

    catch (error) {
        return false
    }
}
