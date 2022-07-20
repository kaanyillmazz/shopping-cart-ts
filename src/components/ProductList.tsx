import React from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";

function ProductList(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);
    let productCount: number = products.length;


    return (
       <Grid container display="flex">
           <Grid item xs={12}>
               <h1>{productCount} products found.</h1>
           </Grid>
           <Grid item xs={12} display="flex">
               <ProductItem/>
           </Grid>
       </Grid>

    );

}
export default ProductList;