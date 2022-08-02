import React, {useState} from 'react';
import {Product, setDefaultProducts, setProducts} from "../../features/Products/productsSlice";
import {Container, Grid} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import "./ProductPage.css";

function ProductPage() {
    const [product, setProduct] = useState({title: " ", description: " ", image: "", price: ""});
    let {id} = useParams();

    let navigate = useNavigate();


    React.useEffect(() => {
        let myInd: number = 0;
        if (id === undefined) {
            myInd = 0
        } else {
            myInd = parseInt(id);
        }
        axios.get(`https://fakestoreapi.com/products/${myInd}`).then((response) => {
            setProduct(response.data)
        });
    }, [id]);


    return (<Grid container display="flex" justifyContent="center">
            <section>
                <Grid item container xs={12} justifyContent="center" display="flex" spacing={"2px"}>
                    <Grid item container xs={12} justifyContent="center" display="flex" padding="3px" marginTop="3vh">
                        <label>{product.title}</label>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center" display="flex" marginTop="1vh">
                        <img src={product.image} alt={"adpojfapsj"}/>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center" display="flex" marginTop="2vh">
                        <label className="foreground">{product.description}</label>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center" display="flex" marginTop="2vh">
                        <label className="foreground">${product.price}</label>
                    </Grid>
                    <Link className="foreground" to="/">Return Home</Link>


                </Grid>


                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>


        </Grid>
    );

}

export default ProductPage;