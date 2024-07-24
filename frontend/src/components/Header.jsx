import React from 'react'
import { CiSearch } from "react-icons/ci";



<CiSearch />

const Header = ({ setFilter, filter, handleChange, query }) => {


    return (
        <div className='text-custom-bg-dark dark:text-custom-text-primary  w-full grid place-content-center gap-4 my-8 md:my-16 '>
            <div className="flex mt-16 md:mt-0 w-fit rounded-md" >
                <input value={query} onChange={handleChange} className='text-xl bg-custom-bg-light dark:bg-transparent dark:text-custom-text-primary text-custom-text-dark-primary outline-none  px-2 border-[1px] border-custext-custom-text-header  rounded-md ' type="text" placeholder='Search' />
                <p className=' transition-all hover:scale-110 text-3xl font-extrabold'> <CiSearch className='text-custom-text-header bg-custom-bg-light dark:bg-transparent rounded-md ' /></p>
            </div>

            <div className="max-w-sm mx-auto">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-gray-600 p-2 text-yellow-200 rounded-md text-md font-thin border border-custom-text-header ">
                    <option value="Comedy">Comedy</option>
                    <option value="Action">Action</option>
                    <option value="Shounen">Shounen</option>
                    <option value="Romance">Romance</option>
                    <option value="Isekai">Isekai</option>
                    <option value="Ecchi">Ecchi</option>
                    <option value="SuperNatural">Supernatural</option>
                    <option value="Slice of life">Slice of Life</option>

                </select>
            </div>
            {/* <div className="max-w-sm ">
                    <select value={filter.order} onChange={(e) => setFilter({ order: e.target.value })} className="bg-gray-600 p-2 text-yellow-200 rounded-md text-md font-thin border border-custom-text-header ">
                        <option value="desc">Latest</option>
                        <option value="asc">Oldest</option>
                    </select>
                </div> */}




        </div>
    )
}

export default Header