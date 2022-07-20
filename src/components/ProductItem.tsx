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
    let id = props.id;

    let Paper12;
    if(products[id]) {
        let currentProduct: Product = products[id];
        let name = currentProduct.title;
        let price = currentProduct.price;
        let image = currentProduct.image;
        let category = currentProduct.category;

        Paper12 = (<Paper >
            <img height={400} width={275} src={image} />
            <Grid height={250} container display="flex">
              <Grid item xs={12}>
                  <h4>{name}</h4>
              </Grid>
                <Grid item xs={12}>
                    <h3>${price}</h3>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" sx={{mb: 2, backgroundColor: "orangered"}}> Add To Cart</Button>
                </Grid>
            </Grid>
        </Paper>)
    }

return (
    <Grid container display="flex">
        <Grid item>
            {Paper12}
        </Grid>
    </Grid>
);
}
export default ProductItem;