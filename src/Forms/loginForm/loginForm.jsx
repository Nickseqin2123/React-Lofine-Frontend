import classes from '../styles/registerAndLogin.module.css'
import Button from '../../Button/button'
import InputField from '../input/InputField'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function LoginForm() {
    const [val, setVal] = useState({
        login: '',
        password: ''
    })

    const change = fieldName => fieldValue => {
        setVal({
            ...val,
            [fieldName]: fieldValue
        })
    }
    
    useEffect(() => {
        document.querySelector('head').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />');
    }, [])

    return (
        <>
            <div className={classes.parent}>
                <form method="POST" className={classes.form}>
                    <InputField type='text' placeholder='Логин' value={val.login} onChange={change('login')}/>
                    <InputField type='password' placeholder='Пароль' value={val.password} onChange={change('password')}/>
                    
                    <p>
                        <Link style={{ textDecoration: 'none', color: '#ffffff' }} to='/register'>Еще не зарегистрированы?</Link>
                    </p>
                    <Button width='100%' href='/profile'>Войти</Button>
                </form>
            </div>
        </>
    )
}