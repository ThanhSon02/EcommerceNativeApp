import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
};

const cartSlice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find(
                (i) => item.product._id === i.product._id
            );
            if (findItem) {
                const newCart = {
                    ...state,
                    cartList: state.cartList.map((i) =>
                        i.product._id === item.product._id ? item : i
                    ),
                };

                return newCart;
            } else {
                const newCart = {
                    ...state,
                    cartList: [...state.cartList, item],
                };
                return newCart;
            }
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find(
                (i) => i.product._id === item.product._id
            );
            if (findItem) {
                const newList = state.cartList.filter(
                    (i) => i.product._id !== item.product._id
                );
                const newCart = {
                    ...state,
                    cartList: newList,
                };
                return newCart;
            }
        },

        clearCart: (state) => {
            state.cartList = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;
