import {Box, CssBaseline, Grid} from "@mui/material";
import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../../components/Section/Navbar";
import LabPic from "../../img/LabPic.svg";
import dentistProfilePattern from "../../img/dentistProfilePattern.svg";

export default function LaboratorLayout() {

    useEffect(() => {
        document.body.style.margin = 0;
    });

    return (
        <Box sx={{height: 'fit-content', backgroundColor: '#F8F8F8'}}
             display={'flex'}
             flexDirection={'row'}>
            <Box sx={{height: 'fit-content', backgroundColor: '#F8F8F8'}}>
                <Navbar/>
                <img src={LabPic} style={{width: '100vw', padding: 0}} alt={'dentist unit'}/>
                <Box sx={{
                    backgroundImage: `url(${dentistProfilePattern})`,
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    minHeight: 'fit-content',
                    backgroundPositionX: 'right',
                    backgroundPositionY: '80px',
                    position: 'absolute',
                    top: '554px',
                    paddingBottom: '24px'
                }}>
                    <Grid container
                          direction={'row'}
                          sx={{
                              right: '120px',
                              width: 'auto',
                          }}>
                        <Outlet/>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}