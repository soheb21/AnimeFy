import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsBagHeartFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { MdAddToQueue } from "react-icons/md";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { user, isAuthenticate } = useSelector(state => state.user)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload();
    }


    return (
        <div className='h-16  border-b-0 overflow-hidden flex justify-between items-center  bg-gray-50 z-10 border-gray-400 rounded-sm sticky top-0'>
            <Link to={"/"} className='text-xl md:text-xl px-4 text-start bg-gray-50 font-thin'>Anime<span className='text-yellow-500 bg-gray-50'>Fy</span></Link>
            <div className="flex items-center md:px-14 md:gap-2 justify-center bg-gray-50">
                {
                    user.role === "admin"
                        ? <>
                            <Link className='bg-gray-50  h-full w-full grid place-content-center ' to={"/add-Anime"}>
                                <button className='text-yellow-500  transition-all hover:scale-110 text-2xl '><MdAddToQueue className='bg-gray-50' /></button>
                            </Link>
                            <Link className='bg-gray-50 h-full w-full grid place-content-center ' to={"/dashboard"}>
                                <button className='text-yellow-500  transition-all hover:scale-110 text-2xl '><RiAdminFill className='bg-gray-50' /></button>

                            </Link>
                        </>
                        : null
                }

                <Link className='bg-gray-50 h-full w-full grid place-content-center' to={"/fav"}>

                    <button className='text-yellow-500  transition-all hover:scale-110 text-2xl '><BsBagHeartFill className='bg-gray-50' /></button>

                </Link>
                {
                    isAuthenticate
                        ? <div className="md:w-[150px] overflow-hidden mt-3 md:h-[50px] md:mt-3 rounded-full bg-gray-50">
                            <img className='w-full h-full object-cover ' src={user?.user_img} alt="user-img" />
                        </div>
                        : <div className="md:w-[150px] overflow-hidden md:h-[80px] md:mt-3 rounded-full bg-gray-50">
                            <Link to={"/login"}>
                                <img className='w-full h-full' src={"./user.jpeg"} alt="user-img" />
                            </Link>
                        </div>
                }

                {
                    isAuthenticate && <button onClick={handleLogout} className='mr-2 bg-red-500 font-thin px-2 rounded-md text-white'>Logout</button>
                }




            </div>
        </div>
    )
}

export default Navbar