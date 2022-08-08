import React, {useState} from 'react';
import "./PaymentPage.css";
import {Grid, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setShippingDisplay} from "../../features/Products/checkoutSlice";

function PaymentPage() {

    const dispatch = useDispatch();
    const display = useSelector((state: any) => state.checkout.paymentDisplay);

    const [nameField, setNameField] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExp, setCardExp] = useState("");
    const [cardCCV, setCardCCV] = useState("");


    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(setShippingDisplay("flex"));
        document.getElementById("paymentContainer")!.classList.add("drop");
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
        <Grid container className="paymentContainer animate" id="paymentContainer" display={display}>
            <label className="heading">Payment Information</label>
            <form onSubmit={handleSubmit}>
                <Grid container item>
                    <Grid item xs={12}>
                        <TextField fullWidth required={true} type="text" id="cardHolderName"
                                   label="Cardholder Name"
                                   margin="dense" variant="filled" size="small"
                                   value={nameField}
                                   onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth onKeyDown={handleChange} type="tel" required={true}
                                   id="cardNumber"
                                   label="Card Number"
                                   margin="dense" variant="filled" size="small"
                                   value={cardNumber}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="dense" variant="filled" size="small" required={true} type="month"
                                   id="cardExp" label="Expiration Date"
                                   value={cardExp}
                                   onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth required={true} type="tel" id="cardCCV" label="CCV"
                                   margin="dense" variant="filled" size="small" value={cardCCV}
                                   onChange={handleChange}/>
                    </Grid>
                </Grid>

                <Input type="submit" value="Proceed"></Input>
            </form>
        </Grid>);
}

export default PaymentPage;