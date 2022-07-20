import {createSlice} from '@reduxjs/toolkit'
type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";
interface product {
    name: string;
    price: number;
    size: size;
    id: number;
}
const product1: product = {name: "Malibu Crop Top", price: 59, size: "XL", id: 0};
const product2: product = {name: "High t-shirt", price: 110, size: "S", id: 1};
const product3: product = {name: "Hazy jeans", price: 250, size: "M", id: 2};
const product4: product = {name: "Red Jacket", price: 59, size: "ML", id: 3};
const product5: product = {name: "Green Jacket", price: 45, size: "XS", id: 4};
const product6: product = {name: "Red Dress", price: 30, size: "XXL", id: 5};
const product7: product = {name: "White Hat", price: 400, size: "XXL", id: 6};
const product8: product = {name: "Black Jacket", price: 1360, size: "XL", id: 7};
const product9: product = {name: "Orange Dress", price: 10, size: "M", id: 8};
const product10: product = {name: "Black Jeans", price: 25, size: "S", id: 9};
const product11: product = {name: "Yellow Jacket", price: 50, size: "XS", id: 10};
const product12: product = {name: "Black Hat", price: 100, size: "XS", id: 11};
const product13: product = {name: "Camo Jeans", price: 75, size: "L", id: 12};
const product14: product = {name: "Blue Jeans", price: 100, size: "M", id: 13};
const product15: product = {name: "Rainbow Jacket", price: 40, size: "L", id: 14};
const product16: product = {name: "Aqua T-Shir", price: 250, size: "M", id: 15};

const initialState = {
    productsArray: [product1, product2, product3, product4,
        product5,product6,product7,product8,product9,product10,
        product11,product12,product13,product14,product15,product16]

}
export const productsSlice = createSlice({
name: 'products', initialState, reducers: {
        setProducts: (state,products) => {
            state.productsArray = products.payload;
        },
        filterProducts: (state,size) => {
            let sizeToFilter = size.payload;
            state.productsArray = state.productsArray.filter(function(item) { return item.size === sizeToFilter;});
            console.log(state.productsArray);
        },
        resetProducts: (state) => {
            state.productsArray = [product1, product2, product3, product4,
                product5,product6,product7,product8,product9,product10,
                product11,product12,product13,product14,product15,product16];
            console.log(state.productsArray);
        },
    },
})

export const {setProducts, filterProducts, resetProducts} = productsSlice.actions;

export default productsSlice.reducer