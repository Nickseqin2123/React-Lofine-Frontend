import axios from "axios"


const getTokens = (form) => {
    let error = {}
    let tokens = {}

    axios.post('http://127.0.0.1:8000/api/v8/token/login/', form).then(response => {
        tokens[tokens] = response.data
    }).catch(errorr => {
        error[er] = errorr
    })

    
    if (error.er) {
        return 'Error. Check form please'
    }

    const {access, refresh} = tokens.tokens
    localStorage.setItem('access', `JWT ${access}`)
    localStorage.setItem('refresh', refresh)
}



export const login = (form) => {
    const nextMessage = getTokens(form)
    let data = {}


    if (!nextMessage) {
        return nextMessage
    }

    const auth = {
        'Authorization': localStorage.getItem('access')
    }


    const req = axios.get('http://127.0.0.1:8000/api/v8/auth/users/me', {'headers': auth}).then(
        response => {
            data[user] = response.data
        }
    )

    return data.user
}