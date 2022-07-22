import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: "all",
    size: "",
    priceRange: [0, 1000]
}
export const filterSlice = createSlice({
    name: 'filter', initialState, reducers: {
        setCategory: (state, category) => {
            state.category = category.payload;
        }, setSize: (state, size) => {
            state.size = size.payload;
        }, setPriceRange: (state, priceRange) => {
            state.priceRange = priceRange.payload;
        },
    },
})

export const {setCategory, setSize, setPriceRange} = filterSlice.actions;

export default filterSlice.reducer