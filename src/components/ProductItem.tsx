import React from 'react'
import {Button, Grid, Paper} from "@mui/material";
import {useSelector} from "react-redux";

type size = "XS" | "S" | "M" | "ML" | "L" | "XL" | "XXL";
interface product {
    name: string;
    price: number;
    size: size;
    id: number;
}

function picStringCalc(id: number, photoVersion: number) {
    let toSend: string = "P"+id+"i"+photoVersion;
    return (toSend);
}

function ProductItem(props: any) {
    const products = useSelector((state: any) => state.products.productsArray);
    let id = props.id;

let Paper12;
    if(products[id]) {
        let currentProduct: product = products[id];
        let name = currentProduct.name;
        let price = currentProduct.price;
        let size = currentProduct.size;
        let picString1 = picStringCalc(currentProduct.id,1);
        let picString2 = picStringCalc(currentProduct.id, 2);

        Paper12 = (<Paper>
            <img src={`/assets/images/${picString1}`+'.png'} />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <Button variant="contained" sx={{mb: 2, backgroundColor: "orangered"}}> Add To Cart</Button>
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