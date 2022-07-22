import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    open: false
}

export const dialogSlice = createSlice({
    name: 'dialog', initialState, reducers: {
        setOpen: (state, open) => {
            state.open = open.payload;
        },
    },
})

export const {setOpen} = dialogSlice.actions;

export default dialogSlice.reducer