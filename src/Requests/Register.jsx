import axios from "axios"



export const register = (form) => {
    let data = {}
    let error = {}

    axios.post('http://127.0.0.1:8000/api/v8/auth/users/', form).then(response => {
        data[res] = response.data
    }).catch(errorr => {
        error[er] = errorr
    })

    if (error.er) {
        return 'Register error. Please, check form'
    }
    return data.res
}