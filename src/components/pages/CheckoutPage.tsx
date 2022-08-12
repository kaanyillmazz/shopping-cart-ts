import React from 'react';
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import "./CheckoutPage.css";
import PaymentComp from "./checkoutComponents/PaymentComp";
import ShippingComp from "./checkoutComponents/ShippingComp";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import CartComp from "./checkoutComponents/CartComp";

function CheckoutPage() {
    const complete = useSelector((state: any) => state.checkout.completeDisplay);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    let PaymentPageGrid;
    let ShippingPageGrid;
    let CartPageGrid;

    PaymentPageGrid = matches ? (<Grid className="paymentContainerGrid" xs={12} md={4}>
        <PaymentComp/>
    </Grid>) : (<Grid className="paymentContainerGrid smallScreen" xs={12} md={4}>
        <PaymentComp/>
    </Grid>);

    ShippingPageGrid = matches ? (<Grid className="shippingContainerGrid" xs={12} md={4}>
        <ShippingComp/>
    </Grid>) : (<Grid className="shippingContainerGrid smallScreen" xs={12} md={4}>
        <ShippingComp/>
    </Grid>);

    CartPageGrid = matches ? (<Grid className="cartContainerGrid" xs={12} md={4}>
        <CartComp/>
    </Grid>) : (<Grid className="cartContainerGrid smallScreen" xs={12} md={4}>
        <CartComp/>
    </Grid>);


    return (
        <Grid container className="checkoutMain bgAnimate" id="checkoutMain">

            <Grid item xs={12} display={complete} justifyContent="center">
                <label className="orderCompleteLabel animate">Order Complete!</label>
            </Grid>

            {CartPageGrid}
            {PaymentPageGrid}
            {ShippingPageGrid}
        </Grid>

    )
}

export default CheckoutPage;
