import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const exisitingItem = state.items.find((i) => i.id === newItem.id);
      if (exisitingItem) {
        console.log("a");
        // if item was there just increase quantity
        exisitingItem.quantity++;
      } else {
        // a new item is being added
        console.log("b");
        state.items.push({
          key: newItem.id,
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      state.totalQuantity--;
      const newId = action.payload;
      const exisitingItem = state.items.find((i) => (i.id === newId));
      if (exisitingItem.quantity === 1) {
        // last item ,must be removed
        console.log("quant 1 triggered");
        state.items = state.items.filter((i) => i.id !== newId);
      } else {
        // just reduce the quantity
        exisitingItem.quantity--;
        console.log("quant >1");
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
