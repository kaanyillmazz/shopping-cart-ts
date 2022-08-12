import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Input, ListItem, ListItemText} from "@mui/material";
import {setPaymentDisplay} from "../../../features/Products/checkoutSlice";
import List from "@mui/material/List";
import {Product} from "../../../features/Products/productsSlice";
import {getTotal} from "../../../features/Products/cartSlice";
import "./CartComp.css";


function CartComp() {
    const dispatch = useDispatch();

    const titleCreator = (price: number, count: number) => {
        return "$" + price + " Count: " + count;
    }

    const myCart = useSelector((state: any) => state.cart.myCart);

    let myButton;
    if(myCart.length > 0) {
        myButton =  <Input value="Proceed" type="submit" sx={{marginTop: "1vh"}}
                            onClick={()=>{dispatch(setPaymentDisplay("flex"));
            document.getElementById("cartContainer")!.classList.add("drop");
        }}
        ></Input>
    }

    return (<Grid container className="cartContainer" id="cartContainer">
                <Grid container item xs={12}>
                    <label>Items in cart</label>
                </Grid>
                <Grid container item xs={12} className={"productsHolder"}>
                    <List dense={true}>
                        {myCart.map((product: Product, index: number) => (
                            <Grid item xs={12}>
                                <ListItem sx={{border: "solid 0.5px black"}}>
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
                    <Grid item xs={12}>
                        <label>Total: ${getTotal(myCart)}</label>
                    </Grid>
                    <Grid item xs={12}>
                        {myButton}
                    </Grid>
                </Grid>
            </Grid>

    )

}

export default CartComp;
