import React from 'react'
import { Link } from 'react-router-dom'
import { BsBagHeartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdAddToQueue } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='h-12 border-b-0 flex justify-between items-center  bg-gray-50 z-10 border-gray-400 rounded-sm sticky top-0'>
            <Link to={"/"} className='text-xl md:text-xl px-4 text-start bg-gray-50 font-thin'>Anime<span className='text-yellow-500 bg-gray-50'>Fy</span></Link>
            <div className="flex items-center  bg-gray-50">
                <Link className='bg-gray-50 h-full w-full grid place-content-center ' to={"/add-Anime"}>
                    <button className='text-yellow-500  transition-all hover:scale-110 mr-5 text-2xl '><MdAddToQueue className='bg-gray-50' /></button>

                </Link>
                <Link className='bg-gray-50 h-full w-full grid place-content-center ' to={"/dashboard"}>
                    <button className='text-yellow-500  transition-all hover:scale-110 mr-5 text-2xl '><RiAdminFill className='bg-gray-50' /></button>

                </Link>
                <Link className='bg-gray-50 h-full w-full grid place-content-center' to={"/fav"}>
                    <button className='text-yellow-500  transition-all hover:scale-110 mr-5 text-2xl '><BsBagHeartFill className='bg-gray-50' /></button>

                </Link>
                <Link className='bg-gray-50 h-full w-full grid place-content-center' to={"/registration"}>
                    <button className='text-yellow-500  transition-all hover:scale-110 mr-5 text-2xl '><FaRegUserCircle className='bg-gray-50' /></button>

                </Link>



            </div>
        </div>
    )
}

export default Navbar