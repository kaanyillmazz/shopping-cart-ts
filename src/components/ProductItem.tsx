import React from 'react'
import {Button, Grid, Paper} from "@mui/material";
import {useSelector} from "react-redux";

type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";
export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

function ProductItem(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);
return (
        <Grid container xs={12} display="flex">
            {products.map((product: any, index: number) => (
                <Grid item xs={3}>
                <Paper>
                    <img height={400} width={275} src={product.image} />
                    <Grid height={250} container display="flex">
                        <Grid item xs={12}>
                            <h4>{product.title}</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>${product.price}</h3>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" sx={{mb: 2, backgroundColor: "orangered"}}> Add To Cart</Button>
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
            ))}
        </Grid>
);
}
export default ProductItem;