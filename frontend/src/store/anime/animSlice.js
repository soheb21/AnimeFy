import { createSlice } from "@reduxjs/toolkit"
import { addFavAsync, getAllAnimesAsync, getAnimeDetailAsync, getFavAsync, removeFavByUserAsync } from "./animeAPI";
import { addAnimeAsync, deleteAnimeAsync, deleteUserAsync, getAllUserAsync, updateAnimeAsync } from "./adminAPI";

const initialState = {
    loading: false,
    anime: [],
    animeDetail: {},
    favs: [],
    allUser: [],
    message: null,
    error: null,
    isEdit: false
}
const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {
        clearAllErrors(state) {
            state.error = null;
            state.anime = state.anime;
            state.favs = state.favs;
            state.animeDetail = state.animeDetail;
            state.loading = false;
            state.message = null;
        },
        checkIsEdit(state) {
            state.isEdit = !state.isEdit;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllAnimesAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(getAllAnimesAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.anime = payload.doc;
            state.message = payload.message
        })
        builder.addCase(getAllAnimesAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(getAnimeDetailAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(getAnimeDetailAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.animeDetail = payload.doc;
            state.message = payload.message

        })
        builder.addCase(getAnimeDetailAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(addFavAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(addFavAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
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

            state.favs = payload.doc;
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
            state.message = payload.message;
            let newList = state.favs.filter((i) => i._id !== payload.id);
            state.favs = newList;
        })
        builder.addCase(removeFavByUserAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(addAnimeAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(addAnimeAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.message = payload.message

        })
        builder.addCase(addAnimeAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(updateAnimeAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(updateAnimeAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;
            let index = state.anime.findIndex((i) => i._id === payload.doc._id);
            state.anime[index] = payload.doc;
        })
        builder.addCase(updateAnimeAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(deleteAnimeAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteAnimeAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;
            let newList = state.anime.filter((i) => i._id !== payload.id);
            state.anime = newList;
        })
        builder.addCase(deleteAnimeAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(getAllUserAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(getAllUserAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;
            state.allUser = payload.doc;
        })
        builder.addCase(getAllUserAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        builder.addCase(deleteUserAsync.pending, (state, { payload }) => {
            state.loading = true;
        })
        builder.addCase(deleteUserAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;
            let newList = state.allUser.filter((i) => i._id !== payload.id);
            state.allUser = newList;
        })
        builder.addCase(deleteUserAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
    }
})
export const { clearAllErrors, checkIsEdit } = animeSlice.actions;
export default animeSlice.reducer;