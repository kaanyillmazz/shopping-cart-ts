import React from 'react'
import {Fab} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartFab(props: any) {
return(
    <Fab  size="large" style={{position: 'absolute', right: 0, top: 5, height: 20, width: 50, minHeight: 50, backgroundColor: "orangered"}} >
<ShoppingCartIcon fontSize="large"/>
    </Fab>


)
}

export default CartFab;