import {createSlice} from '@reduxjs/toolkit'

    export interface Rating {
        rate: number;
        count: number;
    }

    export interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: Rating;
    }



const initialState = {
    productsArray: []

}
export const productsSlice = createSlice({
name: 'products', initialState, reducers: {
        setProducts: (state,products) => {
            state.productsArray = products.payload;
        },
        filterProducts: (state,size) => {
            let sizeToFilter = size.payload;
            //state.productsArray = state.productsArray.filter(function(item) { return item.size === sizeToFilter;});
            console.log(state.productsArray);
        },
        resetProducts: (state) => {
            state.productsArray = [];
            console.log(state.productsArray);
        },
    },
})

export const {setProducts, filterProducts, resetProducts} = productsSlice.actions;

export default productsSlice.reducer