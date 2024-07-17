import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavAsync, removeFavByUserAsync } from '../store/anime/animeAPI';
import { toast } from 'react-toastify';
import { clearAllErrors } from '../store/anime/animSlice';
import Spinner from '../utils/Spinner';
import Card from '../components/Card';

const Fav = () => {
    const dispatch = useDispatch();
    const { loading, favs, error } = useSelector((state) => state.anime)

    useEffect(() => {
        dispatch(getFavAsync());
    }, [dispatch])
    if (loading) {
        return <Spinner />
    }
    const handleremove = (id) => {
        dispatch(removeFavByUserAsync(id))

    }
    return (
        <div className='h-full bg-black text-white p-4 '>

            <div className="flex flex-wrap gap-3 justify-center items-center " >
                {
                    favs.length > 0 ? favs?.map((item, ind) => <Card
                        key={ind}
                        poster={item?.fav.poster_path}
                        title={item?.fav.title}
                        id={item?.fav._id}
                        removeiD={item._id}
                        handleremove={handleremove}

                    />)
                        : <p className='w-full text-center text-3xl '>No Favourite Found</p>
                }

            </div>


        </div>
    )
}

export default Fav