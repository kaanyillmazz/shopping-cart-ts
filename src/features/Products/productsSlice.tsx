import {createSlice} from '@reduxjs/toolkit'
type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";
interface product {
    name: string;
    price: number;
    size: size;
    id: number;
}
const product1: product = {name: "crop top", price: 59, size: "XL", id: 0};
const product2: product = {name: "tshirt", price: 110, size: "S", id: 1};
const product3: product = {name: "jean", price: 250, size: "M", id: 2};
const product4: product = {name: "Red Jacket", price: 450, size: "M", id: 3};

const initialState = {
    productsArray: [product1, product2, product3, product4]

}
export const productsSlice = createSlice({
name: 'products', initialState, reducers: {
        setProducts: (state,products) => {
            state.productsArray = products.payload;
        },
    },
})

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer