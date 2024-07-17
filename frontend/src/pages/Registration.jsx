import React, { useEffect, useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Spinner from '../utils/Spinner'
import { loginAsync, registerAsync } from '../store/user/userAPI'
import { clearAllErrors } from '../store/user/userSlice'
import { toast } from 'react-toastify'

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
    const { error, loading } = useSelector(state => state.user)
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("user_img", registerFormData.user_img)
        form.append("email", registerFormData.email)
        form.append("password", registerFormData.password)
        form.append("username", registerFormData.username)
        if (error) {
            alert(error)
            clearAllErrors();
            return
        } else {
            dispatch(registerAsync(form))
            setRegisterFormData(initialRegisterForm)
            navigate("/")
        }

    }
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginAsync(loginData));
        setLoginData(initialLoginForm)
        navigate("/")


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
