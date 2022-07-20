import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    size: "Medium"

}
export const sizeSlice = createSlice({
name: 'size', initialState, reducers: {
        setSize: (state,size) => {
            state.size = size.payload;
        },
    },
})

export const {setSize} = sizeSlice.actions;

export default sizeSlice.reducer