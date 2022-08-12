import React from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import "./ProductList.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

function ProductList() {
    const products = useSelector((state: any) => state.products.productsArray);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    let productCount: number = products.length;

    let myLabel;
    if (matches) {
        myLabel = <h1 className="foundLabelMD">{productCount} products found.</h1>;
    } else {
        myLabel = <h1 className="foundLabelSM">{productCount} products found.</h1>
    }

    //get all the products and put them in a container
    return (
        <Grid container className="Main">
            {myLabel}
            <ProductItem/>
        </Grid>
    );
}

export default ProductList;
