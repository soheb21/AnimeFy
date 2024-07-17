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