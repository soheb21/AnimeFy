import React from 'react'
import Input from './Input'

const Register = ({ formData, setFormData, handleRegister }) => {
    const controls = [
        {
            name: "user_img",
            type: "file",
        },
        {
            name: "username",
            type: "text",
            placeholder: "Entre your name..",
            label: "Name"
        },
        {
            name: "email",
            type: "email",
            placeholder: "Entre your email..",
            label: "Email"
        },
        {
            name: "password",
            type: "text",
            placeholder: "Entre your password..",
            label: "Password"
        },

    ]

    return (
        <div className='border  rounded-md p-4 border-yellow-500 h-auto w-auto '>
            <p>Register</p>
            <Input controls={controls} formData={formData} setFormData={setFormData} />
            <button className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Register</button>

        </div>
    )
}

export default Register