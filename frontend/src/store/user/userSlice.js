import axios from "axios";
import { createSlice } from "@reduxjs/toolkit"
import { getUserAsync, loginAsync, logoutAsync, registerAsync } from "./userAPI";

const initialState = {
    loading: false,
    user: {},
    isAuthenticate: false,
    message: null,
    error: null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearAllErrors(state) {
            state.error = null;
            state.user = {};
            state.loading = false;
            state.message = null;
        },
        logout(state) {
            localStorage.clear();
            state.loading = false;
            state.isAuthenticate = false;
            state.user = {};
            state.message = payload.message
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(registerAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = true;
            state.message = payload.message
        })
        builder.addCase(registerAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = false;
            state.error = payload
        })
        builder.addCase(loginAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = true;
            state.message = payload.message
        })
        builder.addCase(loginAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = state.isAuthenticate;
            state.error = payload
        })
        builder.addCase(getUserAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(getUserAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = true;
            state.user = payload.doc;
            state.message = payload.message

        })
        builder.addCase(getUserAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticate = state.isAuthenticate;
            state.error = payload
        })
    }
})
export const { clearAllErrors, logout } = userSlice.actions;
export default userSlice.reducer;