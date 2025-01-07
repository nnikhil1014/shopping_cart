import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload); // Prevent duplicate items
      }
    },
  },
});

export const { addProduct } = shopSlice.actions;
export default shopSlice.reducer;