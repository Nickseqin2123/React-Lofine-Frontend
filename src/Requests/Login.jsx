import axios from "axios";


export const getTokens = async (form) => {
    try {
        const tokens = await axios.post('http://127.0.0.1:8000/api/v8/token/login/', form)
        return tokens.data
    }
    catch (error) {
        return false
    }
}

export const login = async (access) => {
    try {
        const dataAuth = {
            'Authorization': `JWT ${access}`
        }

        const response = await axios.post('http://127.0.0.1:8000/api/v8/auth/users/me', {headers: dataAuth})
        return response
    }

    catch (error) {
        return false
    }
}