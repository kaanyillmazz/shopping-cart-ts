import React from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";

function ProductList(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);






    return (
       <Grid container display="flex">
           <Grid item xs={12}>
               <h1>X Products Found.</h1>
           </Grid>
           <Grid item xs={3}><ProductItem id={0}/></Grid>
           <Grid item xs={3}><ProductItem id={1}/></Grid>
           <Grid item xs={3}><ProductItem id={2}/></Grid>
           <Grid item xs={3}><ProductItem id={3}/></Grid>
       </Grid>

    );

}
export default ProductList;