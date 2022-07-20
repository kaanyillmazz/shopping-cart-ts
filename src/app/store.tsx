import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "../features/Products/filterSlice";
import productsSlice from "../features/Products/productsSlice";
import sortingSlice from "../features/Products/sortingSlice";



export const store = configureStore({
    reducer: {
        size: filterSlice,
        category: filterSlice,
        products: productsSlice,
        sorting: sortingSlice
    },
})