import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearAllErrors } from '../store/anime/animSlice';
import Spinner from '../utils/Spinner';
import Card from '../components/Card';
import { removeFavByUserAsync } from '../store/user/userAPI';

const Fav = () => {
    const dispatch = useDispatch();
    const { loading, favs, error } = useSelector((state) => state.user)

    if (error) {
        toast.error(error ? error : "Something went wrong!!")
        clearAllErrors();
        return;
    }
    if (loading) {
        return <Spinner />
    }
    const handleremove = (id) => {
        dispatch(removeFavByUserAsync(id))

    }

    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <div className='bg-hero-pattern h-screen w-full -opacity-40 dark:bg-hero-dark-pattern fixed top-0  '>

                        <div className="h-full w-full mt-20  overflow-auto  md:p-4  text-white">
                            <div className="flex flex-wrap gap-3 justify-center items-center " >
                                {
                                    favs.length > 0 ? favs?.map((item, ind) => <Card
                                        key={ind}
                                        poster={item?.poster_path}
                                        title={item?.title}
                                        id={item?._id}
                                        removeiD={item?._id}
                                        handleremove={handleremove}

                                    />)
                                        : <p className='w-full text-center text-3xl '>No Favourite Found</p>
                                }

                            </div>
                        </div>


                    </div>
            }
        </>
    )
}

export default Fav