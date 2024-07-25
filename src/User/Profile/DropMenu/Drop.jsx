import classes from './Drop.module.css'


export default function ModalDrop({ display, close }) {
    return (
        <div className={classes.modal} style={{ display: display }}>
            <div className={classes.modalContent}>
                <span className={classes.close} onClick={close}>&times;</span>
                <h2>Информация о пользователе</h2>
                <p>Имя: Nikita Desolator</p>
                <p>Тег: first993</p>
                <p>Город: Чебоксары</p>
                <p>Друзья: 100</p>
                <p>Дата рождения: 02.02.2009</p>
                <p>Email: bletigri@gmail.com</p>
                <p>Номер телефона: 8 (919) 972 81-50</p>
            </div>
        </div>
    )
}

