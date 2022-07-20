import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    sizeValue: "Medium"

}
export const sizeSlice = createSlice({
name: 'size', initialState, reducers: {
        setSize: (state,size) => {
            state.sizeValue = size.payload;
        },
    },
})

export const {setSize} = sizeSlice.actions;

export default sizeSlice.reducer