import React from 'react'
import {Button, Fab, Grid, ListItem, ListItemText, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {decreaseCount, emptyItems, increaseCount} from "../features/Products/cartSlice";
import {Product} from "../features/Products/productsSlice";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Divider from "@mui/material/Divider";


function CartMain(props: any) {
    const myCart = useSelector((state: any) => state.cart.myCart);

    const dispatch = useDispatch();
    const titleCreator = (price: number, count:number) => {

        let str = "$"+price+"   "+"Count: "+count;
        return str;
    }
    const checkoutHandler = () => {
        alert("Items will be shipped soon! Thanks!");
        dispatch(emptyItems());
    }

    const increaseHandler = (title: any) => {
        let myTitle = title;
        dispatch(increaseCount(myTitle));
    }
    const decreaseHandler = (title: any) => {
        let myTitle = title;
        dispatch(decreaseCount(title));
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
                                    <Grid container>
                                    <Grid item xs={12}>
                                    <ListItemText
                                        primary={product.title}
                                        secondary={titleCreator(product.price,product.count)}
                                    />
                                    </Grid>
                                    <Grid item spacing={3} xs={12}>
                                    <Fab  onClick={()=>{increaseHandler(product.title)}} size="small" style={{position: 'absolute',  height: 20, width: 20, minHeight: 20, backgroundColor: "orangered"}} >
                                        <AddOutlinedIcon fontSize="small"/>
                                    </Fab>
                                    <Fab  onClick={()=>{decreaseHandler(product.title)}} size="small" style={{position: 'absolute', left: 45, height: 20, width: 20, minHeight: 20, backgroundColor: "orangered"}} >
                                        <RemoveOutlinedIcon fontSize="small"/>
                                    </Fab>
                                    </Grid>
                                    </Grid>
                                </ListItem>

                        </List>

                    ))}
                </Grid>
                <Divider variant="middle" sx={{marginTop: 3, marginBottom: 3}}/>

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