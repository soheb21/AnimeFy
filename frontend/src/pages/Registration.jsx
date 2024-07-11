import React, { useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

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
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerFormData)
        setRegisterFormData(initialRegisterForm)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginData)
        setLoginData(initialLoginForm)
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
