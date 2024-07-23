import axios from "axios";
import { createSlice } from "@reduxjs/toolkit"
import { addFavAsync, getFavAsync, getUserAsync, loginAsync, registerAsync, removeFavByUserAsync } from "./userAPI";

const initialState = {
    loading: false,
    user: {},
    isAuthenticate: false,
    favs: [],
    message: null,
    error: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearAllUserErrors(state) {
            state.error = null;
            state.user = state.user;
            state.favs = state.favs;
            state.isAuthenticate = state.isAuthenticate
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
        builder.addCase(addFavAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(addFavAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.favs = payload?.result.favs
            state.message = payload.message


        })
        builder.addCase(addFavAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(getFavAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(getFavAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.favs = payload.doc.favs
            state.message = payload.message

        })
        builder.addCase(getFavAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(removeFavByUserAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(removeFavByUserAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            let newList = state.favs.filter((i) => i._id !== payload.id);
            state.favs = newList;
        })
        builder.addCase(removeFavByUserAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
    }
})
export const { clearAllUserErrors, logout } = userSlice.actions;
export default userSlice.reducer;