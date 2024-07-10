import React from 'react'
import { Link } from 'react-router-dom'
import { BsBagHeartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='h-12 border-b-0 flex justify-between items-center  bg-gray-50 z-10 border-gray-400 rounded-sm sticky top-0'>
            <Link to={"/"} className='text-xl md:text-xl px-4 text-start bg-gray-50 font-thin'>Anime<span className='text-yellow-500 bg-gray-50'>Fy</span></Link>
            <div className="flex items-center bg-gray-50">
                <Link to={"/fav"} className='text-yellow-500 transition-all hover:scale-110 mr-5 text-2xl '><BsBagHeartFill className='bg-gray-50' /></Link>
                <Link to={"/registration"} className='text-yellow-500 transition-all hover:scale-110 mr-5 text-2xl'><FaRegUserCircle className='bg-gray-50' /></Link>

            </div>
        </div>
    )
}

export default Navbar