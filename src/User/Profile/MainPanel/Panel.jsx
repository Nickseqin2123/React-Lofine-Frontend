import classes from './Panel.module.css'
import Button from '../../../Button/button'
import Drop from '../DropMenu/Drop'
import { useState } from 'react'


export default function MainPanel() {
    const [val, setVal] = useState('none')

    return (
        <>
        <div className={classes.mainPanel}>
            <div className={classes.image}>
                <img src="/photo-prof.png" />
            </div>

        <div className={classes.withUser}>

            <div className={classes.namePerson}>
                <h2>Никита</h2>
                <hr />
                <h3>Online</h3>
                <h4 className={classes.openModal} onClick={() => setVal('block')}>Подробнее</h4>
            </div>
        </div>
            
        <div className={classes.choice}>
            <Button>Добавить в друзья</Button>
            <Button>Пожаловаться</Button>
            <Button>+ REP</Button>
        </div>
        </div>
        <Drop display={val} close={() => setVal('none')}/>
        </>
    )
}