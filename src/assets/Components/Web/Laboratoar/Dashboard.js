import {Box, Card} from "@mui/material";
import React from "react";
import NavGridLab from "../../../components/Laborator/NavGridLab";
import ProfileGridLab from "../../../components/Laborator/ProfileGridLab";

export function Dashboard() {
    return (
        <>
            <NavGridLab/>
            <Card sx={{
                width: '1254px',
                height: '1323px',
                marginRight: '24px',
                marginTop:'190px'
            }}>
                <ProfileGridLab/>
            </Card>
        </>
    );
}