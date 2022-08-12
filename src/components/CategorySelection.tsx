import React from 'react'
import {Grid, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts, Product, sortProducts} from "../features/Products/productsSlice";
import {setCategory} from "../features/Products/filterSlice";

//this component is to change category
function CategorySelection() {
    const dispatch = useDispatch();
    const priceRange = useSelector((state: any) => state.filter.priceRange);
    const category = useSelector((state: any) => state.filter.category);
    const sorting = useSelector((state: any) => state.sorting.sorting);

    //change the category state but use the local value first so that state has some time to change
    const handleChange = (e: any) => {
        let newAlignment = e.target.value;
        dispatch(setCategory(newAlignment));
        let ToFilter = e.target.value.toLowerCase();
        if (ToFilter === "all") {
            //filter according to price range only
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1])
            }));
        } else {
            //filter according to both price range and category
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1] && item.category === ToFilter)
            }));
        }
        handleSorting();
    };

    //sorting needs to be handled separately after category is set
    const handleSorting = () => {
        let value0 = sorting;
        if (value0 === "MostPrice") {
            //sort from the most points
            dispatch(sortProducts((function (a: any, b: any) {
                return b.price - a.price
            })));
        } else if (value0 === "LeastPrice") {
            console.log("least")
            //sort from the least points
            dispatch(sortProducts((function (a: any, b: any) {
                return a.price - b.price
            })));
        }
    };
    return (
        <Grid container display="flex" justifyContent="center">
            <Grid item display="flex" justifyContent="center">
                <h1> Categories</h1>
            </Grid>
            <Grid container item display="flex" justifyContent="center">
                <ToggleButtonGroup
                    orientation="vertical"
                    size="medium"
                    color="warning"
                    value={category}
                    exclusive
                    onChange={handleChange}>
                    <ToggleButton value="all">all</ToggleButton>
                    <ToggleButton value="women's clothing">women's clothing</ToggleButton>
                    <ToggleButton value="men's clothing">men's clothing</ToggleButton>
                    <ToggleButton value="jewelery">jewelery</ToggleButton>
                    <ToggleButton value="electronics">electronics</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}

export default CategorySelection;
