import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoad: false,
    cartItem: [],
    error: false,
    localStorageItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addTCart: (state, action) => {
            console.log("Action ", action.payload);
            state.cartItem.push(action.payload)
            console.log("state ", state.cartItem.length)
            localStorage.setItem("list", JSON.stringify(state.cartItem));
            console.log("state ", state.localStorageItems)
        },
        getCartItem: (state, action) => {
            state.localStorageItems = JSON.parse(localStorage.getItem("list"));
        },
        removeTCart: (state, action) => {
            const ind = state.cartItem.findIndex((item) => item.id === action.payload.id)
            let newCart = [...state.cartItem]
            if(ind >= 0){
                newCart.splice(ind, 1);
            }
            else{
                console.warn('Cant remove item from cart')
            }
            state.cartItem = newCart
        }
    },
    
})

export const {addTCart, getCartItem, removeTCart} = cartSlice.actions
export default cartSlice.reducer