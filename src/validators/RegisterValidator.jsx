export default function CheckRegisterForm(form) {
    const { login, password, passwordRetr, name, surname} = form

    if (login.length <= 150 && password === passwordRetr && name.length <= 150 && surname.length <= 150 ) {
        return true
    }
    
    return false
}