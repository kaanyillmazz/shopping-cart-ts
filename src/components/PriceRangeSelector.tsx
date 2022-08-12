import React from 'react';
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {setPriceRange} from "../features/Products/filterSlice";
import {filterProducts, Product, sortProducts} from "../features/Products/productsSlice";
import {Grid} from "@mui/material";


function PriceRangeSelector() {
    const dispatch = useDispatch();
    const priceRange = useSelector((state: any) => state.filter.priceRange);
    const category = useSelector((state: any) => state.filter.category);
    const sorting = useSelector((state: any) => state.sorting.sorting);


    function valuetext() {
        return `${priceRange}`;
    }

    //set price range on change so that buttons are usable
    const handleChange = (event: any, newValue: any) => {
        dispatch(setPriceRange(newValue));
    };

    //when a button is released, dispatch filter function
    const handleChangeCommitted = () => {
        if (category === "all") {
            //if category is all, only send price range
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1]);
            }))
        } else {
            //if there is a category set, send the category to filter as well
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1] && item.category === category);
            }))
        }
        handleSorting();
    };

    //sorting needs to be handled after filtering is done
    const handleSorting = () => {
        let value0 = sorting;
        if (value0 === "MostPrice") {
            //sort from the most price
            dispatch(sortProducts((function (a: any, b: any) {
                return b.price - a.price
            })));
        } else if (value0 === "LeastPrice") {
            console.log("least")
            //sort from the least price
            dispatch(sortProducts((function (a: any, b: any) {
                return a.price - b.price
            })));
        }
    };

    //return the price range component
    return (
        <Grid container display="flex" justifyContent="center">
            <h2 style={{padding: 0, marginTop: 25, marginBottom: 0, color: "orangered"}}>Price Range</h2>
            <Slider sx={{marginLeft: 5, marginRight: 5, marginTop: 0, marginBottom: 0}}
                    min={0} max={1000}
                    size="small"
                    color="secondary"
                    getAriaLabel={() => 'Price range'}
                    value={priceRange}
                    onChange={handleChange}
                    onChangeCommitted={handleChangeCommitted}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
            />
        </Grid>
    );
}

export default PriceRangeSelector
