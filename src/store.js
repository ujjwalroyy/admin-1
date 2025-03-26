
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/features/counterSlice";
import userSlice from "./components/features/userSlice";
import authSlice from "./components/features/authSlice";
import apiSlice from "./components/features/apiSlice";
import productSlice from "./components/features/productSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        users: userSlice,
        auth: authSlice,
        api: apiSlice,
        products: productSlice
    }
})

export default store


