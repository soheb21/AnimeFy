import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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
