import { Routes, Route } from "react-router-dom"
import MainWindow from "./Main/mainwindow"
import LoginForm from "./Forms/loginForm/loginForm"
import RegisterUser from "./Forms/registrationForm/registrationForm"
import NotFound from "./404/404"
import Base from './ComponentsDefault/baseStart/BaseHTML'
import RequireAuth from "./hoc/RequireAuth"
import Profile from "./User/Profile/Profile"
import { AuthProvid } from "./hoc/AuthProvider"


export default function App() {
    return (
        <AuthProvid>
            <Routes>
                <Route path='/' element={<Base />}>
                    <Route index element={<MainWindow />}/>
                    <Route path='login' element={<LoginForm />}/>
                    <Route path='register' element={<RegisterUser />}/>
                    <Route path='*' element={<NotFound />}/>
                </Route>
                <Route path="/profile" element={
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                }/>
            </Routes>
        </AuthProvid>
    )
}