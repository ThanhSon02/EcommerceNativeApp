import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

export const login = createAsyncThunk(
    "auth/login",
    async ({ loginInfo, navigation }) => {
        try {
            const res = await axiosInstance.post("/auth/login", loginInfo);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Sign in succesfull",
            });
            navigation.navigate("Main");
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ registerInfo, navigation }) => {
        try {
            const res = await axiosInstance.post(
                "/auth/register",
                registerInfo
            );
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Sign up succesfull",
                textBody: "Sign in now",
            });
            navigation.navigate("Main");
            navigation.navigate("Login");
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async ({ accessToken, navigation }) => {
        try {
            await axiosInstance.post(
                "/auth/logout",
                {},
                {
                    headers: {
                        token: `Bearer ${accessToken}`,
                    },
                }
            );
            navigation.navigate("Login");
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ({ userInfo, accessToken }) => {
        try {
            const res = await axiosInstance.put(
                "/user/update_info/",
                userInfo,
                {
                    headers: {
                        token: `Bearer ${accessToken}`,
                    },
                }
            );
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: res.data.message,
            });
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);
