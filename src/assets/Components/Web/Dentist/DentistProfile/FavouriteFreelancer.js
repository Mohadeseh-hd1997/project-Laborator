
import React from "react";
// mui
import { Box, Card, ImageList, ImageListItem, Typography } from "@mui/material";
// img
import freelanceravatar from "../../../../img/freelanceravatar.svg";
// components
import { FreelancerCard } from "../../../../components/DentistProfile/FreelancerCard";
import NavGrid from "../../../../components/DentistProfile/NavGrid";

// data card
const itemData = [
    {
        id: 1,
        name: 'فاطمه علی پور',
        avatar: freelanceravatar,
        expertise: 'Surgical Guide      |       Dental Lab',
        rate: 2.5
    },
    {
        id: 1,
        name: 'فاطمه علی پور',
        avatar: freelanceravatar,
        expertise: 'Surgical Guide      |       Dental Lab',
        rate: 2.5
    },
    {
        id: 1,
        name: 'فاطمه علی پور',
        avatar: freelanceravatar,
        expertise: 'Surgical Guide      |       Dental Lab',
        rate: 2.5
    },
    {
        id: 1,
        name: 'فاطمه علی پور',
        avatar: freelanceravatar,
        expertise: 'Surgical Guide      |       Dental Lab',
        rate: 2.5
    },
    {
        id: 1,
        name: 'فاطمه علی پور',
        avatar: freelanceravatar,
        expertise: 'Surgical Guide      |       Dental Lab',
        rate: 2.5
    },
]
export default function FavouriteFreelancer() {
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
                        <span style={{ fontWeight: 'bold' }}>علاقه مندی های من</span> | طراحان
                    </Typography>
                    <ImageList cols={3} sx={{ borderTop: 1, borderColor: '#E5E5E5' }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.id} sx={{ marginTop: '32px' }}>
                                <FreelancerCard
                                    name={item.name}
                                    avatar={item.avatar}
                                    expertise={item.expertise}
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