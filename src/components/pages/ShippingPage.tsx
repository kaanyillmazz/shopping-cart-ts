import React, {useState} from 'react';


import "./ShippingPage.css";
import {Grid, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCompleteDisplay} from "../../features/Products/checkoutSlice";


function ShippingPage(props: any) {

    const display = useSelector((state: any) => state.checkout.shippingDisplay);

    const dispatch = useDispatch();

    const [countryName, setCountryName] = useState("");
    const [cityName, setCityName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [addressName, setAddressName] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        document.getElementById("shippingFormContainer")!.classList.add("drop");
        dispatch(setCompleteDisplay("flex"))
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
        <Grid container className="shippingFormContainer animate" id="shippingFormContainer" display={display}>
            <Grid>
                <form onSubmit={handleSubmit}>

                    <Grid item xs={12}>
                        <TextField required={true} className="myLabel" id="countryName" label="Country" margin="dense"
                                   variant="filled" size="small"
                                   value={countryName}
                                   onChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField required={true} className="myLabel" id="cityName" label="City" margin="dense"
                                   variant="filled" size="small"
                                   value={cityName}
                                   onChange={handleChange}/>
                    </Grid>


                    <Grid item xs={12}>
                        <TextField required={true} className="myLabel" id="districtName" label="District" margin="dense"
                                   variant="filled" size="small"
                                   value={districtName}
                                   onChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField required={true} className="myLabel" id="addressName" label="Address" margin="dense"
                                   variant="filled" size="small"
                                   value={addressName}
                                   onChange={handleChange}/>
                    </Grid>
                    <Input type="submit" value="Complete Order"></Input>
                </form>

            </Grid>
        </Grid>);
}

export default ShippingPage;