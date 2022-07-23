import {createSlice} from '@reduxjs/toolkit'
import {Product} from "./productsSlice";

export class CardModel {
    myCart: Product[] = [];
}

const initialState: CardModel = {
    myCart: []
}

export function myIndexOf(myCart: Product[], item: Product) {
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].id === item.id) {
            return i;
        }
    }
    return -1;
}


export function getTotal(myCart: Product[]) {
    let total = 0;
    for (let i = 0; i < myCart.length; i++) {
      total = total + myCart[i].count * myCart[i].price;
    }
    return total.toFixed(2);
}

export function getCount(myCart: Product[], item: Product) {
    return myCart[myIndexOf(myCart,item)].count;
}

function myIndexOfTitle(myCart: Product[], title: string) {
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].title.toString().localeCompare(title) === 0) {
            return i;
        }
    }
    return -1;
}

export const cartSlice = createSlice(
    {
        name: 'cart', initialState, reducers: {
            addItem: (state, item) => {

                let id = item.payload.id;
                let title = item.payload.title;
                let price = item.payload.price;
                let description = item.payload.description;
                let category = item.payload.category;
                let image = item.payload.image;
                let count = (item.payload.count);
                let rating = item.payload.rating;
                let productToSearch = new Product(id, title, price, description, category, image, count, rating);
                if (myIndexOf(state.myCart, productToSearch) === -1) {
                    let productToSend = new Product(id, title, price, description, category, image, count, rating);
                    state.myCart.push(productToSend);
                } else {
                    let myIndex = myIndexOf(state.myCart, item.payload)
                    let countToIncrease = state.myCart[myIndex].count;
                    countToIncrease = countToIncrease + 1;
                    let productToSend = new Product(id, title, price, description, category, image, countToIncrease, rating)
                    state.myCart[myIndex] = productToSend;
                }
            },
            deleteItem: (state, index) => {
                state.myCart.splice(index.payload, 1);
            }, emptyItems: (state) => {
                state.myCart = [];
            }, increaseCount: (state, titleTemp) => {
                let myTitle = titleTemp.payload;
                console.log(myTitle);
                console.log(state.myCart[0].title);
                let myIndex = myIndexOfTitle(state.myCart, myTitle.toString());
                console.log(myIndex);
                let myItem = state.myCart[myIndex];
                let id = myItem.id;
                let title = myItem.title;
                let price = myItem.price;
                let description = myItem.description;
                let category = myItem.category;
                let image = myItem.image;
                let count = (myItem.count) + 1;
                let rating = myItem.rating;
                let productToSend = new Product(id, title, price, description, category, image, count, rating);
                state.myCart[myIndex] = productToSend;
            }, decreaseCount: (state, titleTemp) => {
                let myTitle = titleTemp.payload;
                let myIndex = myIndexOfTitle(state.myCart, myTitle);
                let myItem = state.myCart[myIndex];
                let id = myItem.id;
                let title = myItem.title;
                let price = myItem.price;
                let description = myItem.description;
                let category = myItem.category;
                let image = myItem.image;
                let count = (myItem.count) - 1;
                let rating = myItem.rating;
                let productToSend = new Product(id, title, price, description, category, image, count, rating);
                if (state.myCart[myIndex].count === 1) {
                    state.myCart.splice(myIndex, 1);
                } else {
                    state.myCart[myIndex] = productToSend;
                }
            },
        },
    })

export const {addItem, deleteItem, emptyItems, increaseCount, decreaseCount} = cartSlice.actions;

export default cartSlice.reducer;