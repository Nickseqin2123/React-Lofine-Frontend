import axios from "axios";


//----------------------------------------------------------------------------
//Запрос на регистрацию
// const data = {
//     "email": "grigorevnikita942@gmail.com",
//     "username": "NikitaPups123",
//     "password": "ZXCPUDGE228",
//     "telephone_number": "89199728150",
//     "first_name": "Никита",
//     "last_name": "ГРигорьев",
//     "tag_user": "userZXC",
//     "birthday": '2009-01-02'
// }
// axios.post('http://127.0.0.1:8000/api/v8/auth/users/', data).then(response => console.log(response))
//----------------------------------------------------------------------------



//----------------------------------------------------------------------------
// Запрос на вход
// const dataAuth = {
//     "username": "NikitaPups123",
//     "password": "ZXCPUDGE228"
// }

// const req = await axios.post('http://127.0.0.1:8000/api/v8/token/login/', dataAuth)

// const {access, refresh} = req.data
// localStorage.setItem('access', `JWT ${access}`)
// localStorage.setItem('refresh', refresh)

// console.log(`Действующий токен: ${access}
// REFRESH: ${refresh}`)


// const JWTdate = {
//     'Authorization': localStorage.getItem('access')
// }
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
//Профиль юзера
// const Test = {
//     'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxOTExNzI1LCJpYXQiOjE3MjE5MDk5MjUsImp0aSI6IjM1ZTgzZGU0MzcxMjQzODFhZDc0YmMwMGNhZjFiMjY0IiwidXNlcl9pZCI6NH0.5nMFrIGCbneDlnLSP7Uhz9dD_B4vSR5v8di2uwNFGAk'
// }


// const req = await axios.get('http://127.0.0.1:8000/api/v8/auth/users/me', {'headers': Test})
// const reqREsponse = req.data
// console.log(reqREsponse)
//----------------------------------------------------------------------------\

const data = {
    "email": "grigorevil.com",
    "username": "NikitaPups123",
    "password": "ZXCPUDGE228",
    "telephone_number": "891",
    "first_name": "Никита",
    "last_name": "ГРигорьев",
    "tag_user": "userZXC",
    "birthday": '2009'
}

const form = {
    "username": "user1",
    "password": "ZXCPUDGE228"
}


export const getTokens = async (form) => {
    try {
        const tokens = await axios.post('http://127.0.0.1:8000/api/v8/token/login/', form)
        return tokens.data
    }
    catch (error) {
        return false
    }
}


console.log(await getTokens(form))
