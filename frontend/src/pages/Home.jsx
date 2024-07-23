import React, { useCallback, useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import { useDispatch, useSelector } from "react-redux"
import Spinner from '../utils/Spinner'
import { checkIsEdit, clearAllErrors } from '../store/anime/animSlice'
import { clearAllUserErrors } from '../store/user/userSlice'
import { deleteAnimeAsync } from '../store/anime/adminAPI'
import { toast } from 'react-toastify'
import throttle from 'lodash.throttle';
import { addFavAsync } from '../store/user/userAPI'

const Home = ({ setFilter, filter }) => {

  const dispatch = useDispatch()
  const { loading, anime, error } = useSelector((state) => state.anime)
  const favsError = useSelector((state) => state.user.error)
  const message = useSelector((state) => state.user.message)
  const [query, setQuery] = useState('');

  const filteredItems = anime.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleAddtoFav = (id) => {

    if (!favsError) {
      dispatch(addFavAsync(id))
      return;
    }
  }
  const handleUpdateAnime = (id) => {
    dispatch(checkIsEdit());
  }
  const handleDeleteAnime = (id) => {
    dispatch(deleteAnimeAsync(id))
  }
  useEffect(() => {
    if (message) {
      toast.success(message ? message : "Something went wrong!!")
      dispatch(clearAllUserErrors())
      return;
    }
    if (favsError) {
      toast.warn(favsError ? favsError : "Something went wrong!!")
      dispatch(clearAllUserErrors())
      return;
    }
    if (error) {
      toast.error(error ? error : "Something went wrong !!")
      dispatch(clearAllErrors());
      return;
    }
  }, [message, favsError, error])


  return (
    <>
      {
        loading
          ? (<Spinner />)
          : (
            <div className='h-full w-full   overflow-hidden  md:p-4 bg-black text-white'>
              <Header handleChange={handleChange} query={query} setFilter={setFilter} filter={filter} />
              <div className="flex flex-wrap gap-3 justify-center items-center " >
                {
                  filteredItems.length > 0 ? filteredItems?.map((item) => <Card
                    key={item._id}
                    poster={item?.poster_path}
                    title={item?.title}
                    id={item?._id}
                    handleAddtoFav={handleAddtoFav}
                    handleUpdateAnime={handleUpdateAnime}
                    handleDeleteAnime={handleDeleteAnime}

                  />)
                    : <p>Not Available</p>
                }

              </div>


            </div>
          )
      }
    </>
  )


}

export default Home