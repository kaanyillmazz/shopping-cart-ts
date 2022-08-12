import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    paymentDisplay: "none",
    shippingDisplay: "none",
    completeDisplay: "none"
}

export const checkoutSlice = createSlice({
    name: 'checkout', initialState, reducers: {
        setPaymentDisplay: (state, display) => {
            state.paymentDisplay = display.payload;
        },
        setShippingDisplay: (state, display) => {
            state.shippingDisplay = display.payload;
        },
        setCompleteDisplay: (state, display) => {
            state.completeDisplay = display.payload;
        },
    },
})

export const {setPaymentDisplay, setShippingDisplay, setCompleteDisplay} = checkoutSlice.actions;

export default checkoutSlice.reducer
