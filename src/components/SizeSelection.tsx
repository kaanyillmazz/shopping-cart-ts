import React from 'react'
import {Grid} from "@mui/material";
import Fab from '@mui/material/Fab';
import {useDispatch, useSelector} from "react-redux";
import productsSlice, {filterProducts, resetProducts, setProducts} from "../features/Products/productsSlice";
import sizeSlice, {setSize} from "../features/Products/sizeSlice";


type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";

function SizeSelection(props: any) {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.productsArray);
    const size = useSelector((state: any) => state.size.sizeValue);


    function handleClick(e: any) {
        e.preventDefault();
        let sizeToFilter = e.target.innerText;
        dispatch(resetProducts());
        if(sizeToFilter === "ALL") {
            return;
        }
        dispatch(setSize(sizeToFilter));
        dispatch(filterProducts(sizeToFilter));
        console.log(products);
    }

    return(
        <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} display="flex">
                <h1>sizes:</h1>
            </Grid>
            <Grid container item xs={12} display="flex">
                <Grid item xs={12} display="flex">
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">XS</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">S</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">M</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">ML</Fab>
                </Grid>
                <Grid item xs={12} display="flex">
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">L</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">XL</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">XXL</Fab>
                    <Fab onClick={handleClick} sx={{margin: 0.5}} size="small">ALL</Fab>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default SizeSelection;