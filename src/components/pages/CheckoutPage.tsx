import React from 'react';
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import "./CheckoutPage.css";
import PaymentPage from "./PaymentPage";
import ShippingPage from "./ShippingPage";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import CartPage from "./CartPage";

function CheckoutPage(props: any) {

    const complete = useSelector((state: any) => state.checkout.completeDisplay);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    let PaymentPageGrid;
    let ShippingPageGrid;
    let CartPageGrid;

    PaymentPageGrid = matches ? ( <Grid className="paymentContainer" xs={12} md={4}>
        <PaymentPage/>
    </Grid>) : (<Grid className="paymentContainer smallScreen" xs={12} md={4}>
        <PaymentPage/>
    </Grid>);

    ShippingPageGrid = matches ? ( <Grid className="shippingContainer" xs={12} md={4}>
        <ShippingPage/>
    </Grid>) : (<Grid className="shippingContainer smallScreen" xs={12} md={4}>
        <ShippingPage/>
    </Grid>);

    CartPageGrid = matches ? ( <Grid className="cartContainer" xs={12} md={4}>
        <CartPage/>
    </Grid>) : (<Grid className="cartContainer smallScreen" xs={12} md={4}>
        <CartPage/>
    </Grid>);



    return (
        <Grid container xs={12} className="checkoutContainer bgAnimate" id="checkoutContainer">

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