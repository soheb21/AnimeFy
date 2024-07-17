import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import { useDispatch, useSelector } from "react-redux"
import { addFavAsync } from '../store/anime/animeAPI'
import Spinner from '../utils/Spinner'
import { checkIsEdit } from '../store/anime/animSlice'
import { deleteAnimeAsync } from '../store/anime/adminAPI'

const Home = () => {
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch()
  const { loading, anime, isEdit, favs } = useSelector((state) => state.anime)

  const handleAddtoFav = (id) => {
    if (favs && favs.findIndex((item) => item.fav._id === id) < 0) {
      dispatch(addFavAsync(id))
    }
    else {
      alert("already present")
    }
  }
  const handleUpdateAnime = (id) => {
    dispatch(checkIsEdit());
  }
  const handleDeleteAnime = (id) => {
    dispatch(deleteAnimeAsync(id))
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <div className='h-full w-full  border overflow-hidden  md:p-4 bg-black text-white'>
      <Header />
      <div className="flex flex-wrap gap-3 justify-center items-center " >
        {
          anime.length > 0 && anime?.map((item) => <Card
            key={item._id}
            poster={item?.poster_path}
            title={item?.title}
            id={item?._id}
            handleAddtoFav={handleAddtoFav}
            handleUpdateAnime={handleUpdateAnime}
            handleDeleteAnime={handleDeleteAnime}
            isFav={isFav}

          />)
        }

      </div>


    </div>
  )
}

export default Home