import React from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from 'prop-types';
// components
import NavGrid from "../../../../components/DentistProfile/NavGrid";
import {fNumber} from "../../../../utils/formatNumber";
// mui
import {makeStyles} from "@material-ui/core/styles";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Button,
    Card,
    Grid, Input, Modal,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
 // img 
import walletCardImage from '../../../../img/walletCardImage.svg'
import walletPlus from '../../../../icons/walletPlus.svg'
import walletReduce from '../../../../icons/walletReduce.svg'
// hooks 
import {RHFSelect, FormProvider} from "../../../../components/hook-form"
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";


const rows = [
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 1
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 2
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 2
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 2
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 2
    },
    {
        date: '۱۴۰۲/۱۲/۱۲',
        price: '۳۰٬۰۰۰٬۰۰۰',
        status: 2
    },
]


export default function Wallet(props) {


    const NewUserSchema = Yup.object().shape({
        country: Yup.string().required('country is required'),
    });

    const methods = useForm({
        resolver: yupResolver(NewUserSchema)
    });

    const {
        reset,
        watch,
        control,
        setValue1,
        handleSubmit,
        formState: {isSubmitting},
    } = methods;

    const style = {
        position: 'absolute',
        top: '460px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '536px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '502px',
        boxShadow: 24,
        outline: 'none',
        backgroundColor: '#fff',
    };
    const style1 = {
        position: 'absolute',
        top: '460px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '536px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '522px',
        boxShadow: 24,
        outline: 'none',
        backgroundColor: '#fff',
    };
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen1 = () => setOpen1(true);
    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);

    const {children, svalue, index, ...other} = props;

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const onSubmit = async () => {

    };


    return (
        <>
            <NavGrid/>
            <Box sx={{
                width: '1254px',
                height: 'content',
                marginRight: '24px',
            }}>
                <Card sx={{p: '48px'}}>
                    <Typography variant={'h4'} sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textAlignLast: 'right'
                    }}>
                        کیف پول
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderTop: 1,
                        borderColor: '#E5E5E5',
                        marginTop: '32px',
                        paddingTop: '32px'
                    }}>

                        <Grid container direction={'column'}>
                            <Grid item container direction={'row'}>
                                <Card sx={{
                                    width: '567px',
                                    height: '277px',
                                    backgroundImage: `url(${walletCardImage})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '8px'
                                }}>
                                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                        <Typography sx={{fontSize: '18px', color: '#fff'}}>موجودی اعتبار</Typography>
                                        <Typography sx={{fontSize: '54px', color: '#fff'}}>
                                            {fNumber(340000000)} ریال
                                        </Typography>
                                    </Box>
                                </Card>
                                <Grid container item direction={'column'}
                                      sx={{width: 'fit-content', marginRight: '24px'}}>

                                    <Button
                                        sx={{
                                            width: '567px',
                                            height: '134.5px',
                                            backgroundColor: '#2143DD',
                                            fontSize: '14px',
                                            color: '#fff'
                                        }}
                                        startIcon={<img src={walletPlus} style={{margin: '12px'}} alt={'icon'}/>}
                                        onClick={handleOpen}
                                    >
                                        افزایش موجودی
                                    </Button>
                                    <Button sx={{
                                        width: '567px',
                                        height: '134.5px',
                                        backgroundColor: '#EFF2FF',
                                        fontSize: '14px',
                                        color: '#2143DD',
                                        marginTop: '8px'
                                    }} startIcon={<img src={walletReduce} style={{margin: '12px'}} alt={'icon'}/>}
                                            onClick={handleOpen1}
                                    >
                                        برداشت از اعتبار
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container item sx={{marginTop: '32px', border: 0}}>
                                <Typography sx={{fontSize: '18px', fontWeight: 'bold'}}>تراکنش های اخیر</Typography>
                                <TableContainer
                                    sx={{
                                        borderTop: 1,
                                        borderColor: '#E5E5E5',
                                        height: '800px',
                                        overflowY: 'scroll',
                                        '&::-webkit-scrollbar': {
                                            width: '0.4em'
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: 'rgba(0,0,0,.1)',
                                            outline: '1px solid slategrey'
                                        }
                                    }}>
                                    <Table sx={{minWidth: 650, direction: 'rtl'}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    sx={{borderBottom: 0}}
                                                    width={'33%'}
                                                    align="center">
                                                    تاریخ پرداخت
                                                </TableCell>
                                                <TableCell
                                                    sx={{borderBottom: 0}}
                                                    width={'33%'}
                                                    align="center">
                                                    مبلغ
                                                </TableCell>
                                                <TableCell
                                                    sx={{borderBottom: 0}}
                                                    width={'34%'}
                                                    align="center">
                                                    نوع پرداختی
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.date}
                                                    sx={{
                                                        height: '62px',
                                                    }}
                                                >
                                                    <TableCell sx={{
                                                        p: 0,
                                                        color: '#666666',
                                                        fontSize: '17px',
                                                        fontWeight: 'bold',
                                                    }} align="center">{row.date}</TableCell>
                                                    <TableCell sx={{
                                                        p: 0,
                                                        color: '#666666',
                                                        fontSize: '17px',
                                                        fontWeight: 'bold'
                                                    }} align="center">{row.price}</TableCell>
                                                    <TableCell sx={{
                                                        p: 0,
                                                        color: '#666666',
                                                        fontSize: '17px',
                                                        fontWeight: 'bold'
                                                    }} align="center">
                                                        {row.status === (1) ?
                                                            <Typography sx={{color: '#C30000', fontSize: '17px'}}>
                                                                برداشت از اعتبار
                                                            </Typography>
                                                            :
                                                            <Typography sx={{color: '#00B998', fontSize: '17px'}}>
                                                                افزایش موجودی
                                                            </Typography>
                                                        }
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        <Modal
                            sx={{border: 'none'}}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Box sx={{
                                    borderBottom: 1,
                                    borderColor: '#E5E5E5',
                                    width: '456px',
                                    marginTop: '32px',
                                    paddingBottom: '10px'
                                }}>
                                    <Typography variant={'h4'} sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                    }}>
                                        افزایش موجودی
                                    </Typography>
                                </Box>
                                <AppBar
                                    position="static"
                                    sx={{
                                        boxShadow: 'none',
                                        borderRadius: '16px',
                                        backgroundColor: 'white',
                                        color: '#4D69E4',
                                        alignSelf: 'center',
                                        width: '100%'
                                    }}>
                                    <Tabs
                                        TabIndicatorProps={{
                                            style: {display: 'none'}
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                        visibleScrollbar="false"
                                        sx={{
                                            marginTop: '40px',
                                            marginRight: '40px',
                                            marginLeft: '40px',
                                            "& .MuiTab-root.Mui-selected": {
                                                color: '#2143DD',
                                                backgroundColor: '#EFF2FF'
                                            }
                                        }}
                                    >
                                        <Tab label="آنلاین"
                                             sx={{
                                                 width: '24px',
                                                 height: '48px',
                                                 borderRadius: '8px',
                                                 fontWeight: 'bold'
                                             }}/>
                                        <Tab label="فیش بانکی"
                                             sx={{
                                                 width: '24px',
                                                 height: '48px',
                                                 borderRadius: '8px',
                                                 fontWeight: 'bold'
                                             }}/>
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <Box
                                        style={{marginTop: '24px', width: '456px'}}
                                        role="tabpanel"
                                        hidden={svalue !== index}
                                        id={`simple-tabpanel-${index}`}
                                        aria-labelledby={`simple-tab-${index}`}
                                        {...other}
                                    >
                                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                            <p style={{fontSize: '12px', p: 2}}>
                                                شماره حساب
                                            </p>
                                            <select style={{
                                                fontSize: '14px',
                                                direction: 'rtl',
                                                width: '456px',
                                                height: '48px',
                                                borderRadius: '4px',
                                                borderColor: '#B1B1B1'
                                            }}>
                                                <option value={1}>انتخاب کنید</option>
                                                <option value={1}>انتخاب کنید</option>
                                            </select>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '40px'}}>
                                            <p style={{fontSize: '12px', p: 2}}>
                                                مبلغ
                                            </p>
                                            <Input sx={{
                                                fontSize: '14px',
                                                direction: 'rtl',
                                                width: '456px',
                                                height: '48px',
                                                borderRadius: '4px',
                                                border: 1,
                                                borderColor: '#B1B1B1',
                                            }}/>
                                        </Box>

                                        <Button sx={{
                                            width: '456px',
                                            height: '48px',
                                            backgroundColor: '#2143DD',
                                            marginTop: '40px',
                                            borderRadius: '8px',
                                            color: '#fff',

                                        }}>ساخت گروه</Button>
                                    </Box>
                                    <Box
                                        style={{marginTop: '24px'}}
                                        role="tabpanel"
                                        hidden={svalue !== index}
                                        id={`simple-tabpanel-${index}`}
                                        aria-labelledby={`simple-tab-${index}`}
                                        {...other}
                                    >
                                    </Box>
                                </SwipeableViews>
                            </Box>
                        </Modal>
                        <Modal
                            sx={{border: 'none'}}
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style1}>

                                <Box sx={{
                                    borderBottom: 1,
                                    borderColor: '#E5E5E5',
                                    width: '456px',
                                    marginTop: '32px',
                                    paddingBottom: '10px'
                                }}>
                                    <Typography variant={'h4'} sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                    }}>
                                        افزودن حساب
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '40px'}}>
                                    <p style={{fontSize: '12px', p: 2}}>
                                        نام بانک
                                    </p>
                                    <select style={{
                                        fontSize: '14px',
                                        direction: 'rtl',
                                        width: '456px',
                                        height: '48px',
                                        borderRadius: '4px',
                                        borderColor: '#B1B1B1'
                                    }}>
                                        <option value={1}>انتخاب کنید</option>
                                        <option value={1}>انتخاب کنید</option>
                                    </select>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '40px'}}>
                                    <p style={{fontSize: '12px', p: 2}}>
                                        شماره حساب
                                    </p>
                                    <Input sx={{
                                        fontSize: '14px',
                                        direction: 'rtl',
                                        width: '456px',
                                        height: '48px',
                                        borderRadius: '4px',
                                        border: 1,
                                        borderColor: '#B1B1B1',
                                    }}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '40px'}}>
                                    <p style={{fontSize: '12px', p: 2}}>
                                        شماره شبا
                                    </p>
                                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                        <Input sx={{
                                            fontSize: '14px',
                                            direction: 'rtl',
                                            width: '411px',
                                            height: '48px',
                                            borderRadius: '4px',
                                            border: 1,
                                            borderColor: '#B1B1B1',
                                        }}/>
                                        <p style={{
                                            border: '1px solid #B1B1B1',
                                            borderRadius: '4px',
                                            fontSize: '18px',
                                            width: '41px',
                                            height: '48px',
                                            margin: 0,
                                            marginRight: '4px'
                                        }}>
                                            <span style={{
                                                width: '41px',
                                                height: '48px',
                                                alignItems: 'center',
                                                placeContent: 'center'
                                            }}>
                                                IR
                                            </span>
                                        </p>
                                    </Box>
                                    <Button sx={{
                                        width: '456px',
                                        height: '48px',
                                        backgroundColor: '#2143DD',
                                        marginTop: '40px',
                                        borderRadius: '8px',
                                        color: '#fff',

                                    }}>ساخت گروه</Button>
                                </Box>
                            </Box>
                        </Modal>
                    </Box>
                </Card>
            </Box>
        </>
    );
}