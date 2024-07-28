import axios from "axios"

export const Refresh = async (refresh) => {
    let tokens = {}

    tokens = await axios.post('http://127.0.0.1:8000/api/v8/token/refresh/', {refresh: refresh})

    return tokens
}