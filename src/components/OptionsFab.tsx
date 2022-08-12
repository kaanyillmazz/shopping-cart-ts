import React from 'react'
import {Fab} from "@mui/material";
import {setOpen} from "../features/Products/optionsSlice";
import {useDispatch} from "react-redux";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

//this component displays a filter floating button
function OptionsFab() {
    const dispatch = useDispatch();

    //set the option drawer open
    const handleDrawerOpen = () => {
        dispatch(setOpen(true));
    };

    return(
        <Fab  onClick={handleDrawerOpen} size="medium" style={{position: 'fixed', left: "3vh", top: "3vh", height: 60, width: 60, minHeight: 60, backgroundColor: "rgba(189,59,0,0.76)"}} >
            <FilterAltIcon fontSize="large" color="action"/>
        </Fab>
    )
}

export default OptionsFab;
