import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import animeReducer from "./anime/animSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        anime: animeReducer
    }
})