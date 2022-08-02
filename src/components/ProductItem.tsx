import React from 'react'
import {Button, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addItem, getCount, myIndexOf} from "../features/Products/cartSlice";
import ProductPage from "./pages/ProductPage";
import {useNavigate} from "react-router-dom";


function ProductItem(props: any) {
    let navigate = useNavigate();

    const products = useSelector((state: any) => state.products.productsArray);
    const myCart = useSelector((state: any) => state.cart.myCart);
    const dispatch = useDispatch();

    // add an item to cart
    const addToCart = (index: number) => {
        dispatch(addItem(products[index]));
    }

    const navigator = (productId: number) => {
        navigate(`/item/${productId}`, {replace: true})
    }

    //give this button to map function, so it maps another one for every single product
    const myButton = (product0: any, index0: any) => {
        let product = product0;
        let index = index0;
        let myButton0;
        //check if product is in cart, change the button accordingly
        if (myIndexOf(myCart, product) != -1) {
            myButton0 = (<Button onClick={() => {addToCart(index)}} variant="contained" sx={{mb: 2, backgroundColor: "lightslategray"}}>In cart {getCount(myCart,product)}</Button>);
        } else {
            myButton0 = (<Button onClick={() => {addToCart(index)}} variant="contained" sx={{mb: 2, backgroundColor: "orangered"}}>Add To Cart</Button>);
        }
        return myButton0;
    }


    //map products so it displays all of them
    return (
        <Grid container xs={12} md={12} display="flex">
            {products.map((product: any, index: number) => (
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper>
                        <img onClick={()=>{navigator(product.id)}} height={400} width={275} src={product.image}/>
                        <Grid height={250} container display="flex">
                            <Grid item xs={12}>
                                <h4>{product.title}</h4>
                            </Grid>
                            <Grid item xs={12}>
                                <h3>${product.price}</h3>
                            </Grid>
                            <Grid item xs={12}>
                                {myButton(product, index)}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductItem;