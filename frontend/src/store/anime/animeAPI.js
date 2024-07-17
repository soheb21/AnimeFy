import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const getAllAnimesAsync = createAsyncThunk("/all-anime", async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/anime/get")
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message);
    }

})
export const getAnimeDetailAsync = createAsyncThunk("/anime-detail", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/anime/get-detail/" + id)
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message);
    }

})
export const addFavAsync = createAsyncThunk("/add-fav", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/fav/add-fav", { docID: id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        return data;

    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        }
        else {
            return rejectWithValue(error.message);
        }
    }
})
export const getFavAsync = createAsyncThunk("/get-fav", async (args, { rejectWithValue }) => {

    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/fav/get-fav", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return data;

    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        }
        else {
            return rejectWithValue(error.message);
        }
    }
})
export const removeFavByUserAsync = createAsyncThunk("/remove-fav", async (id, { rejectWithValue }) => {

    try {
        const { data } = await axios.delete("http://localhost:8000/api/v1/fav/remove-fav/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return data;

    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        }
        else {
            return rejectWithValue(error.message);
        }
    }
})