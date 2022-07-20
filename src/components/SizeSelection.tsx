import React from 'react'
import {Grid} from "@mui/material";
import Fab from '@mui/material/Fab';


function SizeSelection(props: any) {
    return(
        <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} display="flex">
                <h1>Sizes:</h1>
            </Grid>
            <Grid container item xs={12} display="flex">
                <Grid item xs={12} display="flex">
                    <Fab sx={{margin: 0.5}} size="small">XS</Fab>
                    <Fab sx={{margin: 0.5}} size="small">S</Fab>
                    <Fab sx={{margin: 0.5}} size="small">M</Fab>
                    <Fab sx={{margin: 0.5}} size="small">ML</Fab>
                </Grid>
                <Grid item xs={12} display="flex">
                    <Fab sx={{margin: 0.5}} size="small">L</Fab>
                    <Fab sx={{margin: 0.5}} size="small">XL</Fab>
                    <Fab sx={{margin: 0.5}} size="small">XXL</Fab>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default SizeSelection;