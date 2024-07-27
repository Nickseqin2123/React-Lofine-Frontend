import axios from "axios";


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

    return [data.user, nextMessage]; // Возвращаем информацию о пользователе и токены
};
