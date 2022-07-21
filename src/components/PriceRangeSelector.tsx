import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setPriceRange} from "../features/Products/filterSlice";
import {filterProducts, Product, resetProducts, sortProducts} from "../features/Products/productsSlice";
import {Grid} from "@mui/material";
import {setSorting} from "../features/Products/sortingSlice";


function PriceRangeSelector(props: any) {
    const dispatch = useDispatch();
    const priceRange = useSelector((state: any) => state.filter.priceRange);
    const category = useSelector((state: any) => state.filter.category);
    const sorting = useSelector((state: any) => state.sorting.sorting);


    function valuetext(value: any) {
        return `${priceRange}`;
    }

    const handleChange = (event: any, newValue: any) => {
        dispatch(setPriceRange(newValue));
    };

    const handleChangeCommitted = (event: any, newValue: any) => {
        if(category === "all") {
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1]);
            }))
        } else {
            dispatch(filterProducts(function (item: Product) {
                return (item.price > priceRange[0] && item.price < priceRange[1] && item.category === category);
            }))

        }
        handleSorting();

    };


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
    };

    return (
        <Box sx={{width: 180}}>
            <h2 style={{padding: 0, marginBottom: 0, color: "orangered"}}>Price Range</h2>
            <Slider
                min={0} max={1000}
                    size="small"
                    color="secondary"
                    getAriaLabel={() => 'Temperature range'}
                    value={priceRange}
                    onChange={handleChange}
                    onChangeCommitted={handleChangeCommitted}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
            />
        </Box>
    );
}

export default PriceRangeSelector