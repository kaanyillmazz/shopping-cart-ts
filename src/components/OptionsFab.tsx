import React from 'react'
import {Fab} from "@mui/material";
import {setOpen} from "../features/Products/optionsSlice";
import {useDispatch} from "react-redux";
import FilterAltIcon from '@mui/icons-material/FilterAlt';


function OptionsFab(props: any) {

    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch(setOpen(true));
    };

    return(
        <Fab  onClick={handleDrawerOpen} size="medium" style={{position: 'fixed', left: 5, bottom: 5, height: 40, width: 40, minHeight: 40, backgroundColor: "orangered"}} >
            <FilterAltIcon fontSize="medium"/>
        </Fab>
    )
}

export default OptionsFab;