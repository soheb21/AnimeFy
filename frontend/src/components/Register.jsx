import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'

const Register = ({ setIsLogin, formData, setFormData, handleRegister }) => {
    const controls = [
        {
            name: "user_img",
            type: "file",
            label: "User"
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
            <p className='text-white font-thin text-2xl'>Register</p>
            <Input controls={controls} formData={formData} setFormData={setFormData} />
            <div className="flex flex-col md:flex-row items-center gap-2 justify-between w-full">
                <button onClick={handleRegister} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Register</button>
                <button onClick={() => setIsLogin(true)} className='text-white' to={"/login"}>Already have an account</button>
            </div>

        </div>
    )
}

export default Register