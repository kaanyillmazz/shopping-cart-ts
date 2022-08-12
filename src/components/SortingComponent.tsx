import React from 'react';
import {FormControl, InputLabel, NativeSelect, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSorting} from '../features/Products/sortingSlice';
import {sortProducts} from "../features/Products/productsSlice";

function SortingComponent() {
    const dispatch = useDispatch();
    const sorting = useSelector((state: any) => state.sorting.sorting);

    //sorting is done with the local value before sending out sorting state
    //this is to ensure that state has time to change, and we are doing the correct sort
    const handleChange = (event: any) => {
        let value = event.target.value.toString();
        let value0 = value.toString();
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
        dispatch(setSorting(value0));  //set the state to refresh frontend
    };

    return (
        <Grid mt={1} sx={{paddingLeft: 5, paddingRight: 5}}>
            <FormControl fullWidth>
                <InputLabel variant="standard"> <i style={{color: 'orange'}}>sort</i> </InputLabel>
                <NativeSelect color="warning" value={sorting} onChange={handleChange}>
                    <option value="MostPrice">Most Price</option>
                    <option value="LeastPrice">Least Price</option>
                </NativeSelect>
            </FormControl>
        </Grid>
    )
}

export default SortingComponent
