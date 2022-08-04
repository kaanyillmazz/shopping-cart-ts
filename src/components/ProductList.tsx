import React from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import "./ProductList.css";

function ProductList(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);
    let productCount: number = products.length;


    //get all the products and put them in a container
    return (
        <Grid container className="Main">
                <h1>{productCount} products found.</h1>
                <ProductItem/>
        </Grid>

    );

}

export default ProductList;