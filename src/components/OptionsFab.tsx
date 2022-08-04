import React from 'react'
import {Fab} from "@mui/material";
import {setOpen} from "../features/Products/optionsSlice";
import {useDispatch} from "react-redux";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

//this component displays a filter floating button
function OptionsFab(props: any) {
    const dispatch = useDispatch();

    //set the options drawer open
    const handleDrawerOpen = () => {
        dispatch(setOpen(true));
    };

    return(
        <Fab  onClick={handleDrawerOpen} size="medium" style={{position: 'fixed', left: 5, top: 5, height: 50, width: 50, minHeight: 50, backgroundColor: "#1dde8e"}} >
            <FilterAltIcon fontSize="large" color="warning"/>
        </Fab>
    )
}

export default OptionsFab;