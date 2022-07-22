import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, ListItem, ListItemText,} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setOpen} from "../features/Products/dialogSlice";
import {Product} from "../features/Products/productsSlice";
import List from "@mui/material/List";
import {emptyItems} from "../features/Products/cartSlice";


const titleCreator = (price: number, count: number) => {
    let str = "$" + price + " Count: " + count;
    return str;
}

function CheckoutScreen(props: any) {
    function handleClose(event: any) {
        dispatch(setOpen(false));
    }

    function handleCheckoutClose(event: any) {
        dispatch(setOpen(false));
        alert("items will be shipped soon! thanks!");
        dispatch(emptyItems());
    }

    const dispatch = useDispatch();
    const open = useSelector((state: any) => state.dialog.open);
    const myCart = useSelector((state: any) => state.cart.myCart);

    return (<div>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Checkout</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Items:
                </DialogContentText>
                <Grid container>
                    {myCart.map((product: Product, index: number) => (
                        <Grid container item xs={12}>
                            <List dense={true}>
                                <Grid item xs={12}>
                                    <ListItem>
                                        <Grid container item>
                                            <Grid item xs={12}>
                                                <ListItemText
                                                    primary={product.title}
                                                    secondary={titleCreator(product.price, product.count)}
                                                />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </Grid>
                            </List>
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCheckoutClose}>Buy</Button>
            </DialogActions>
        </Dialog>
    </div>)

}
export default CheckoutScreen;