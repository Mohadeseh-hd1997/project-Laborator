import React from 'react';
// mui 
import Grid from "@material-ui/core/Grid";
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
//Drawer menu
export const navData = [
    {
        id: 0,
        icon: <HomeIcon />,
        text: "داشبورد",
        link: "/",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    },
    {
        id: 1,
        icon: <TravelExploreIcon />,
        text: "درخواست ها",
        link: "explore",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    },
    {
        id: 2,
        icon: <BarChartIcon />,
        text: "اطلاعات پایه",
        link: "statistics",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    },
    {
        id: 3,
        icon: <SettingsIcon />,
        text: "عملیات ها",
        link: "settings",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    }


]
export const navData2 = [
    {
        id: 3,
        icon: <SettingsIcon />,
        text: "پرسنل",
        link: "settings",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    }
    ,
    {
        id: 3,
        icon: <SettingsIcon />,
        text: "دسترسی ها",
        link: "settings",
        arrowDown: <KeyboardArrowDownOutlinedIcon />
    }
    ,
    {
        id: 3,
        icon: <SettingsIcon />,
        text: "تنظیمات",
        link: "settings",
    }
]




export default function DashboardScreen() {
    return (
        <Grid container spacing={{ xs: 0, md: 0, lg: 0 }} 
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid md={2} lg={2} xl={2}>
                sdsd
            </Grid>
            <Grid md={10} lg={10} xl={10} >
                vvvv
            </Grid>
        </Grid>
    )
}
