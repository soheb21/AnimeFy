import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import { useDispatch, useSelector } from "react-redux"
import { addAnimeAsync, updateAnimeAsync } from '../../store/anime/adminAPI'
import { useNavigate, useParams } from 'react-router-dom'
const AddAnimeForm = () => {
    const intitailAnimeForm = {
        poster_path: "",
        title: "",
        genre: "",
        release_date: "",
        type: "",
        seasons: "",
        yt_trailer: "",
        des: ""


    }
    const [preview, setPreview] = useState()

    const [addAnimeForm, setAddAnimeForm] = useState(intitailAnimeForm)
    const [getImg, setGetImg] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const controls = [
        {
            name: "poster_path",
            type: "file",
            label: !getImg && addAnimeForm?.poster_path ? (<img className=' rounded-sm overflow-hidden w-[150px] h-[200px] object-cover mb-2' src={preview || "./user.jpeg"} alt="img" />) : (<img className=' rounded-sm overflow-hidden w-[150px] h-[200px] object-cover mb-2' src={getImg || "./user.jpeg"} alt="img" />)

        },
        {
            name: "title",
            type: "text",
            placeholder: "Anime Title",
            label: "Title"
        },
        {
            name: "genre",
            type: "text",
            placeholder: "Anime Genre",
            label: "Genre"
        },
        {
            name: "release_date",
            type: "date",
            label: "Release-Date"
        },
        {
            name: "type",
            type: "text",
            placeholder: "Anime Type",
            label: "Anime-Type"
        },
        {
            name: "seasons",
            type: "number",
            placeholder: "seasons",
            label: "Seasons"
        },

        {
            name: "yt_trailer",
            type: "text",
            placeholder: "Anime Trailer Link",
            label: "Anime-Trailer"
        },

        {
            name: "des",
            type: "text",
            placeholder: "Entre your description",
            label: "Description"
        },

    ]

    const dispatch = useDispatch()
    const { id } = useParams();
    const { anime } = useSelector((state) => state.anime)
    const navigate = useNavigate();


    const handleHandleForm = () => {
        const {
            poster_path,
            title,
            genre,
            release_date,
            type,
            seasons,
            yt_trailer,
            des
        } = addAnimeForm;
        if (isEdit && id) {
            dispatch(updateAnimeAsync({ ...addAnimeForm, _id: id }))
            navigate("/")
        }
        else if (!poster_path || !title || !genre || !release_date || !type || !seasons || !yt_trailer || !des) {
            alert("Please Fill All Fields");
        } else {
            let form = new FormData();
            form.append("poster_path", addAnimeForm.poster_path)
            form.append("title", addAnimeForm.title)
            form.append("genre", addAnimeForm.genre)
            form.append("release_date", addAnimeForm.release_date)
            form.append("type", addAnimeForm.type)
            form.append("seasons", addAnimeForm.seasons)
            form.append("des", addAnimeForm.des)
            form.append("yt_trailer", addAnimeForm.yt_trailer)
            dispatch(addAnimeAsync(form));
            setAddAnimeForm(intitailAnimeForm);
        }

    }
    const handleEdit = () => {
        if (id) {
            const exitsingAnime = anime.find((i) => i._id === id)
            setGetImg(exitsingAnime?.poster_path)
            setAddAnimeForm({
                title: exitsingAnime?.title,
                genre: exitsingAnime?.genre,
                release_date: exitsingAnime?.release_date,
                type: exitsingAnime?.type,
                seasons: exitsingAnime?.seasons,
                yt_trailer: exitsingAnime?.yt_trailer,
                des: exitsingAnime?.des
            })
            setIsEdit(!isEdit)
        }
    }

    useEffect(() => {
        handleEdit()
    }, [dispatch, id])

    useEffect(() => {
        // create the preview
        let selectedFile = addAnimeForm?.poster_path
        const objectUrl = selectedFile ? URL.createObjectURL(selectedFile) : "./pofile.jpg"
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)

    }, [addAnimeForm.poster_path])


    return (
        <div className="md:w-1/2 md:mx-auto p-4 mt-4">
            <div className='border  rounded-md p-4 border-yellow-500 h-auto w-auto '>
                <p className='text-white font-thin  text-2xl'>Add{" "}<span className='font-bold text-yellow-500'>Anime</span></p>
                <Input controls={controls} formData={addAnimeForm} setFormData={setAddAnimeForm} />
                <div className="flex flex-col md:flex-row items-center gap-2 justify-between w-full">
                    <button onClick={handleHandleForm} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>{isEdit ? "Edit" : "Add"}</button>
                </div>


            </div>
        </div>
    )
}

export default AddAnimeForm