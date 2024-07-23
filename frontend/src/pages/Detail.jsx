import React, { useEffect } from 'react'
import CardDetail from '../components/CardDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAnimeDetailAsync } from '../store/anime/animeAPI'
import { toast } from 'react-toastify'
import { clearAllErrors } from '../store/anime/animSlice'
import Spinner from '../utils/Spinner'

const Detail = () => {
    const dispatch = useDispatch()
    const { loading, animeDetail, error } = useSelector((state) => state.anime)
    const { id } = useParams();

    useEffect(() => {
        if (error) {
            toast.error(error);
            clearAllErrors();
        }
        dispatch(getAnimeDetailAsync(id))
    }, [dispatch, id])
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <CardDetail data={animeDetail} />
        </div>
    )
}

export default Detail