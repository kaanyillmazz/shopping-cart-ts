import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from "@mui/material";
import SizeSelection from "./components/SizeSelection";
import ProductList from "./components/ProductList";
import CartFab from "./components/CartFab";
import {useDispatch, useSelector} from "react-redux";
import productsSlice, {setProducts} from "./features/Products/productsSlice";


function App() {
    const dispatch = useDispatch();




    return (
        <Grid container display="flex" className="App" padding={10}>
            <Grid container item xs={2} display="flex">
                <Grid item>
                    <SizeSelection/>
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
