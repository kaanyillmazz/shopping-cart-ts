import {createSlice} from '@reduxjs/toolkit'

type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";

const initialState = {
    category: "",
    size: "",
    maxPrice: 9999,
    minPrice: 0

}
export const filterSlice = createSlice({
name: 'filter', initialState, reducers: {
        setCategory: (state,category) => {
            state.category= category.payload;
        },setSize: (state,size) => {
            state.size= size.payload;
        },setMaxPrice: (state, maxPrice) =>{
            state.maxPrice = maxPrice.payload;
        },setMinPrice: (state, minPrice) => {
            state.minPrice = minPrice.payload;
        },
    },
})

export const {setCategory, setSize, setMinPrice, setMaxPrice} = filterSlice.actions;

export default filterSlice.reducer