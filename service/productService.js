import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../axios/axios";

export const getAllProduct = createAsyncThunk(
    "/product/getAllProduct",
    async () => {
        try {
            const res = await axiosIntance.get("/product/getAllProduct");
            return res.data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
);
