import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid, ListItem, ListItemText} from "@mui/material";
import {setPaymentDisplay} from "../../features/Products/checkoutSlice";
import List from "@mui/material/List";
import {Product} from "../../features/Products/productsSlice";
import {getTotal} from "../../features/Products/cartSlice";


function CartPage(props: any) {
    const dispatch = useDispatch();

    const titleCreator = (price: number, count: number) => {
        let str = "$" + price + " Count: " + count;
        return str;
    }

    const myCart = useSelector((state: any) => state.cart.myCart);

    let myButton;
    if(myCart.length > 0) {
        myButton =  <Button sx={{marginLeft: "10px", backgroundColor: "orangered"}}
                            variant={"contained"} onClick={()=>{dispatch(setPaymentDisplay("flex"));
            document.getElementById("cartContainer")!.classList.add("drop");
        }}
        >Proceed</Button>
    };

    return (<Grid container className="cartContainer" id="cartContainer">
                <Grid container item xs={12}>
                    <label className="inCart">Items in cart</label>
                </Grid>
                <Grid container item xs={12} className={"productsHolder"}>
                    <List dense={true}>
                        {myCart.map((product: Product, index: number) => (
                            <Grid item xs={12}>
                                <ListItem sx={{border: "solid 1px orangered"}}>
                                    <Grid container item>
                                        <Grid item xs={10}>
                                            <ListItemText
                                                primary={product.title}
                                                secondary={titleCreator(product.price, product.count)}
                                            />
                                        </Grid>
                                        <Grid item container xs={2} display="flex" alignItems="center">
                                            <img width="40px" height="40px" alt="product" src={product.image}/>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </Grid>
                        ))}
                    </List>
                </Grid>
                <Grid container item xs={12} className={"infoHolder"}>
                    <Grid item>
                        <label>Total: ${getTotal(myCart)}</label>
                    </Grid>
                    <Grid item>
                        {myButton}
                    </Grid>
                </Grid>
            </Grid>

    )

}

export default CartPage;