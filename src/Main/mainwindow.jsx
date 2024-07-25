import { useEffect } from 'react';
import classes from './main.module.css'
import Button from '../Button/button'


export default function MainWindow() {
    useEffect(() => {
        document.querySelector('head').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />');

    }, [])

    return (
        <>
            <div className={classes.flowtext}>
                <h1>Lofine</h1>
            </div>
            
            <div className={classes.choice}>
                <Button margin='10px' href='/login'>Войти</Button>
                <Button href='/register'>Регистрация</Button>
            </div>
        </>

    )
}