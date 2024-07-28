import axios from "axios";
import { Refresh } from "./Refresh";


export const getTokens = async (form) => {
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



const req = async (obj) => {
    const data = {}

    const response = await axios.get('http://127.0.0.1:8000/api/v8/auth/users/me', { headers: obj });
    data.user = response.data;
    
    return data
}


export const login = async (form, tokens=false) => {
    let tks = {}
    let newTk = false

    if (!tokens) {
        tks = await getTokens(form)
        newTk = true
    } else {
        tks = tokens
    }


    const auth = {
        'Authorization': `JWT ${tks.access}`
    };

    try {
        resp = await req(auth)
        return [resp, tks? newTk: null]

    } catch (error) {
        if (error.response.data.code === 'token_not_valid') {
            const {access, refresh} = await Refresh(tks.refresh)

            auth['Authorization'] = `JWT ${access}`
            
            resp = await req(auth)
            return [resp, {access: access, refresh: refresh}]
        } else {
            return false
        }
    }
};
