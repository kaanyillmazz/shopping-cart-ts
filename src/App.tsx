import React from 'react';
import './App.css';
import {Grid} from "@mui/material";
import ProductList from "./components/ProductList";
import CartFab from "./components/CartFab";
import {useDispatch} from "react-redux";
import {setProducts, setDefaultProducts, Product} from "./features/Products/productsSlice";
import axios from "axios";
import CheckoutScreen from "./components/CheckoutScreen";
import OptionsFab from "./components/OptionsFab";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import PersistentDrawerRight from "./components/PersistentDrawerRight";
import {addItem, getProductFromID} from "./features/Products/cartSlice";

const baseURL = "https://fakestoreapi.com/products";

//workaround for getting cookies everytime main page renders
let firstRender = true;

function App() {
    const dispatch = useDispatch();
    let axios1 = require('axios')

    function delay() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(42);
            }, 200);
        });
    }

    async function getAllBooks() {
        try {
            let products = await axios.get(`${baseURL}`)
            await delay();
            return products;
        } catch (error) {
            return null;
        }
    }

    const countSetter = (data: any) => {
        for (let i = 0; i < data.length; i++) {
            data[i].count = 1;
        }
        dispatch(setProducts(data));
        dispatch(setDefaultProducts(data));
    }

    function getCookies(products: Product[]) {
        if (document.cookie && firstRender) {
            let cookieArray = document.cookie.split(';');
            console.log("getting cookies" + cookieArray);
            let IDs = cookieArray[0].split("=")[1].split(" ");
            let counts = cookieArray[1].split("=")[1].split(" ");
            let product;
            for (let i = 0; i < IDs.length; i++) {
                product = getProductFromID(products, parseInt(IDs[i]));
                for (let a = 0; a < parseInt(counts[i]); a++) {
                    dispatch(addItem(product));
                }
            }
        }
        firstRender = false;
    }

    (async function () {
        let products = await getAllBooks();
        countSetter(products?.data);
        getCookies(products?.data);
    })();

    return (
        <Grid container className="App">
            <Grid container item md={2} xs={12} display="flex" justifyContent="center">
                <CheckoutScreen/>
            </Grid>
            <Grid container item md={12} xs={12} display="flex">
                <ProductList/>
            </Grid>
            <OptionsFab/>
            <CartFab/>
            <PersistentDrawerLeft/>
            <PersistentDrawerRight/>
            <div className="wave wave1"></div>
            <div className="wave wave4"></div>
        </Grid>
    );
}

export default App;
