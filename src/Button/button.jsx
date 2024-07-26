/* eslint-disable react/prop-types */
import classes from './button.module.css'
import { Link } from 'react-router-dom'


export default function Button({ children, href, type, ...params }) {
    if (href) {
        return (
            <button className={classes.glow} type={type? type: 'button'} style={{ ...params }}>
                <Link style={{ color: '#ffffff' }} to={href}>{children}</Link>
            </button>
        )
    }

    return (
        <button className={classes.glow} type={type? type: 'button'} style={{ ...params }}>
            {children}
        </button>
    )
}