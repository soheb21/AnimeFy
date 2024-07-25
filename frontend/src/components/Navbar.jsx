import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsBagHeartFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { MdAddToQueue } from "react-icons/md";
import { useSelector } from 'react-redux';
import ToggleBtn from './ToggleBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
const Navbar = ({ count }) => {
    const { user, isAuthenticate } = useSelector(state => state.user)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload();
    }
    const [show, setShow] = useState(false)

    return (
        <div className='h-16  border-b-0 flex  justify-between items-center  bg-gray-50 dark:bg-custom-btn-primary-text z-10 border-gray-400 rounded-sm sticky top-0'>
            <Link to={"/"} className='text-xl md:text-xl px-4 text-start dark:bg-custom-btn-primary-text dark:text-custom-text-primary bg-gray-50 font-thin'>Anime<span className='text-yellow-500 dark:bg-custom-btn-primary-text font-semibold bg-gray-50'>Fy</span></Link>
            <div onClick={() => setShow(!show)} className="md:hidden transition-all mr-2 text-xl text-custom-text-header">{!show ? <IoIosCloseCircle className='text-2xl' /> : <GiHamburgerMenu />}</div>
            <div className={`flex  ${!show ? "block" : "hidden"} border-2 md:border-none border-custom-text-header rounded-lg    bg-custom-bg-light  absolute justify-center top-[45px] md:top-[10px] right-1 flex-col-reverse py-4 md:py-0  md:flex-row md:justify-end w-20 px-2 md:w-[30%] items-center md:px-14 gap-4  dark:bg-custom-btn-primary-text `}>
                <ToggleBtn />
                {
                    user.role === "admin"
                        ? <div className='flex flex-col md:flex-row  items-center justify-center gap-5   dark:bg-custom-btn-primary-text bg-gray-50'>
                            <Link className='dark:bg-custom-btn-primary-text relative  h-full w-full  ' to={"/add-Anime"}>
                                <button className='text-yellow-500   transition-all hover:scale-110 text-2xl '><MdAddToQueue className='dark:bg-custom-btn-primary-text text-3xl bg-gray-50' /></button>
                            </Link>
                            <Link className='dark:bg-custom-btn-primary-text  h-full w-full ' to={"/dashboard"}>
                                <button className='text-yellow-500  transition-all hover:scale-110 text-2xl '><RiAdminFill className='dark:bg-custom-btn-primary-text text-3xl bg-gray-50' /></button>

                            </Link>
                        </div>
                        : null
                }

                <div className=' relative  dark:bg-custom-btn-primary-text bg-gray-50 flex justify-center' >
                    <Link to={"/fav"}>
                        <button className='text-yellow-500  transition-all hover:scale-110 text-3xl '>
                            <BsBagHeartFill className='dark:bg-custom-btn-primary-text relative bg-gray-50' />
                        </button>
                    </Link>
                    {
                        count !== 0 && <span className='absolute -top-[10px] -right-[15px]   w-fit px-2 bg-red-500 text-white rounded-full text-center'>{count}</span>
                    }

                </div>

                {
                    !isAuthenticate
                        ? <div className="w-[50px] md:mx-0 mx-auto mr-2  border-2 border-custom-text-header overflow-hidden h-[50px]  rounded-full dark:bg-custom-btn-primary-text bg-gray-50">
                            <Link to={"/login"}>
                                <img className='w-full h-full object-cover' src={"./user.jpeg"} alt="user-img" />
                            </Link>
                        </div>
                        :
                        <div className="flex flex-col md:flex-row gap-3 h-full justify-center items-center">
                            <div className="w-[50px] border-2 border-custom-text-header overflow-hidden  h-[50px]  rounded-full dark:bg-custom-btn-primary-text bg-gray-50">
                                <img className='w-full h-full object-cover ' src={user?.user_img} alt="user-img" />
                            </div>
                            <button onClick={handleLogout} className='md:mr-2 bg-red-500 font-thin px-2 rounded-md text-white'>Logout</button>
                        </div>
                }




            </div>


        </div>
    )
}

export default Navbar