import { createSlice } from "@reduxjs/toolkit";
import { login, logout, updateUser } from "../service/authService";

const initialState = {
    auth: { userInfo: null, accessToken: null },
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (build) => {
        build
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auth = action.payload;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.auth.userInfo = null;
                state.auth.accessToken = null;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auth = action.payload;
            });
    },
});

export default authSlice;
