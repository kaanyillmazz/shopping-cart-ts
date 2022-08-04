import React, {useState} from 'react';


import "./PaymentPage.css";
import {Button, Grid, TextField} from "@mui/material";
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

    }
    const handleChange = (event: any) => {
        switch (event.target.id) {
            case "cardHolderName":
                setNameField(event.target.value);
                break;
            case "cardNumber":
                setCardNumber(event.target.value)
                break;
            case "cardExp":
                setCardExp(event.target.value)
                break;
            case "cardCCV":
                setCardCCV(event.target.value)
                break;
            default:
        }

    }


    return (<Grid container className="paymentFormContainer animate" id="paymentFormContainer" display={display}>
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                    <label>CardHolder Name</label>
                </Grid>
                <Grid item xs={12}>
                    <TextField className="myLabel" id="cardHolderName" label="Name Surname" variant="standard"
                               value={nameField}
                               onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <label>Card Number</label>
                </Grid>

                <Grid item xs={12}>
                    <TextField className="myLabel" id="cardNumber" label="xxx xxxx xxxx xxxx" variant="standard"
                               value={cardNumber}
                               onChange={handleChange}/>
                </Grid>

                <Grid item xs={5}>
                    <label>Exp Date</label>
                </Grid>

                <Grid item xs={5}>
                    <TextField className="myLabel" id="cardExp" label="Exp Date" variant="standard" value={cardExp}
                               onChange={handleChange}/>
                </Grid>

                <Grid item xs={3}>
                    <label>ccv</label>
                </Grid>

                <Grid item xs={3}>
                    <TextField className="myLabel" id="cardCCV" label="CCV" variant="standard" value={cardCCV}
                               onChange={handleChange}/>
                </Grid>
            </form>

        </Grid>

        <Grid xs={12}>
            <Button variant={"contained"} onClick={()=>{dispatch(setShippingDisplay("flex"));
                document.getElementById("paymentFormContainer")!.classList.add("drop");
            }}>Proceed</Button>
        </Grid>

    </Grid>);
}

export default PaymentPage;