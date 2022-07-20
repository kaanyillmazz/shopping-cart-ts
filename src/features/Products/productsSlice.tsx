import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: []

}
export const productsSlice = createSlice({
name: 'products', initialState, reducers: {
        setProducts: (state,products) => {
            state.products = products.payload;
        },
    },
})

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer