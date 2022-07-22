import React from 'react';
import './App.css';
import {Grid} from "@mui/material";
import CategorySelection from "./components/CategorySelection";
import ProductList from "./components/ProductList";
import CartFab from "./components/CartFab";
import {useDispatch} from "react-redux";
import {setProducts, setDefaultProducts} from "./features/Products/productsSlice";

import axios from "axios";
import SortingComponent from "./components/SortingComponent";
import PriceRangeSelector from "./components/PriceRangeSelector";
import CheckoutScreen from "./components/CheckoutScreen";

const baseURL = "https://fakestoreapi.com/products";

function App() {
    const dispatch = useDispatch();

    const countSetter = (data: any) => {
        for (let i = 0; i < data.length; i++) {
            data[i].count = 1;
        }
        dispatch(setProducts(data));
        dispatch(setDefaultProducts(data));
    }

    async function getPost() {
        const response = await axios.get(`${baseURL}`);
        let data = response.data;
        countSetter(data);
    }

    getPost();

    return (
        <Grid container className="App">
            <Grid container item md={2} xs={12} display="flex" justifyContent="center">
                <CheckoutScreen/>
                <Grid item md={12} xs={12}>
                    <CategorySelection/>
                    <PriceRangeSelector/>
                    <SortingComponent/>
                </Grid>
            </Grid>
            <Grid container item md={10} xs={12} display="flex">
                <ProductList/>
            </Grid>
            <CartFab/>
        </Grid>
    );
}

export default App;
