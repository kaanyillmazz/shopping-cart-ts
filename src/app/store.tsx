import {configureStore} from '@reduxjs/toolkit'
import sizeSlice from "../features/Products/sizeSlice";
import productsSlice from "../features/Products/productsSlice";


export const store = configureStore({
    reducer: {
        size: sizeSlice,
        products: productsSlice
    },
})