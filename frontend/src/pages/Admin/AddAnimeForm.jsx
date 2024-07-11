import React, { useState } from 'react'
import Input from '../../components/Input'

const AddAnimeForm = () => {

    const controls = [
        {
            name: "poster_path",
            type: "file",
            label: "Anime Poster"
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
    const [addAnimeForm, setAddAnimeForm] = useState(intitailAnimeForm)
    const handleHandleForm = () => {

    }
    console.log(addAnimeForm)

    return (
        <div className="md:w-1/2 md:mx-auto p-4 mt-4">
            <div className='border  rounded-md p-4 border-yellow-500 h-auto w-auto '>
                <p className='text-white font-thin  text-2xl'>Add{" "}<span className='font-bold text-yellow-500'>Anime</span></p>
                <Input controls={controls} formData={addAnimeForm} setFormData={setAddAnimeForm} />
                <div className="flex flex-col md:flex-row items-center gap-2 justify-between w-full">
                    <button onClick={handleHandleForm} className='bg-gray-50  transition-all hover:bg-transparent border-[1px] hover:text-white hover:scale-110 mx-2 px-2 rounded-md'>Add</button>
                </div>


            </div>
        </div>
    )
}

export default AddAnimeForm