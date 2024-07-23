import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerAsync = createAsyncThunk("/register", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/user/register", formData)
        if (data.success) {
            localStorage.setItem("token", data.token);
        }
        return data;

    } catch (e) {
        console.log("register", e)
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message);
    }

})

export const loginAsync = createAsyncThunk("/login", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/user/login", formData)

        if (data.success) {
            localStorage.setItem("token", data.token);
        }
        return data;

    } catch (e) {
        console.log("login e", e)

        if (e.response && e.response.data.message) {
            localStorage.clear()
            return rejectWithValue(e.response.data.message)
        }
        localStorage.clear();
        return rejectWithValue(e.message);
    }

})
export const logoutAsync = createAsyncThunk("/logout", async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/logout", { withCredentials: true, headers: { "Content-Type": "application/json" } })
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            localStorage.clear()
            return rejectWithValue(e.response.data.message)
        }
        localStorage.clear()
        return rejectWithValue(e.message);
    }

})
export const getUserAsync = createAsyncThunk("get-user", async (args, { rejectWithValue }) => {

    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/getuser", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        return data;

    } catch (error) {
        if (error.response && error.response.data.message) {
            localStorage.clear()
            return rejectWithValue(error.response.data.message);
        }
        else {
            localStorage.clear()
            return rejectWithValue(error.message);
        }
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