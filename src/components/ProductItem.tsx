import React from 'react'
import {Button, Grid, Paper} from "@mui/material";


import logo from '../images/p2i1.png'

function ProductItem(props: any) {
return (
    <Grid container display="flex">
        <Grid item>
            <Paper>
                <img src={logo}/>
                <h2> Crop top fln filan</h2>
                <h3> $100</h3>
                <Button variant="contained" sx={{mb: 2, backgroundColor: "orangered"}}> Add To Cart</Button>

            </Paper>

        </Grid>






    </Grid>
);
}

export default ProductItem;