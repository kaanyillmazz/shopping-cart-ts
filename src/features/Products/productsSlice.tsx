import {createSlice} from '@reduxjs/toolkit'

export class Rating {
    constructor(props: any) {
        this.rate = props.rate;
        this.count = props.count;
    }
    rate: number = 1;
    count: number = 1;
}

export class Product {
    constructor(id: any, title: any, price: any, description: any, category: any, image: any, count: any, rating: any) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.count = count;
        this.rating = rating;
    }
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    count: number;
    rating: Rating;
}


const initialState = {
    productsArray: [],
    defaultArray: []
}

export const productsSlice = createSlice({
    name: 'products', initialState, reducers: {
        setProducts: (state, products) => {
            state.productsArray = products.payload;
        },
        setDefaultProducts: (state, products) => {
            state.defaultArray = products.payload;
        },
        filterProducts: (state, func) => {
            state.productsArray = state.defaultArray.filter(func.payload);
            console.log(state.productsArray);
        },
        resetProducts: (state) => {
            state.productsArray = state.defaultArray.slice(0);
            console.log(state.productsArray);
        },
        sortProducts: (state, func) => {
            state.productsArray.sort(func.payload);
        },
    },
})

export const {setProducts, filterProducts, resetProducts, setDefaultProducts, sortProducts} = productsSlice.actions;

export default productsSlice.reducer