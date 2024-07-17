import React from 'react'
import Input from './Input'


const Login = ({ setIsLogin, formData, setFormData, handleLogin }) => {
    const controls = [
        {
            name: "email",
            type: "email",
            placeholder: "Enter your email..",
            label: "Email"
        },
        {
            name: "password",
            type: "text",
            placeholder: "Enter your password..",
            label: "Password"
        },

    ]



    return (
        <div className='border  rounded-md p-4 border-yellow-500 h-auto w-auto '>
            <p className='text-white font-thin text-2xl'>Login</p>
            <Input controls={controls} formData={formData} setFormData={setFormData} />
            <div className="flex flex-col md:flex-row items-center gap-2 justify-between w-full">
                <button onClick={handleLogin} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Login</button>
                <button onClick={() => setIsLogin(false)} className='text-white' to={"/register"}>create an account</button>
            </div>
        </div>
    )
}

export default Login