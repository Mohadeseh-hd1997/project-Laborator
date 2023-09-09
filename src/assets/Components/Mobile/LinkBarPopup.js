import React from 'react';
// img 
import pieMenu from '../../img/pieMenu.svg';
import orderStatus from '../../img/orderStatusMenu.svg';
import glassMenu from '../../img/glassMenu.png';
import HomeMenu from '../../img/HomeMenu.svg';
import plusMenu from '../../img/plusMenu.svg';
import ok from '../../img/ok.svg';
// mui
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
// components
import LinkBar from './LinkBar';


export default function LinkBarPopup() {


    const useStyles = makeStyles((theme) => ({
        root: {
            [`& fieldset`]: {
                borderRadius: 15,
                marginLeft: 10,
                paddingRight: 10,
                backgroundColor: 'white',
            },

        },
        BtnHover: {
            '&:hover': {
                color: "#000000",
            },
        },
        parent: {
            marginRight: 19,
            marginLeft: 21,
            marginTop: 12,

        },
        AppBar: {
            background: 'transparent',
            boxShadow: 'none',
            textColor: 'darkBlack',
            marginRight: -25

        },
        grow: {
            flexGrow: 1,

        },
        menuButton: {
            marginLeft: theme.spacing(0.2),
        },
        MenueIcon: {
            fontSize: 35,
        },
        title: {
            color: "#6A6A6A",
            marginLeft: -50,
            fontSize: 18,
            fontWeight: 700
        },
        NotificationsIcon: {
            fontSize: 39,
            marginRight: 1
        }
        ,
        card: {
            marginTop: 16
        }
        ,
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },

        },
    }));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleMouseEnter1 = () => {
        setIsHovering1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovering1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovering2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovering2(false);
    };
    const [isHovering1, setIsHovering1] = React.useState(false);
    const [isHovering2, setIsHovering2] = React.useState(false);

    const [checked, setChecked] = React.useState(false);
    const [select1, setselect1] = React.useState(false);
    const [select2, setselect2] = React.useState(false);

    const selectActive1 = () => {
        setselect1((prev) => !prev);
    }
    const selectActive2 = () => {
        setselect2((prev) => !prev);
    }


    var [toggle, settoggle] = React.useState(1)



    const handleChange = () => {
        setChecked((prev) => !prev);
        if (toggle == 1) {
            settoggle(0.5)
        } else {
            settoggle(1)
        }

    }



    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };




    return (
        <>
            <div style={{ height: 'fit-content', zIndex: 1300, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 20 }}  >
                <Button onMouseLeave={handleMouseLeave1} onMouseEnter={handleMouseEnter1} className={classes.BtnHover} onClick={selectActive1} style={{ borderRadius: 20, fontWeight: 'bold', paddingTop: 10, marginTop: 5, paddingBottom: 10, width: 270, color: !select1 && !isHovering1 ? 'white' : 'black', backgroundColor: select1 ? '#FDD817' : '#DADADA' }}>درخواست اسکن دیجیتال</Button>
                <Button onMouseLeave={handleMouseLeave2} onMouseEnter={handleMouseEnter2} onClick={selectActive2} style={{ borderRadius: 20, fontWeight: 'bold', paddingTop: 10, marginTop: 5, paddingBottom: 10, width: 270, color: !select2 && !isHovering2 ? 'white' : 'black', backgroundColor: select2 ? '#FDD817' : '#DADADA' }}>ثبت دستور کار جدید</Button>
            </div>
            <img src={select1 || select2 ? ok : plusMenu} style={{ marginTop: 18 }} />
            <div style={{ width: '100%' }}>
                <LinkBar />
            </div>
        </>
    )
}
