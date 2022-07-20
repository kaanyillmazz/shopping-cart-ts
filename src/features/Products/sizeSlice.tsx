import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: ""

}
export const sizeSlice = createSlice({
name: 'size', initialState, reducers: {
        setSize: (state,size) => {
            state.category= size.payload;
        },
    },
})

export const {setSize} = sizeSlice.actions;

export default sizeSlice.reducer