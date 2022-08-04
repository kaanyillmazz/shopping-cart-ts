import {createSlice} from "@reduxjs/toolkit";
import {dialogSlice} from "./dialogSlice";

const initialState = {
    paymentDisplay: "none",
    shippingDisplay: "none"
}

export const checkoutSlice = createSlice({
    name: 'checkout', initialState, reducers: {
        setPaymentDisplay: (state, display) => {
            state.paymentDisplay = display.payload;
        },
        setShippingDisplay: (state, display) => {
            state.shippingDisplay = display.payload;
        },
    },
})

export const {setPaymentDisplay, setShippingDisplay} = checkoutSlice.actions;

export default checkoutSlice.reducer