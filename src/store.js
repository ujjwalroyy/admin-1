
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/features/counterSlice";
import userSlice from "./components/features/userSlice";
import authSlice from "./components/features/authSlice";
import apiSlice from "./components/features/apiSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        users: userSlice,
        auth: authSlice,
        api: apiSlice,
    }
})

export default store


