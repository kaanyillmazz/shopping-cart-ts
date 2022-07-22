import {createSlice} from '@reduxjs/toolkit'
import {Product} from "./productsSlice";

export class CardModel {
    myCart:Product[]=[];
}

const initialState:CardModel = {
    myCart: []
}

function myIndexOf(myCart: Product[], item: Product) {
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].id === item.id) {
            return i;
        }
    }
    return -1;
}

export const cartSlice = createSlice(


    {
    name: 'cart', initialState, reducers: {
        addItem: (state, item) => {

                let id= item.payload.id;
                let title= item.payload.title;
                let price = item.payload.price;
                let description = item.payload.description;
                let category = item.payload.category;
                let image = item.payload.image;
                let count = (item.payload.count);
                let rating = item.payload.rating;
                let productToSearch = new Product(id,title,price,description,category,image,count,rating);
                if(myIndexOf(state.myCart, productToSearch) === -1){
                    alert("alert");
                    let productToSend = new Product(id,title,price,description,category,image,count,rating);
                    state.myCart.push(productToSend);
                } else {
                    let myIndex = myIndexOf(state.myCart, item.payload)
                    console.log("myindex="+myIndex);
                   let countToIncrease = state.myCart[myIndex].count;
                   countToIncrease = countToIncrease+1;
                   let productToSend = new Product(id,title,price,description,category,image,countToIncrease,rating)
                    state.myCart[myIndex] = productToSend;
                }
        },
        deleteItem: (state, index) => {
            state.myCart.splice(index.payload,1);
        }, emptyItems: (state) => {
            state.myCart = [];
        },
    },
})

export const {addItem, deleteItem, emptyItems} = cartSlice.actions;

export default cartSlice.reducer;