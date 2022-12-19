import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    productsList: [],
  },
  reducers: {},
  extraReducers: {
    ["cart/GetProducts/fulfilled"]: (state, { payload: { data, status } }) => {
      if (status === 200) {
        state.productsList = data;
      }
    },
  },
});

export const {} = CartSlice.actions;

export default CartSlice.reducer;
