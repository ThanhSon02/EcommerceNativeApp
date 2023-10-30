import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

export const getAllUser = createAsyncThunk(
    "user/getAllUser",
    async ({ accessToken }) => {
        try {
            const res = await axiosInstance.get("/user/getAllUser", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async ({ userID, accessToken }) => {
        try {
            const res = await axiosInstance.delete("/user/deleteUser", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
                data: {
                    userID,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);
