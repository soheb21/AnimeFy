import axios from "axios";
import { createSlice } from "@reduxjs/toolkit"

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
        loginRequest(state, action) {
            state.loading = true,
                state.user = {},
                state.isAuthenticate = false,
                state.error = null
        },
        loginSuccess(state, { payload }) {
            state.loading = false;
            state.message = payload.message;
            state.isAuthenticate = true;
            state.error = null;
        },
        loginFailed(state, { payload }) {
            state.loading = false;
            state.user = {};
            state.error = payload.message;
            state.isAuthenticate = false;
        },
        registerRequest(state, action) {
            state.loading = true,
                state.user = {},
                state.isAuthenticate = false,
                state.error = null
        },
        registerSuccess(state, action) {
            state.loading = false;
            state.message = action.payload.message;
            state.isAuthenticate = true;
            state.error = null;
        },
        registerFailed(state, { payload }) {
            state.loading = false;
            state.user = {};
            state.error = payload.message;
            state.isAuthenticate = false;
        },
        userRequest(state, action) {
            state.loading = true,
                state.user = {},
                state.isAuthenticate = false,
                state.error = null
        },
        userSuccess(state, { payload }) {
            state.loading = false;
            state.user = payload.doc;
            state.isAuthenticate = true;
            state.error = null;
        },
        userFailed(state, { payload }) {
            state.loading = false;
            state.user = {};
            state.error = payload.message;
            state.isAuthenticate = false;
        },
        logoutSuccess(state, { payload }) {
            state.loading = false;
            state.user = {};
            state.isAuthenticate = false;
            state.error = null;
            state.message = payload.message

        },
        logoutFailed(state, { payload }) {
            state.loading = false;
            state.user = state.user;
            state.isAuthenticate = state.isAuthenticate;
            state.error = payload.message;

        },
        clearAllErrors(state, action) {
            state.error = null;
            state.user = state.user;
        }
    }
})
export const clearAllErrorsFun = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors())

}
export const login = (formData) => async (dispatch) => {
    dispatch(userSlice.actions.loginRequest())
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/user/login", formData)
        dispatch(userSlice.actions.loginSuccess(data.doc))
        dispatch(userSlice.actions.clearAllErrors())

    } catch (e) {
        dispatch(userSlice.actions.loginFailed(e.response.data.message))

    }

}
export const register = (formData) => async (dispatch) => {
    dispatch(userSlice.actions.registerRequest());
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/user/register", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        dispatch(userSlice.actions.registerSuccess(data));
        dispatch(userSlice.actions.clearAllErrors());

    } catch (e) {
        dispatch(userSlice.actions.registerFailed(e.response.data.message))
    }
}

export const getUser = () => async (dispatch) => {
    dispatch(userSlice.actions.userRequest());
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/getuser")
        dispatch(userSlice.actions.userSuccess(data));
        dispatch(userSlice.actions.clearAllErrors());

    } catch (e) {
        dispatch(userSlice.actions.userFailed(e.response.data.message))
    }
}
export const logout = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/logout")
        dispatch(userSlice.actions.loginSuccess(data))
        dispatch(userSlice.actions.clearAllErrors())

    } catch (e) {
        dispatch(userSlice.actions.logoutFailed(e.response.data.message))

    }
}
export default userSlice.reducer;