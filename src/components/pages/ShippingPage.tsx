import React, {useState} from 'react';


import "./ShippingPage.css";
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";




function ShippingPage(props: any) {

    const display = useSelector((state: any) => state.checkout.shippingDisplay);



    const [countryName, setCountryName] = useState("");
    const [cityName, setCityName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [addressName, setAddressName] = useState("");

    const handleSubmit = (event: any) => {

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

    return (<Grid container className="shippingFormContainer animate" display={display}>
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                    <label>Country</label>
                </Grid>
                <Grid item xs={12}>
                    <TextField className="myLabel" id="countryName" label="Country" variant="standard"
                               value={countryName}
                               onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <label>City</label>
                </Grid>

                <Grid item xs={12}>
                    <TextField className="myLabel" id="cityName" label="City" variant="standard"
                               value={cityName}
                               onChange={handleChange}/>
                </Grid>

                <Grid item xs={12}>
                    <label>District</label>
                </Grid>

                <Grid item xs={12}>
                    <TextField className="myLabel" id="districtName" label="District" variant="standard" value={districtName}
                               onChange={handleChange}/>
                </Grid>

                <Grid item xs={12}>
                    <label>Address</label>
                </Grid>

                <Grid item xs={12}>
                    <TextField className="myLabel" id="addressName" label="Address" variant="standard" value={addressName}
                               onChange={handleChange}/>
                </Grid>
            </form>

        </Grid>

        <Grid xs={12}>
            <Button variant={"contained"}>Proceed</Button>
        </Grid>

    </Grid>) ;
}
export default ShippingPage;