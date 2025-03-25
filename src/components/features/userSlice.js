import {  createSlice } from "@reduxjs/toolkit"


const initialState = {
    username: '',
    email: '',
    age: '',
    password: '',
    gender: '',
    subject: [],
    stream: ''
}



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            // state.users = action.payload
            console.log("=====",state.users);
            state.username = action.payload.username
            state.email = action.payload.email
            state.password = action.payload.password
            state.age = action.payload.age
            state.gender = action.payload.gender
            state.subject = action.payload.subject
            state.stream = action.payload.stream
            const user = JSON.parse(localStorage.getItem('data')) || [];
            user.push(action.payload);
            localStorage.setItem('data', JSON.stringify(user));
        },
        updateUser: (state, action) => {
            state.username = action.payload.username
            console.log(action.payload);
            const user = JSON.parse(localStorage.getItem('data')) || [];
            const updatedData = [...user];
            console.log("updatedData[action.payload.index] ", updatedData[action.payload.index]);
            updatedData[action.payload.index] = action.payload
            localStorage.setItem("data", JSON.stringify(updatedData))
        },
    },
    

})


export const { saveUser, updateUser } = userSlice.actions
export default userSlice.reducer

