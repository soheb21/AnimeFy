import React, { useEffect, useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import { useDispatch, useSelector } from "react-redux"
import { clearAllErrorsFun, login, register } from '../store/user/userSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Spinner from '../utils/Spinner'

const Registration = () => {
    const initialRegisterForm = {
        username: "",
        email: "",
        password: "",
        user_img: ""
    }
    const initialLoginForm = {
        email: "",
        password: ""
    }
    const [registerFormData, setRegisterFormData] = useState(initialRegisterForm)
    const [loginData, setLoginData] = useState(initialLoginForm)
    const [isLogin, setIsLogin] = useState(false)
    const dispatch = useDispatch();
    const { loading, user, error, isAuthenticate } = useSelector(state => state.user)
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("user_img", registerFormData.user_img)
        form.append("email", registerFormData.email)
        form.append("password", registerFormData.password)
        form.append("username", registerFormData.username)
        dispatch(register(form))
        setRegisterFormData(initialRegisterForm)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(loginData));
        setLoginData(initialLoginForm)
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllErrorsFun());
        }
        if (isAuthenticate) {
            navigate("/")
        }

    }, [dispatch, loading, error, isAuthenticate])
    if (loading) {
        return <Spinner />
    }
    return (
        <div className='w-full h-[40rem]  grid place-content-center place-items-center'>

            {
                isLogin
                    ? <Login
                        setIsLogin={setIsLogin}
                        formData={loginData}
                        setFormData={setLoginData}
                        handleLogin={handleLogin} />
                    : <Register setIsLogin={setIsLogin} formData={registerFormData} setFormData={setRegisterFormData} handleRegister={handleRegister} />
            }



        </div>
    )
}

export default Registration
