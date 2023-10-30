import { createAsyncThunk } from "@reduxjs/toolkit";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import axiosInstance from "../axios/axios";

export const createOrder = createAsyncThunk(
    "order/create",
    async ({ orderInfo, accessToken }) => {
        try {
            const res = await axiosInstance.post("order/create", orderInfo, {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: res.data.message,
            });
            return res.data;
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: error.response.data.message,
            });
        }
    }
);
