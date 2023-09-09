import React from "react";
// components
import ProfileGrid from "../../../../components/DentistProfile/ProfileGrid";
import NavGrid from "../../../../components/DentistProfile/NavGrid";
// mui 
import { Box } from "@mui/material";



export default function Profile() {

    return (
        <>
            <NavGrid />
            <Box sx={{
                width: '1254px',
                height: '1323px',
                marginRight: '24px',
            }}>
                <ProfileGrid />
            </Box>
        </>
    );
}