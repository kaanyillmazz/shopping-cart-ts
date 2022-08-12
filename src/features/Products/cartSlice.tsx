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
    console.log("set cookies"+document.cookie);
}

export function getProductFromID(ProductsArray: Product[], id: number) {
    if(ProductsArray.length > 2) {
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
                let id = item.payload.id;
                let title = item.payload.title;
                let price = item.payload.price;
                let description = item.payload.description;
                let category = item.payload.category;
                let image = item.payload.image;
                let count = (item.payload.count);
                let rating = item.payload.rating;
                let productToSearch = new Product(id, title, price, description, category, image, count, rating);
                //if it's not in the cart just send it to cart
                if (myIndexOf(state.myCart, productToSearch) === -1) {
                    let productToSend = new Product(id, title, price, description, category, image, count, rating);
                    state.myCart.push(productToSend);

                } else {
                    //if it's in the cart increase the count and overwrite it
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
                //increase count and overwrite the item
                let myTitle = titleTemp.payload;
                let myIndex = myIndexOfTitle(state.myCart, myTitle.toString());
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
                //decrease the count and overwrite the item
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