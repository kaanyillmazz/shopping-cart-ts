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
    productsArray: [],
    defaultArray: []

}
export const productsSlice = createSlice({
name: 'products', initialState, reducers: {
        setProducts: (state,products) => {
            state.productsArray = products.payload;
        },
        setDefaultProducts: (state,products) => {
            state.defaultArray = products.payload;
        },
        filterProducts: (state,func) => {
            state.productsArray = state.productsArray.filter(func.payload);
            console.log(state.productsArray);
        },
        resetProducts: (state) => {
            state.productsArray = state.defaultArray.slice(0);
            console.log(state.productsArray);
        },
        sortProducts: (state,func) => {
            state.productsArray.sort(func.payload);
        },
    },
})

export const {setProducts, filterProducts, resetProducts, setDefaultProducts, sortProducts} = productsSlice.actions;

export default productsSlice.reducer