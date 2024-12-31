import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload); 
        },
    }
})

export const { addProduct, updatecart } = shopSlice.actions;
export default shopSlice.reducer