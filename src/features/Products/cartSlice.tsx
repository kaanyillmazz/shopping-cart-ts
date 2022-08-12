import {createSlice} from '@reduxjs/toolkit'
import {Product} from "./productsSlice";

export class CardModel {
    myCart: Product[] = [];
}

const initialState: CardModel = {
    myCart: []
}

//in this component I wrote my own index of functions because js can not compare two objects correctly

//get index of an item
export function myIndexOf(myCart: Product[], item: Product) {
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].id === item.id) {
            return i;
        }
    }
    return -1;
}

export function createCookies(myCart: Product[]) {
    let idString = "";
    let countString = "";
    for (let i = 0; i < myCart.length; i++) {
        idString = idString + " " + myCart[i].id.toString();
        countString = countString + " " + myCart[i].count.toString();
    }
    let cookieString = "IDs = " + idString;
    let cookieString1 = "counts = " + countString;
    document.cookie = cookieString;
    document.cookie = cookieString1;
    console.log("set cookies" + document.cookie);
}

export function getProductFromID(ProductsArray: Product[], id: number) {
    if (ProductsArray.length > 2) {
        for (let i = 0; i < ProductsArray.length; i++) {
            if (ProductsArray[i].id === id) {
                console.log("yes")
                return ProductsArray[i];
            }
        }
    }
    return;
}

//get total expenses
export function getTotal(myCart: Product[]) {
    let total = 0;
    for (let i = 0; i < myCart.length; i++) {
        total = total + myCart[i].count * myCart[i].price;
    }
    return total.toFixed(2);
}

//get an items count
export function getCount(myCart: Product[], item: Product) {
    return myCart[myIndexOf(myCart, item)].count;
}

//get index of an item searching by title
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
                //I am creating a new object because it won't let me change an attribute value directly
                let no = item.payload;  //nEW-oBJECT
                let productToSearch = new Product(no.id, no.title, no.price, no.description, no.category, no.image, no.count, no.rating);
                //if it's not in the cart just send it to cart
                if (myIndexOf(state.myCart, productToSearch) === -1) {
                    let productToSend = new Product(no.id, no.title, no.price, no.description, no.category, no.image, no.count, no.rating);
                    state.myCart.push(productToSend);
                } else {
                    //if it's in the cart increase the count and overwrite it
                    let myIndex = myIndexOf(state.myCart, item.payload)
                    let newCount = state.myCart[myIndex].count + 1;
                    state.myCart[myIndex] = new Product(no.id, no.title, no.price, no.description, no.category, no.image, newCount, no.rating);
                }
            },
            deleteItem: (state, index) => {
                state.myCart.splice(index.payload, 1);
            }, emptyItems: (state) => {
                state.myCart = [];
            }, increaseCount: (state, itemTitle) => {
                //increase count and overwrite the item
                let myIndex = myIndexOfTitle(state.myCart, itemTitle.payload.toString());
                let no = state.myCart[myIndex];
                let newCount = (no.count) + 1;
                state.myCart[myIndex] = new Product(no.id, no.title, no.price, no.description, no.category, no.image, newCount, no.rating);
            }, decreaseCount: (state, itemTitle) => {
                //decrease the count and overwrite the item
                let myIndex = myIndexOfTitle(state.myCart, itemTitle.payload.toString());
                let no = state.myCart[myIndex];
                let newCount = (no.count) - 1;
                let productToSend = new Product(no.id, no.title, no.price, no.description, no.category, no.image, newCount, no.rating);
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
