import InputField from "../input/InputField"
import Button from "../../Button/button"
import classes from '../styles/registerAndLogin.module.css'
import { useState, useEffect } from "react"
import { data } from "./data"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"


export default function RegisterUser() {
    const navi = useNavigate()

    const [val, setVal] = useState({
        login: '',
        password: '',
        passwordRetr: '',
        email: '',
        name: '',
        surname: '',
        tag: '',
        num: '',
        date: '',
    })

    const user = useAuth()

    
    const change = fieldName => fieldValue => {
        setVal({
            ...val,
            [fieldName]: fieldValue
        })
    }

    async function redirect_or_no() {
        const resp = await user.registerProvider(val)
        navi('/profile')
    }


    useEffect(() => {
        document.querySelector('head').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />');
    }, [])

    return (
        <>
            <div className={classes.parent}>
                <form method="POST" className={classes.form} onSubmit={() => redirect_or_no()}>
                    {data.map(
                        (obj) => {
                            return <InputField key={obj.id} type={obj.type} placeholder={obj.placeholder} value={val[obj.nm]} onChange={change(obj.nm)}/>
                        }
                    )}
                    <p>
                        <Link style={{textDecoration: 'none', color: '#ffffff' }} to='/login'>Уже зарегистрированы?</Link>
                    </p>
                    <Button width='100%' type='submit'>Зарегистрироваться</Button>
                </form>
            </div>

        </>
    )
}