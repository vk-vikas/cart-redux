import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalQuantity: 99

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action) {},
        removeItem(state,action) {}
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;