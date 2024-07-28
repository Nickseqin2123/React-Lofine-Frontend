import classes from '../styles/registerAndLogin.module.css'
import Button from '../../Button/button'
import InputField from '../input/InputField'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'


export default function LoginForm() {
    const navi = useNavigate()

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
    const user = useAuth()
    
    async function redirect_or_no () {
        const resp = await user.loginProvider(val)
        // navi('/profile')
    }   

    useEffect(() => {
        document.querySelector('head').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />');
    }, [])

    return (
        <>
            <div className={classes.parent}>
                <form method="POST" className={classes.form} onSubmit={() => redirect_or_no()}>
                    <InputField type='text' placeholder='Логин' value={val.login} onChange={change('login')}/>
                    <InputField type='password' placeholder='Пароль' value={val.password} onChange={change('password')}/>
                    
                    <p>
                        <Link style={{ textDecoration: 'none', color: '#ffffff' }} to='/register'>Еще не зарегистрированы?</Link>
                    </p>
                    <Button width='100%' type='submit'>Войти</Button>
                </form>
            </div>
        </>
    )
}