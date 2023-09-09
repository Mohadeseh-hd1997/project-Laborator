import * as React from 'react';
//  mui
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
//components
import CardOrder from './DashboardSectionsMobile/CardOrder';
import Request from './DashboardSectionsMobile/Request';
import CardArticle from './DashboardSectionsMobile/CardArticle';
import LinkBar from './LinkBar';
//images 
import qrcode from '../../img/qrcode.png'
import doc1 from '../../img/code.png';
import plusMenu from '../../img/plusMenu.svg';
import ok from '../../img/ok.svg';
import pieMenu from '../../img/pieMenu.svg';
import orderStatus from '../../img/orderStatusMenu.svg';
import glassMenu from '../../img/glassMenu.png';
import HomeMenu from '../../img/HomeMenu.svg';
import line from '../../img/line.svg';
import IconCard from '../../img/IconCard.png';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("xs")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.up("md")]: {},
        [theme.breakpoints.up("lg")]: {},
        [theme.breakpoints.up("xl")]: {},
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
        marginLeft: -66,
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


export default function DashboardMobile() {
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
        <div className={classes.parent}>
            <AppBar className={classes.AppBar} position="static"
                    style={{filter: open ? `blur(3px)` : 'none', opacity: toggle}}>
                <Toolbar>
                    <IconButton
                        size='lg'
                        edge="start"
                        className={classes.menuButton}
                        color="darkBlack"
                        aria-label="open drawer"
                    >
                        <MenuIcon className={classes.MenueIcon}/>
                    </IconButton>
                    <div>
                        <IconButton aria-label="show 17 new notifications" color="darkBlack">
                            <Badge variant="dot" color="secondary">
                                <NotificationsIcon className={classes.NotificationsIcon} color="darkBlack"/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.grow}/>
                    <div color="darkBlack">
                        <Typography style={{textShadow: 'black 1px 1px 1px'}} className={classes.title} variant="h6"
                                    color="darkBlack">

                            لابرآتوآر

                        </Typography>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <div style={{
                filter: open ? `blur(3px)` : 'none',
                opacity: toggle,
                display: 'flex',
                flexDirection: 'row',
                marginTop: 1
            }}>
                <TextField placeholder='جستجوی هوشمند' InputLabelProps={{shrink: false}} className={classes.root}
                           fullWidth/>
                <img style={{backgroundColor: '#FDD817', borderRadius: 15, marginRight: 3}} src={qrcode}/>

            </div>
            <div style={{filter: open ? `blur(3px)` : 'none', opacity: toggle, marginTop: 15}}>
                <Button style={{
                    marginTop: 8,
                    borderRadius: 20,
                    backgroundColor: '#fdd817',
                    color: '#6A6A6A',
                    fontSize: 16,
                    fontWeight: 'bolder',
                    padding: 8,

                }} variant='contained' fullWidth>درخواست مشاوره</Button>
            </div>
            <div style={{
                filter: open ? `blur(3px)` : 'none',
                opacity: toggle,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Typography style={{
                    color: '#1A1D1E',
                    fontSize: 18,
                    width: '70%',
                    marginRight: 12,
                    marginTop: 11,
                    fontWeight: 800
                }} variant="p" color="darkBlack">
                    وضعیت سفارش های جاری
                </Typography>
                <Button
                    style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: 12,
                        width: '30%',
                        fontWeight: 800,
                        justifyContent: 'flex-end',
                        color: '#6A6A6A'

                    }}
                    variant='text'>مشاهده بیشتر</Button>
            </div>
            <div style={{filter: open ? `blur(3px)` : 'none', opacity: toggle}} className={classes.card}>
                <CardOrder/>
            </div>

            <div style={{
                filter: open ? `blur(3px)` : 'none',
                opacity: toggle,
                marginTop: 'auto',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Typography style={{
                    color: '#1A1D1E',
                    fontSize: 15,
                    width: '80%',
                    marginRight: 12,
                    marginTop: 11,
                    fontWeight: 800
                }} variant="p" color="darkBlack">
                    وضعیت درخواست ها
                </Typography>
                <Button
                    style={{

                        opacity: toggle,
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: 12,
                        width: '20%',
                        fontWeight: 800,
                        justifyContent: 'flex-end',
                        color: '#6A6A6A'

                    }}
                    variant='text'>مشاهده بیشتر</Button>
            </div>
            <div style={{filter: open ? `blur(3px)` : 'none', opacity: toggle}}>
                <Request/>
            </div>
            <div style={{
                filter: open ? `blur(3px)` : 'none',
                opacity: toggle,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#fdd817',
                borderRadius: 20,
                paddingRight: 39,
                paddingBottom: 15,
                marginTop: 15
            }}>
                <div style={{width: '80%'}}>
                    <h3 style={{fontSize: 16, fontWeight: 900, color: '#6A6A6A'}}>نکات ثبت سفارش</h3>
                    <p style={{fontSize: 8, marginTop: -12, fontWeight: 500}}>خواهشمند است جهت تسهیل در فرآیند ثبت
                        سفارش، دستورالعمل تدوین شده را مطالعه نمایید.</p>
                </div>
                <div style={{width: '20%', paddingBottom: 15, textAlign: 'center', paddingLeft: 24}}>
                    <img width='50px' src={IconCard}/>
                </div>
            </div>

            <div style={{
                filter: open ? `blur(3px)` : 'none',
                opacity: toggle,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#fdd817',
                borderRadius: 20,
                paddingRight: 30,
                marginTop: 13
            }}>
                <div style={{width: '30%', paddingBottom: 15, textAlign: 'center', paddingTop: 10}}>
                    <img src={doc1} width='80%'/>
                </div>
                <div style={{width: '70%', paddingLeft: 20}}>
                    <h3 style={{fontSize: 16, fontWeight: 900, color: '#6A6A6A'}}>دستورالعمل های کاربردی</h3>
                    <p style={{fontSize: 8, marginTop: -12, fontWeight: 500}}> تسهیل در انجام فرآیندهای مرتبط با ثبت
                        سفارش، استفاده و به کارگیری محصولات لابرآتورآری </p>
                </div>
            </div>

            <div style={{display: open ? 'none' : 'flex', opacity: toggle, marginTop: 8, flexDirection: 'row'}}>
                <Typography style={{
                    color: '#1A1D1E',
                    fontSize: 15,
                    width: '70%',
                    marginRight: 12,
                    marginTop: 11,
                    fontWeight: 800
                }} variant="p" color="darkBlack">
                    مقالات آموزشی
                </Typography>
                <Button
                    style={{
                        display: checked ? 'none' : 'block',
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: 12,
                        width: '30%',
                        fontWeight: 800,
                        justifyContent: 'flex-end',
                        color: '#6A6A6A'

                    }}
                    variant='text'>مشاهده بیشتر</Button>
            </div>
            <div style={{display: open ? 'none' : 'block', opacity: toggle, marginTop: 20}}>
                <CardArticle/>
            </div>
            <div style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: -40,
                textAlign: 'center',
                borderRadius: 20
            }}>
                <img src={select1 || select2 ? ok : plusMenu} checked={checked} onClick={handleClickOpen}
                     style={{display: open ? 'none' : 'block', marginTop: 10}}/>
            </div>
            <div style={{boxShadow: 12, marginTop: 18}}>
                {open ?

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10}}>
                        <img onClick={handleClose} src={line} style={{marginTop: 20}}/>
                        <div style={{
                            height: 'fit-content',
                            zIndex: 1300,
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <Button onMouseLeave={handleMouseLeave1} onMouseEnter={handleMouseEnter1}
                                    className={classes.BtnHover} onClick={selectActive1} style={{
                                borderRadius: 20,
                                fontWeight: 'bold',
                                paddingTop: 10,
                                marginTop: 5,
                                paddingBottom: 10,
                                width: 270,
                                color: !select1 && !isHovering1 ? 'white' : 'black',
                                backgroundColor: select1 ? '#FDD817' : '#DADADA'
                            }}>درخواست اسکن دیجیتال</Button>
                            <Link style={{textDecoration: 'none'}} to='/WorkOrder'> <Button
                                onMouseLeave={handleMouseLeave2} onMouseEnter={handleMouseEnter2}
                                onClick={selectActive2} style={{
                                borderRadius: 20,
                                fontWeight: 'bold',
                                paddingTop: 10,
                                marginTop: 5,
                                paddingBottom: 10,
                                width: 270,
                                color: !select2 && !isHovering2 ? 'white' : 'black',
                                backgroundColor: select2 ? '#FDD817' : '#DADADA'
                            }}>ثبت دستور کار جدید</Button>
                            </Link></div>
                        <img src={select1 || select2 ? ok : plusMenu} style={{marginTop: 18}}
                             onClick={handleClickOpen}/>
                        <div style={{width: '100%'}}>
                            <LinkBar/>
                        </div>
                    </div>
                    :
                    <div>
                        <ul style={{
                            paddingRight: 10,
                            borderRadius: 50,
                            paddingLeft: 10,
                            display: 'flex',
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#A8A8AA',
                            flexDirection: 'row',
                            listStyle: 'none',
                            justifyContent: 'space-around'
                        }}>
                            <li style={{lineHeight: 0}}><img src={pieMenu}/><h6>گزارش</h6>
                            </li>
                            <li style={{lineHeight: 0}}><img src={orderStatus}/> <h6>وضعیت سفارش</h6>
                            </li>
                            <li style={{lineHeight: 0}}><img src={glassMenu}/> <h6>نمیدونم</h6>
                            </li>
                            <li style={{lineHeight: 0}}><img style={{marginTop: 11}} src={HomeMenu}/> <h6>منواصلی</h6>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}
