import {data} from './data'
import classes from '../styles/settings.module.css'
import Button from '../../Button/button'


export default function SettingsForm () {
    return (
        <div className={classes.settings_form}>
        <h2>Настройки</h2>

        <form method='POST'>
            {data.map((datta) => {
                return (
                    <>
                    <label>{datta.label}</label>
                    <input type={datta.type} placeholder={datta.placeholder}/>
                    </>
                )
            })}

            <Button type='submit' width='auto'>Сохранить</Button>
            
        </form>
    </div>
    )
}