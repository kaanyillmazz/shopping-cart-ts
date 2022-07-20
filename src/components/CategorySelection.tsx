import React from 'react'
import {Grid} from "@mui/material";
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import productsSlice, {
    filterProducts,
    resetProducts,
    setProducts,
    sortProducts
} from "../features/Products/productsSlice";
import {setCategory} from "../features/Products/filterSlice";
import {setSorting} from "../features/Products/sortingSlice";


function CategorySelection(props: any) {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.productsArray);
    const sorting = useSelector((state: any) => state.sorting.sorting);

    function handleClick(e: any) {
        e.preventDefault();
        let ToFilter = e.target.innerText.toLowerCase();
        console.log(ToFilter);
        dispatch(resetProducts());
        if(ToFilter === "ALL") {
            return;
        }
        dispatch(setCategory(ToFilter));
        dispatch(filterProducts(ToFilter));
        handleSorting();
        console.log(products);
    }

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


    return(
        <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} display="flex">
                <h1>  Categories</h1>
            </Grid>
            <Grid container item xs={12} display="flex">
                <Stack spacing={0.5}>
                    <Button value="women" sx={{backgroundColor: "orangered"}} onClick={handleClick} variant="contained">women's clothing</Button>
                    <Button value="men" sx={{backgroundColor: "orangered"}} onClick={handleClick} variant="contained">men's clothing</Button>
                    <Button value="jewelry" sx={{backgroundColor: "orangered"}} onClick={handleClick} variant="contained">jewelery</Button>
                    <Button value="electronics" sx={{backgroundColor: "orangered"}} onClick={handleClick} variant="contained">electronics</Button>
                </Stack>
            </Grid>
        </Grid>
    );
}
export default CategorySelection;