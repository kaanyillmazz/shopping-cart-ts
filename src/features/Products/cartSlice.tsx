import {createSlice} from '@reduxjs/toolkit'
import {Product} from "./productsSlice";

export class CardModel {
    myCart:Product[]=[];
}

const initialState:CardModel = {
    myCart: []
}

export const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        addItem: (state, item) => {
            state.myCart.push(item.payload);
        },
        deleteItem: (state, index) => {
            state.myCart.splice(index.payload,1);
        }, emptyItems: (state) => {
            state.myCart = [];
        },
    },
})

export const {addItem, deleteItem, emptyItems} = cartSlice.actions;

export default cartSlice.reducer;