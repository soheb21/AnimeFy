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

    const data = {
        title: "Despicable Me ",
        yt_trailer: "2g811Eo7K8U",
        genre: ["Comedy", "Action", "Fantasy"],
        des: "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
        release_date: "2024-06-20",
        type: "series",
        seasons: 2
    }
    return (
        <div>
            <CardDetail data={animeDetail} />
        </div>
    )
}

export default Detail