import axios from "axios"


export const getTokens = async (form) => {
    let data = {}
    let error = null

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/v8/auth/users/', form)
        data = response.data
    } 
    catch (errorr) {
        error = errorr
    }

    if (error) {
        return 'Register error. Please, check form'
    }

    return data
}