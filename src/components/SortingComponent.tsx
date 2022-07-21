import React from 'react';
import {Box, FormControl, InputLabel, NativeSelect, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { setSorting } from '../features/Products/sortingSlice';
import {sortProducts} from "../features/Products/productsSlice";

function SortingComponent(props: any) {
    const dispatch = useDispatch();
    const sorting = useSelector((state: any) => state.sorting.sorting);

    const handleChange = (event: any) => {
        let value = event.target.value.toString();
        let value0 = value.toString();
        if (value0 === "MostPrice") {
            //sort from the most points
            dispatch(sortProducts((function (a: any, b: any) { return b.price - a.price })));
        } else if (value0 === "LeastPrice") {
            console.log("least")
            //sort from the least points
            dispatch(sortProducts((function (a: any, b: any) { return a.price - b.price })));
        }
        dispatch(setSorting(value0));  //set the state to refresh frontend
    };


    return (
        <Box mt={1} sx={{minWidth: 100}}>
            <FormControl sx={{marginRight: 5, marginTop: 3, marginBottom: 3}}>
                <InputLabel variant="standard"> <i style={{color: 'orange'}}>sort</i> </InputLabel>
                <NativeSelect color="warning" value={sorting} onChange={handleChange}>
                    <option value="MostPrice">Most Price</option>
                    <option value="LeastPrice">Least Price</option>
                </NativeSelect>
            </FormControl>
        </Box>
    )
}

export default SortingComponent