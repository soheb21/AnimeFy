import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import YoutubeTrailer from './YoutubeTrailer';
import { addFavAsync } from '../store/user/userAPI';
import { toast } from 'react-toastify';

const CardDetail = ({ data }) => {

    const { id } = useParams();
    const { favs } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const handleAddtoFav = () => {
        if (favs && favs.findIndex((item) => item._id === id) < 0) {
            dispatch(addFavAsync(id))
            toast.success("Added Successfully")
        }
        else {
            alert("already present")
        }
    }

    return (
        <div className=" p-4 md:p-10 bg-transparent   w-full flex flex-col gap-3 justify-start items-start">
            <div className='w-full  h-[20rem]  object-contain shadow-custom-shadow  overflow-hidden  relative border border-custom-text-header rounded-md'>
                {data.yt_trailer && <YoutubeTrailer url={data.yt_trailer} />}
            </div>
            <div className="flex flex-col gap-3 md:flex-row items-start w-full justify-between p-2">
                <p className='font-semibold bg-custom-bg-light text-md md:text-xl px-2 text-custom-text-header'>Title: <span className='font-bold text-custom-text-dark-primary '>{data?.title}</span></p>
                <p className='font-semibold  bg-custom-bg-light   dark:bg-custom-btn-primary-text px-2 text-md md:text-xl text-custom-text-header'>Release Date: <span className='font-semibold rounded-md  text-custom-text-dark-primary dark:text-custom-text-primary    px-1'>{data?.release_date}</span></p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row items-start w-full justify-between p-2">
                <p className='font-semibold text-md md:text-xl bg-custom-bg-light   dark:bg-custom-btn-primary-text px-2 text-custom-text-header'>Type: <span className='font-semibold rounded-md  text-custom-text-dark-primary dark:text-custom-text-primary px-1'>{data?.type}</span></p>
                <p className='flex gap-3 flex-wrap items-center bg-custom-bg-light   dark:bg-custom-btn-primary-text px-2 py-1 text-custom-text-header font-semibold '>Genre:{data?.genre?.map(i => <span key={i} className='font-semibold rounded-md bg-custom-btn-primary-text text-custom-text-primary dark:text-custom-text-dark-primary  dark:bg-custom-btn-dark-primary-text px-1 '>{i}</span>)}</p>
            </div>
            <p className='font-semibold bg-custom-btn-dark-primary-text dark:bg-custom-btn-primary-text text-md md:text-xl text-custom-text-header px-2'>Season: <span className='font-normal rounded-md bg-custom-btn-primary-text text-custom-text-primary dark:bg-custom-btn-dark-primary-text  dark:text-custom-text-dark-primary px-1'>{data?.seasons}</span></p>
            <h4 className='font-semibold shadow-custom-shadow  bg-custom-bg-light text-cus  dark:bg-custom-btn-primary-text p-2 rounded-md text-md md:text-xl text-custom-text-header'>Description: <br /><p className='font-thin text-custom-text-dark-primary dark:text-custom-text-primary'>{data?.des}</p></h4>

            <button onClick={handleAddtoFav} className='font-normal rounded-md w-full md:max-w-fit  mt-2  dark:bg-custom-btn-primary-text bg-custom-bg-light dark:text-custom-text-primary text-custom-text-dark-primary   px-4 transition-all hover:bg-transparent hover:text-custom-text-dark-primary dark:hover:text-white hover:border-custom-text-dark-primary border-[1px] dark:hover:border-custom-btn-dark-primary-text py-2 hover:scale-110'>Add to Fav</button>
        </div>
    )
}

export default CardDetail