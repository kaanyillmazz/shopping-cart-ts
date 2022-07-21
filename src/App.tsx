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
        <Grid container display="flex" className="App" padding={10}>
            <Grid container item xs={2} display="flex">
                <Grid item>
                    <CategorySelection/>
                    <SortingComponent/>
                    <PriceRangeSelector/>
                </Grid>
            </Grid>
            <Grid container item xs={10} display="flex">
                <ProductList/>
            </Grid>
            <CartFab/>
        </Grid>
    );
}

export default App;
