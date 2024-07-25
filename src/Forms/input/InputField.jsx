/* eslint-disable react/prop-types */
import classes from './inpu.module.css'


export default function InputField({type, value, placeholder, onChange, ...styl}) {
    return (
            <input
             placeholder={placeholder}
             className={classes.input}
             type={type}
             value={value}
             onChange={event => onChange(event.target.value)}/>
        )
}