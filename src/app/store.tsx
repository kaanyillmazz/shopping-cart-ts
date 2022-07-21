import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "../features/Products/filterSlice";
import productsSlice from "../features/Products/productsSlice";
import sortingSlice from "../features/Products/sortingSlice";
import drawerSlice from "../features/Products/drawerSlice";
import cartSlice from "../features/Products/cartSlice";




export const store = configureStore({
    reducer: {
        filter: filterSlice,
        products: productsSlice,
        sorting: sortingSlice,
        drawer: drawerSlice,
        cart: cartSlice
    },
})