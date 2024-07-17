import React from 'react'
import YouTube from "react-youtube";

const CardDetail = ({ data }) => {

    const option = {
        height: "390",
        width: "100%",
        playVars: {
            autoplay: 1,
        }
    }
    return (
        <div className="h-screen p-4 md:p-10 bg-black text-white w-full flex flex-col gap-3 justify-start items-start">
            <div className='w-full h-[400px] object-contain  overflow-hidden  relative border border-yellow-600 rounded-md'>
                <YouTube videoId='2g811Eo7K8U' opts={option} />
            </div>
            <div className="flex flex-col gap-3 md:flex-row items-start w-full justify-between p-2">
                <p className='font-semibold text-md md:text-xl text-yellow-600'>Title: <span className='font-bold  text-white'>{data?.title}</span></p>
                <p className='font-semibold text-md md:text-xl text-yellow-600'>Release Date: <span className='font-semibold rounded-md  bg-white text-black px-1'>{data?.release_date}</span></p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row items-start w-full justify-between p-2">
                <p className='font-semibold text-md md:text-xl text-yellow-600'>Type: <span className='font-semibold rounded-md bg-white text-black px-1'>{data?.type}</span></p>
                <p className='flex gap-3 flex-wrap items-center text-yellow-600 font-semibold '>Genre:{data?.genre?.split(",").map(i => <span key={i} className='font-semibold rounded-md bg-white text-black px-1 '>{i}</span>)}</p>
            </div>
            <p className='font-semibold text-md md:text-xl text-yellow-600 px-2'>Season: <span className='font-normal rounded-md bg-white text-black px-1'>{data?.seasons}</span></p>
            <h4 className='font-semibold text-md md:text-xl text-yellow-700'>Description: <br /><p className='font-thin text-gray-200'>{data?.des}</p></h4>

            <button className='font-normal rounded-md w-full md:max-w-fit  mt-2  bg-white text-black px-4 transition-all hover:bg-transparent hover:text-white hover:border-[1px] py-2 hover:scale-110'>Add to Fav</button>
        </div>
    )
}

export default CardDetail