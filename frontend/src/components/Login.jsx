import React, { useEffect, useState } from 'react'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/user/userAPI';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearAllUserErrors } from '../store/user/userSlice';



const Login = () => {
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
    const initialLoginForm = {
        email: "",
        password: ""
    }
    const dispatch = useDispatch();
    const [loginData, setloginData] = useState(initialLoginForm)
    const { isAuthenticate, error } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.warn("Please Provide All Fields!!")
            return;
        }
        dispatch(loginAsync(loginData));
    }

    useEffect(() => {
        if (error) {
            toast.error(error ? error : "Something went wrong!!");
            dispatch(clearAllUserErrors());
        }
        if (isAuthenticate) {
            navigate("/")
        }
    }, [dispatch, isAuthenticate, error])



    return (
        <div className=" bg-hero-pattern dark:bg-hero-dark-pattern h-screen w-full  fixed top-0">
            <div className="w-full h-[40rem]  grid place-content-center place-items-center">
                <div className='border bg-blue-400 dark:bg-custom-bg-dark rounded-md p-4 dark:border-custom-text-header h-auto w-auto '>
                    <p className='text-white font-thin text-2xl'>Login</p>
                    <Input controls={controls} formData={loginData} setFormData={setloginData} />
                    <div className="flex flex-col md:flex-row-reverse items-center gap-2 justify-between w-full">
                        <button onClick={handleLogin} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Login</button>
                        <Link className='text-white' to={"/register"}>create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login