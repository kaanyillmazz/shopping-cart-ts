import {createSlice} from '@reduxjs/toolkit'

type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";

const initialState = {
    category: "all",
    size: "",
    priceRange: [0,1000]
}
export const filterSlice = createSlice({
name: 'filter', initialState, reducers: {
        setCategory: (state,category) => {
            state.category= category.payload;
        },setSize: (state,size) => {
            state.size= size.payload;
        },setPriceRange: (state, priceRange) =>{
            state.priceRange = priceRange.payload;
        },
    },
})

export const {setCategory, setSize, setPriceRange} = filterSlice.actions;

export default filterSlice.reducer