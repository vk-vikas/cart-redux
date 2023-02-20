import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalQuantity: 0

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action) {
            state.totalQuantity++;
            const newItem = action.payload;
            const exisitingItem = state.items.find(i => i.id===newItem.id);
            if(exisitingItem){
                // if item was there just increase quantity
                exisitingItem.quantity++;
                exisitingItem.totalPrice += exisitingItem.price;
            }else {
                // a new item is being added
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price
                })
            }

        },
        removeItem(state,action) {
            state.totalQuantity--;
            const newId = action.payload;
            const exisitingItem = state.items.find(i => i.id=newId);
            if(exisitingItem.quantity===1){
                // last item ,must be removed
                state.items = state.items.filter(i => i.id!==newId);
            }else{
                // just reduce the quantity
                exisitingItem.quantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;