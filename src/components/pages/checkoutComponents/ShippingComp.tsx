import React, {useState} from 'react';
import "./ShippingComp.css";
import {Grid, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCompleteDisplay, setPaymentDisplay, setShippingDisplay} from "../../../features/Products/checkoutSlice";
import {createCookies, emptyItems} from "../../../features/Products/cartSlice";
import {useNavigate} from "react-router-dom";

function ShippingComp() {
    const display = useSelector((state: any) => state.checkout.shippingDisplay);
    const dispatch = useDispatch();
    const [countryName, setCountryName] = useState("");
    const [cityName, setCityName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [addressName, setAddressName] = useState("");
    let navigate = useNavigate();

    const resetEverything = () => {
        dispatch(emptyItems());
        dispatch(setPaymentDisplay("none"));
        dispatch(setShippingDisplay("none"));
        document.getElementById("cartContainer")!.classList.remove("drop");
        document.getElementById("paymentContainer")!.classList.remove("drop");
        document.getElementById("shippingContainer")!.classList.remove("drop");
        dispatch(setCompleteDisplay("none"));
        createCookies([]);
        navigate(`/`, {replace: true});
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (countryName.length < 2) {
            alert("Please Enter a valid Country Name")
            return;
        }
        if (cityName.length < 2) {
            alert("Please Enter a valid City Name")
            return;
        }
        if (districtName.length < 2) {
            alert("Please Enter a valid District Name")
            return;
        }
        if (addressName.length < 2) {
            alert("Please Enter a valid Address")
            return;
        }
        document.getElementById("shippingContainer")!.classList.add("drop");
        dispatch(setCompleteDisplay("flex"));
        setTimeout(()=>{resetEverything()}, 2000);
    }

    const handleChange = (event: any) => {
        switch (event.target.id) {
            case "countryName":
                setCountryName(event.target.value);
                break;
            case "cityName":
                setCityName(event.target.value)
                break;
            case "districtName":
                setDistrictName(event.target.value)
                break;
            case "addressName":
                setAddressName(event.target.value)
                break;
            default:
        }
    }

    return (
        <Grid container className="shippingContainer animate" id="shippingContainer" display={display}>
            <label className="heading">Shipping Address</label>
            <form onSubmit={handleSubmit}>
                <Grid container item>
                    <Grid item xs={12}>
                        <TextField fullWidth required={true} id="countryName" label="Country" margin="dense"
                                   variant="filled" size="small"
                                   value={countryName}
                                   onChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth required={true} id="cityName" label="City" margin="dense"
                                   variant="filled" size="small"
                                   value={cityName}
                                   onChange={handleChange}/>
                    </Grid>


                    <Grid item xs={12}>
                        <TextField fullWidth required={true} id="districtName" label="District" margin="dense"
                                   variant="filled" size="small"
                                   value={districtName}
                                   onChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth required={true} id="addressName" label="Address" margin="dense"
                                   variant="filled" size="small"
                                   value={addressName}
                                   onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Input type="submit" value="Complete Order"></Input>
            </form>
        </Grid>);
}

export default ShippingComp;
