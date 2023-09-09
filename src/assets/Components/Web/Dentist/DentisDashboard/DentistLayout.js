import { Box } from "@mui/material";
import SideNav from "../../components/Section/SideNav";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Section/Navbar";
import bgPattern from '../../img/Pattern‌Bg.svg';

export default function LaboratorLayout() {
    return (
        <Box width='100vw'  display={'flex'} flexDirection={'row'}>
                <SideNav/>
               <Box width='100vw' sx={{backgroundColor: '#F8F8F8', backgroundImage: `URL(${bgPattern})`, backgroundSize: 'cover' }} >
                <Navbar />
                <Outlet  sx={{height: 'auto'}}/>
            </Box>
           
     </Box>
    );
}