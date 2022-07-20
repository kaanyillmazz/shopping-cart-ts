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
           <Grid item xs={3}><ProductItem id={0}/></Grid>
           <Grid item xs={3}><ProductItem id={1}/></Grid>
           <Grid item xs={3}><ProductItem id={2}/></Grid>
           <Grid item xs={3}><ProductItem id={3}/></Grid>
           <Grid item xs={3}><ProductItem id={4}/></Grid>
           <Grid item xs={3}><ProductItem id={5}/></Grid>
           <Grid item xs={3}><ProductItem id={6}/></Grid>
           <Grid item xs={3}><ProductItem id={7}/></Grid>
           <Grid item xs={3}><ProductItem id={8}/></Grid>
           <Grid item xs={3}><ProductItem id={9}/></Grid>
           <Grid item xs={3}><ProductItem id={10}/></Grid>
           <Grid item xs={3}><ProductItem id={11}/></Grid>

       </Grid>

    );

}
export default ProductList;