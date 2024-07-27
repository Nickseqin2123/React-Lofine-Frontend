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
//----------------------------------------------------------------------------


const dataAuth = {
    "username": "NikitaPups123",
    "password": "ZXCPUDGE228"
};

const getTokens = async (form) => {
    let error = null;
    let tokens = {};

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/v8/token/login/', form);

        tokens = response.data;

    } catch (errorr) {
        error = errorr;
    }
    if (error) {
        return 'Error. Check form please';
    }

    return tokens; 
};

export const login = async (form) => {
    
    const nextMessage = await getTokens(form);

    if (typeof nextMessage === 'string') {
        return nextMessage; 
    }

    const data = {};

    const auth = {
        'Authorization': `JWT ${nextMessage.access}`
    };

    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v8/auth/users/me', { headers: auth });
        data.user = response.data; // Получаем информацию о пользователе
    } catch (error) {
        return 'Error fetching user data.';
    }

    return data.user; // Возвращаем информацию о пользователе
};

// Пример вызова
login(dataAuth).then(message => console.log(message))