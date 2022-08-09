import React, {useEffect} from 'react'
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";
import "./ProductList.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {Product} from "../features/Products/productsSlice";
import {addItem, getProductFromID} from "../features/Products/cartSlice";


function ProductList(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);
    const dispatch = useDispatch();

    let productCount: number = products.length;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    let myLabel;

    if(matches) {
        myLabel = <h1 className="foundLabelMD" >{productCount} products found.</h1>;
    } else {
        myLabel =   <h1 className="foundLabelSM" >{productCount} products found.</h1>
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