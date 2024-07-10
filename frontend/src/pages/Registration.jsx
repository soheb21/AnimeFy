import React, { useState } from 'react'
import Register from '../components/Register'

const Registration = () => {
    const initialRegisterForm = {
        username: "",
        email: "",
        password: "",
        user_img: ""
    }
    const [registerFormData, setRegisterFormData] = useState(initialRegisterForm)
    const handleRegister = () => {

    }

    return (
        <div className='w-full h-[40rem]  grid place-content-center place-items-center'>
            <Register formData={registerFormData} setFormData={setRegisterFormData} handleRegister={handleRegister} />
        </div>
    )
}

export default Registration
