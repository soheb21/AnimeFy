import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addAnimeAsync = createAsyncThunk("/add-anime", async (formdata, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/anime/add-anime", formdata, {
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
export const updateAnimeAsync = createAsyncThunk("/update-Anime", async (doc, { rejectWithValue }) => {
    try {
        const { data } = await axios.put("http://localhost:8000/api/v1/anime/update/" + doc._id, doc, {
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
export const deleteAnimeAsync = createAsyncThunk("/delete-Anime", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete("http://localhost:8000/api/v1/anime/delete/" + id, {
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
export const getAllUserAsync = createAsyncThunk("/get-allUser", async (args, { rejectWithValue }) => {

    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/get-users", {
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
export const deleteUserAsync = createAsyncThunk("/delete-user", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete("http://localhost:8000/api/v1/user/delete/" + id, {
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