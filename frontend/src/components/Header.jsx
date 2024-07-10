import React from 'react'
import Spinner from '../utils/Spinner'
import { CiSearch } from "react-icons/ci";
<CiSearch />

const Header = () => {
    return (
        <div className='text-black w-full grid place-content-center gap-4 my-5 '>
            <div className="flex w-fit rounded-md" >
                <input className='text-xl bg-transparent text-white rounded-md px-2 border-[1px] border-yellow-500 ' type="text" placeholder='Search' />
                <p className=' transition-all hover:scale-110 text-3xl font-extrabold'> <CiSearch className='text-yellow-500 ' /></p>
            </div>
            <div className="flex gap-4 w-full ">
                <div className="max-w-sm ">
                    <select className="bg-gray-600 p-2 text-yellow-200 rounded-md text-md font-thin border border-yellow-300 ">
                        <option value="popular">Popular</option>
                        <option value="comedy">Comedy</option>
                        <option value="action">Action</option>
                        <option value="shounen">Shounen</option>
                        <option value="romance">Rom-Com</option>
                    </select>
                </div>
                <div className="max-w-sm ">
                    <select className="bg-gray-600 p-2 text-yellow-200 rounded-md text-md font-thin border border-yellow-300 ">

                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>



            </div>
        </div>
    )
}

export default Header