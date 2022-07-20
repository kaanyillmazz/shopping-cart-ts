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
import {setSorting} from "./features/Products/sortingSlice";

const baseURL = "https://fakestoreapi.com/products";

function App() {
    const dispatch = useDispatch();
    const sorting = useSelector((state: any) => state.sorting.sorting);

    axios.get(`${baseURL}`).then((response) => {
        dispatch(setProducts(response.data));
        handleSorting();
    });


    axios.get(`${baseURL}`).then((response) => {
        dispatch(setDefaultProducts(response.data))
    });

    const handleSorting = () => {
        let value0 = sorting;
        if (value0 === "MostPrice") {
            //sort from the most points
            dispatch(sortProducts((function (a: any, b: any) { return b.price - a.price })));
        } else if (value0 === "LeastPrice") {
            console.log("least")
            //sort from the least points
            dispatch(sortProducts((function (a: any, b: any) { return a.price - b.price })));
        }
        dispatch(setSorting(value0));
    };


    return (
        <Grid container display="flex" className="App" padding={10}>
            <Grid container item xs={2} display="flex">
                <Grid item>
                    <CategorySelection/>
                    <SortingComponent/>
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
