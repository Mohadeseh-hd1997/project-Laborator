import React from "react";
// mui 
import { Box, Card, ImageList, ImageListItem, Typography } from "@mui/material";
// img 
import avatar_wrap from "../../../../img/avatar_wrap.svg";
// components
import { LaboratorCard } from "../../../../components/DentistProfile/LaboratorCard";
import NavGrid from "../../../../components/DentistProfile/NavGrid";

// data card 
const itemData = [
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
    {
        id: 1,
        name: 'smart',
        logo: avatar_wrap,
        city: 'مشهد',
        rate: 2.4
    },
]


export default function FavouriteLab() {
    return (
        <>
            <NavGrid />
            <Box sx={{
                width: '1254px',
                height: '1323px',
                marginRight: '24px',
            }}>
                <Card sx={{ p: '48px' }}>
                    <Typography variant={'h4'} sx={{ fontSize: '24px' }}>
                        <span style={{ fontWeight: 'bold' }}>علاقه مندی های من</span> | لابراتوار ها
                    </Typography>
                    <ImageList cols={3} sx={{ borderTop: 1, borderColor: '#E5E5E5' }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.id}>
                                <LaboratorCard
                                    name={item.name}
                                    logo={item.logo}
                                    city={item.city}
                                    rate={item.rate}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Card>
            </Box>
        </>
    );
}