import React, {useState} from 'react';


import "./PaymentPage.css";
import {Button, Grid, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setShippingDisplay} from "../../features/Products/checkoutSlice";

function PaymentPage(props: any) {

    const dispatch = useDispatch();
    const display = useSelector((state: any) => state.checkout.paymentDisplay);

    const [nameField, setNameField] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExp, setCardExp] = useState("");
    const [cardCCV, setCardCCV] = useState("");


    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(setShippingDisplay("flex"));
        document.getElementById("paymentFormContainer")!.classList.add("drop");
    }
    const handleChange = (event: any) => {
        let length = event.target.value.length;
        let value = event.target.value;
        switch (event.target.id) {
            case "cardHolderName":
                setNameField(value);
                break;
            case "cardNumber":
                if (event.keyCode === 8) {
                    setCardNumber(cardNumber.slice(0, -1));
                    break;
                } else if (length === 19) {
                    break;
                } else if (event.keyCode < 48 || event.keyCode > 57) {
                    break;
                } else if (length === 4 || length === 9 || length === 14) {
                    setCardNumber(value + "-");
                    break;
                } else {
                    setCardNumber(cardNumber + event.key);
                }
                break;
            case "cardExp":
                setCardExp(value)
                break;
            case "cardCCV":
                if (length === 4) {
                    break;
                }
                setCardCCV(value)
                break;
            default:
        }

    }


    return (
        <Grid container className="paymentFormContainer animate" id="paymentFormContainer" display={display}>
            <Grid>
                <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <TextField required={true} type="text" className="myLabel" id="cardHolderName"
                                   label="Cardholder Name"
                                   variant="standard"
                                   value={nameField}
                                   onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onKeyDown={handleChange} type="tel" required={true} className="myLabel"
                                   id="cardNumber"
                                   label="Card Number" variant="standard"
                                   value={cardNumber}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField required={true} type="month" className="myLabel" id="cardExp" label="Exp Date"
                                   variant="standard" value={cardExp}
                                   onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField required={true} type="tel" className="myLabel" id="cardCCV" label="CCV"
                                   variant="standard" value={cardCCV}
                                   onChange={handleChange}/>
                    </Grid>

                    <Input type="submit" value="Proceed"></Input>
                </form>
            </Grid>
        </Grid>);
}

export default PaymentPage;