import React, { useEffect, useState } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";


const Register = ({ setIsLogin, formData, setFormData, handleRegister }) => {
    const [preview, setPreview] = useState()
    const controls = [
        {
            name: "user_img",
            type: "file",
            label: formData.user_img ? <img className='bg-red-400 rounded-full object-cover mb-2' height={"100px"} width={"100px"} src={preview} alt="img" /> : <CgProfile className='w-[100px] mb-2 h-[100px]' />
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
    useEffect(() => {
        // create the preview
        let selectedFile = formData?.user_img
        const objectUrl = selectedFile ? URL.createObjectURL(selectedFile) : "./pofile.jpg"
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [formData.user_img])


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