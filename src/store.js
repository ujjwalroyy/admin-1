
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/features/counterSlice";
import userSlice from "./components/features/userSlice";
import authSlice from "./components/features/authSlice";
import apiSlice from "./components/features/apiSlice";
import productSlice from "./components/features/productSlice";
import commentSlice from "./components/features/commentSlice";
import companySlice from "./components/features/companySlice";
import cartSlice from "./components/features/cartSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        users: userSlice,
        auth: authSlice,
        api: apiSlice,
        products: productSlice,
        comments: commentSlice,
        company: companySlice,
        cart: cartSlice
    }
})

export default store


