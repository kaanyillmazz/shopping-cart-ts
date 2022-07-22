import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    sorting: "MostPrice",
}

export const sortingSlice = createSlice({
    name: 'sorting', initialState, reducers: {
        setSorting: (state, sorting) => {
            state.sorting = sorting.payload;
        },
    },
})

export const {setSorting} = sortingSlice.actions;

export default sortingSlice.reducer