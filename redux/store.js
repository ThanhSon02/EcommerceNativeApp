import {
    combineReducers,
    configureStore,
    createStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export let persistor = persistStore(store);
