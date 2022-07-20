import {createSlice} from '@reduxjs/toolkit'

type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";

const initialState = {
    category: "",
    size: ""

}
export const filterSlice = createSlice({
name: 'filter', initialState, reducers: {
        setCategory: (state,category) => {
            state.category= category.payload;
        },setSize: (state,size) => {
            state.size= size.payload;
        },
    },
})

export const {setCategory, setSize} = filterSlice.actions;

export default filterSlice.reducer