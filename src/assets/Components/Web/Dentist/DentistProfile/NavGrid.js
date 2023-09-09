import React, {useEffect} from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import ProfileCard from "./ProfileCard";
import dentistButtondiscusion from "../../icons/dentistButtondiscusion.svg";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import AdapterJalali from "@date-io/date-fns-jalali";
import {StaticDatePicker} from "@mui/x-date-pickers";

export default function NavGrid() {

    return (
        <Grid sx={{
            height: "355px",
            marginRight: '120px',
            position: 'relative',
            top: '-200px'
        }}>
            <ProfileCard/>
            <Box sx={{
                background: 'linear-gradient(45deg, #2143DD ,#132885)',
                borderRadius: '8px',
                marginTop: '14px',

            }}>
                <Button variant="contained"
                        sx={{
                            width: '402px',
                            height: '150px',
                            fontSize: 24,
                            backgroundImage: `url(${dentistButtondiscusion})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right',
                        }}>ورود به فضا گفتگو
                </Button>
            </Box>
            <Card sx={{marginTop: '14px'}}>
                <LocalizationProvider dateAdapter={AdapterJalali}>
                    <StaticDatePicker showToolbar={false} readOnly={true}/>
                </LocalizationProvider>
            </Card>
        </Grid>
    );
}