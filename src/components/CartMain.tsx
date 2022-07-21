import React from 'react'
import {Button, Grid, ListItem, ListItemText, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {emptyItems} from "../features/Products/cartSlice";
import {Product} from "../features/Products/productsSlice";
import List from "@mui/material/List";



function CartMain(props: any) {
    const myCart = useSelector((state: any) => state.cart.myCart);

    const dispatch = useDispatch();
    const titleCreator = (price: number) => {
        console.log(price);
        let str = "$"+price;
        console.log(str)
        return str;
    }
    const checkoutHandler = () => {
        alert("Items will be shipped soon! Thanks!");
        dispatch(emptyItems());
    }


    return (
        <Grid container display="flex">
            <Grid item xs={12}>
                <Grid item xs={12} sx={{marginLeft: 3}}>
                    <h2>{myCart.length} item(s)</h2>
                </Grid>
                <Grid container xs={12} display="flex">
                    {myCart.map((product: Product, index: number) => (

                        <List dense={true}>
                                <ListItem>
                                    <ListItemText
                                        primary={product.title}
                                        secondary={titleCreator(product.price)}
                                    />
                                </ListItem>

                        </List>

                    ))}
                </Grid>

            </Grid>
            <Grid item xs={6}>
                <Button onClick={checkoutHandler} variant="contained" sx={{backgroundColor: "orangered", marginLeft: 2}}>Checkout</Button>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={checkoutHandler} variant="contained" sx={{backgroundColor: "red", marginLeft: 2}}>Cancel</Button>
            </Grid>

        </Grid>)
}

export default CartMain;