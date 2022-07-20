import React from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";

function ProductList(props: any) {
    return (
       <Grid container display="flex">
           <Grid item xs={12}>
               <h1>X Products Found.</h1>
           </Grid>
           <Grid item xs={3}>
               <ProductItem/>
           </Grid>
           <Grid item xs={3}><ProductItem/></Grid>
           <Grid item xs={3}><ProductItem/></Grid>
           <Grid item xs={3}><ProductItem/></Grid>
       </Grid>

    );

}
export default ProductList;