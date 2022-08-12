import React from 'react'
import {Button, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addItem, createCookies, getCount, myIndexOf} from "../features/Products/cartSlice";
import {useNavigate} from "react-router-dom";
import "./ProductItem.css";

function ProductItem() {
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

    React.useEffect(() => {
        //workaround for creating cookies with empty array in the first render.
        if (myCart.length > 0) {
            createCookies(myCart);
        }
    }, [myCart]);


    //give this button to map function, so it maps another one for every single product
    const myButton = (product0: any, index0: any) => {
        let product = product0;
        let index = index0;
        let myButton0;
        //check if product is in cart, change the button accordingly
        if (myIndexOf(myCart, product) !== -1) {
            myButton0 = (<Button className="item3" onClick={() => {
                addToCart(index);
            }} variant="contained" sx={{backgroundColor: "rgba(236,106,0,0.4)"}}>In
                cart {getCount(myCart, product)}</Button>);
        } else {
            myButton0 = (<Button className="item3" onClick={() => {
                addToCart(index);
            }} variant="contained" sx={{backgroundColor: "rgba(220,72,46,0.72)"}}>Add To Cart</Button>);
        }
        return myButton0;
    }

    //map products so it displays all of them
    return (
        <Grid className="Main" container xs={12} md={10}>
            {products.map((product: any, index: number) => (
                <Grid className="paperHolder" item xs={12} sm={6} md={6} lg={2.8}>
                    <Paper className="paper">
                        <img alt="product" onClick={() => {
                            navigator(product.id)
                        }} src={product.image}/>
                        <Grid container display="flex" className="infoHolder">
                            <Grid item xs={12} className="item1">
                                <h4>{product.title}</h4>
                            </Grid>
                            <Grid item xs={12} className="item2">
                                <h3>${product.price}</h3>
                            </Grid>
                            <Grid item xs={12} className="item2">
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
