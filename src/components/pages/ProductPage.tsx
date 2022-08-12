import React, {useState} from 'react';
import {Grid} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

function ProductPage() {
    const [product, setProduct] = useState({title: " ", description: " ", image: "", price: ""});
    let {id} = useParams();

    React.useEffect(() => {
        let myInd = 0;
        if (id === undefined) {
            myInd = 0
        } else {
            myInd = parseInt(id);
        }
        axios.get(`https://fakestoreapi.com/products/${myInd}`).then((response) => {
            setProduct(response.data)
        });
    }, [id]);


    return (<Grid container display="flex" justifyContent="center" className="productPageMain">
                <Link className="foreground" to="/">Return Home</Link>


            <Grid item container xs={12} justifyContent="center" display="flex" spacing={"2px"} className="productPageContainer">
                <Grid item container xs={12} justifyContent="center" display="flex" padding="3px" marginTop="3vh">
                    <label >{product.title}</label>
                </Grid>
                <Grid item container xs={12} justifyContent="center" display="flex" marginTop="1vh">
                    <img src={product.image} alt={"aa"}/>
                </Grid>
                <Grid item container xs={12} justifyContent="center" display="flex" marginTop="2vh">
                    <label  className="foreground">{product.description}</label>
                </Grid>
                <Grid item container xs={12} justifyContent="center" display="flex" marginTop="2vh">
                    <label  className="foreground">${product.price}</label>
                </Grid>
            </Grid>

            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave4"></div>

        </Grid>
    );

}

export default ProductPage;
