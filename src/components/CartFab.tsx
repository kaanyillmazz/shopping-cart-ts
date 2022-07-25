import React from 'react'
import {Fab} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {setOpen} from "../features/Products/drawerSlice";
import {useDispatch} from "react-redux";


//this is a floating button that manages if cart drawer is open
function CartFab(props: any) {

    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch(setOpen(true));
    };

return(
    <Fab  onClick={handleDrawerOpen} size="large" style={{position: 'fixed', right: 5, top: 5, height: 20, width: 50, minHeight: 50, backgroundColor: "orangered"}} >
<ShoppingCartIcon fontSize="large"/>
    </Fab>


)
}

export default CartFab;