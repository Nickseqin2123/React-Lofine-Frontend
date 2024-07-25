import Button from "../Button/button"

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '250px' }}>
            <h1 style={{ fontSize: '110px' }}>404 не найдено</h1>
            <Button href='/'>Вернуться домой</Button>
        </div>
    )
}