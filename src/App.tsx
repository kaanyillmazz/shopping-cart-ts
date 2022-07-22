import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from "@mui/material";
import CategorySelection from "./components/CategorySelection";
import ProductList from "./components/ProductList";
import CartFab from "./components/CartFab";
import {useDispatch, useSelector} from "react-redux";
import productsSlice, {setProducts, setDefaultProducts, sortProducts} from "./features/Products/productsSlice";

import axios from "axios";
import SortingComponent from "./components/SortingComponent";
import PriceRangeSelector from "./components/PriceRangeSelector";
import PersistentDrawerRight from "./components/PersistentDrawerRight";

const baseURL = "https://fakestoreapi.com/products";

function App() {
    const dispatch = useDispatch();

    axios.get(`${baseURL}`).then((response) => {
        dispatch(setProducts(response.data));
    });


    axios.get(`${baseURL}`).then((response) => {
        dispatch(setDefaultProducts(response.data));
    });


    return (
        <Grid container className="App">
            <Grid container item md={2} xs={12} display="flex" justifyContent="center">
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
