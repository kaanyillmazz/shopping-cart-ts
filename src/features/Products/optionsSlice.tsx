import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    open: false
}

export const optionsSlice = createSlice({
    name: 'options', initialState, reducers: {
        setOpen: (state, open) => {
            state.open = open.payload;
        },
    },
})

export const {setOpen} = optionsSlice.actions;

export default optionsSlice.reducer