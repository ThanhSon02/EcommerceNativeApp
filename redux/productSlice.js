import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../service/productService";
const initialState = {
    allProduct: [],
    isLoading: false,
};
const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (build) => {
        build
            .addCase(getAllProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.allProduct = action.payload.allProduct;
                state.isLoading = false;
            });
    },
});

export default productSlice;
