import React, { useEffect, useState } from 'react'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { clearAllUserErrors } from '../store/user/userSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../store/user/userAPI';


const Register = () => {
    const [preview, setPreview] = useState()
    const navigate = useNavigate();
    const initialRegisterForm = {
        username: "",
        email: "",
        password: "",
        user_img: ""
    }
    const [registerFormData, setRegisterFormData] = useState(initialRegisterForm)
    const controls = [
        {
            name: "user_img",
            type: "file",
            label: registerFormData.user_img ? <img className='bg-red-400 rounded-full object-cover mb-2' height={"100px"} width={"100px"} src={preview} alt="img" /> : <CgProfile className='w-[100px] mb-2 h-[100px]' />
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
        let selectedFile = registerFormData?.user_img
        const objectUrl = selectedFile ? URL.createObjectURL(selectedFile) : "./pofile.jpg"
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [registerFormData.user_img])

    const { error } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("user_img", registerFormData.user_img)
        form.append("email", registerFormData.email)
        form.append("password", registerFormData.password)
        form.append("username", registerFormData.username)
        if (!registerFormData.email || !registerFormData.password || !registerFormData.username || !registerFormData.user_img) {
            toast.warn("Please Provide All Fields!!")
            return;
        }
        if (error) {
            toast.error(error ? error : "Something went wrong!!")
            dispatch(clearAllUserErrors())
        }
        dispatch(registerAsync(form))
        navigate("/login")


    }

    return (
        <div className=" bg-hero-pattern dark:bg-hero-dark-pattern h-screen w-full  fixed top-0">
            <div className="w-full h-[40rem]   grid place-content-center place-items-center">
                <div className='border bg-blue-400 dark:bg-custom-bg-dark  rounded-md p-4 dark:border-custom-text-header h-auto w-auto '>
                    <p className='text-white font-thin text-2xl'>Register</p>
                    <Input controls={controls} formData={registerFormData} setFormData={setRegisterFormData} />
                    <div className="flex flex-col md:flex-row-reverse items-center gap-2 justify-between w-full">
                        <button onClick={handleRegister} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Register</button>
                        <Link className='text-white' to={"/login"}>Already have an account</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register