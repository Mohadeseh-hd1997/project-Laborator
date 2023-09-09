import Card from "@mui/material/Card";
import rezaMolla from "../../img/rezaMolla.svg";
import React from "react";
import {Box, Button, Grid, IconButton, Modal, Typography} from "@mui/material";
import penSquare from '../../img/penSquare.svg'
import backModalSubscribtion from '../../img/backModalSubscribtion.svg'
import pandModalLogo from '../../img/pandModalLogo.svg';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


export default function ProfileCard() {

    const style = {
        position: 'absolute',
        top: '460px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '570px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '750px',
        boxShadow: 24,
        backgroundImage: `url(${backModalSubscribtion})`,
        outline: 'none'
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <img
                style={{
                    minWidth: '150px',
                    minHeight: '154px',
                    zIndex: 2,
                    position: 'relative',
                    top: '100px',
                    right: '100px',
                    fit: 'crop'
                }}
                src={rezaMolla}
                alt={'dentist img'}
            />

            <Card sx={{
                width: '402px',
                height: '482px',
                borderRadius: 1,
                textAlign: 'center',
            }}>
                <Modal
                    sx={{border: 'none'}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <img
                            style={{
                                minWidth: '570px',
                                zIndex: -1,
                                position: 'absolute',
                            }}
                            width={'620px'}
                            src={pandModalLogo}
                            alt={'pandModalLogo'}
                        />

                        <Box sx={{marginTop: '80px'}}>
                            <img
                                style={{
                                    maxWidth: '150px',
                                    maxHeight: '150px',
                                }}
                                src={rezaMolla}
                                alt={'dentist img'}
                            />
                            <Typography
                                sx={{color: '#fff', fontWeight: 'bolder', fontSize: '34px'}}>
                                دکتر رضا ملا
                            </Typography>
                            <Typography sx={{color: '#fff', fontWeight: 'bolder', fontSize: '18px'}}>
                                پریودنتیست | ارتودنتیست
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'rgb(217,217,217,0.3)',
                            borderRadius: '10px',
                            width: '470px',
                            marginTop: '76px',
                            alignItems: 'center',
                            color: '#fff'
                        }}>
                            <SpeedIcon sx={{marginRight: '10px'}}/>
                            <p style={{
                                marginRight: '13px',
                                fontSize: '22px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>نوع اشتراک : </p>
                            <p style={{
                                float: 'left',
                                marginInlineStart: 'auto',
                                marginLeft: '41px',
                                fontSize: '18px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>اشتراک 1 ساله ویژه</p>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'rgb(217,217,217,0.3)',
                            borderRadius: '10px',
                            width: '470px',
                            alignItems: 'center',
                            color: '#fff',
                            marginTop: '22px'
                        }}>
                            <AccessAlarmIcon sx={{marginRight: '10px'}}/>
                            <p style={{
                                marginRight: '13px',
                                fontSize: '22px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>مدت زمان باقی مانده اشتراک :</p>
                            <p style={{
                                float: 'left',
                                marginInlineStart: 'auto',
                                marginLeft: '41px',
                                fontSize: '18px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>۸ ماه و ۱۳ روز دیگر</p>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'rgb(217,217,217,0.3)',
                            borderRadius: '10px',
                            width: '470px',
                            alignItems: 'center',
                            color: '#fff',
                            marginTop: '22px'
                        }}>
                            <CloudQueueIcon sx={{marginRight: '10px'}}/>
                            <p style={{
                                marginRight: '13px',
                                fontSize: '22px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>مقدار حجم باقی مانده از فضای شما :</p>
                            <p style={{
                                float: 'left',
                                marginInlineStart: 'auto',
                                marginLeft: '41px',
                                fontSize: '18px',
                                p: 0,
                                marginTop: '14px',
                                marginBottom: '14px'
                            }}>۵ گیگابایته</p>
                        </Box>
                        <Button sx={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            marginTop: '60px',
                            width: '120px'
                        }}>
                            تغییر / تمدید اشتراک
                        </Button>
                        <Button sx={{
                            marginTop: '12px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            width: '120px'
                        }}>
                            پشتیبانی
                        </Button>
                    </Box>
                </Modal>


                <Box sx={{marginRight: '24px', marginLeft: '24px'}}>
                    <Box sx={{width: '354px', height: 'content'}}>
                        <Grid container direction={'column'}>
                            <Box sx={{paddingTop: '100px', mb:'8px'}}>
                                <Typography variant={'p'}
                                            sx={{color: '#2143DD', fontWeight: 'bolder', fontSize: '34px'}}>
                                    دکتر رضا ملا
                                </Typography>
                                <IconButton aria-label="delete" size="small">
                                    <img src={penSquare}/>
                                </IconButton>
                            </Box>
                            <Typography variant={'p'} sx={{color: '#000', fontWeight: 'bolder', fontSize: '18px'}}>
                                پریودنتیست | ارتودنتیست
                            </Typography>
                        </Grid>
                    </Box>

                    <Box sx={{marginTop: '32px', justifyContent: 'center'}}>
                        <Grid container xs={12} sm={12}
                              margin={'10px'}
                              display={{xs: "flex", lg: "flex"}}
                              direction="column"
                              alignContent="center"
                              alignItems='center'
                              justifyContent={'center'}
                              rowGap={4}>
                            <Typography variant={'p'} sx={{color: '#000', fontSize: '16px'}}>
                                <Button variant="contained"
                                        sx={{
                                            width: '354px',
                                            height: '67px',
                                            fontSize: 20,
                                            background: 'linear-gradient(45deg, #8A0FA7,#460366)'
                                        }}
                                        onClick={handleOpen}
                                    // startIcon={<Icon2/>}
                                >مشاهده
                                    اشتراک</Button>
                            </Typography>
                            <Typography variant={'p'} sx={{color: '#000', fontSize: '16px',p:'8px'}}>
                                شماره پروانه  ۲۲۲ - ۱۰۸۳۹۲ - ۱۲۰
                            </Typography>
                            <Typography variant={'p'} sx={{color: '#000', fontSize: '16px',p:'8px'}}>
                                ناریخ انقضا  1402/05/08
                            </Typography>
                            <Typography variant={'p'} sx={{color: '#000', fontSize: '16px',p:'8px'}}>
                                ناریخ صدور  1402/05/08
                            </Typography>
                            <Typography variant={'p'} sx={{color: '#000', fontSize: '16px',p:'8px'}}>
                                تاریخ صدور  1402/05/08
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
            </Card>
        </>
    );
}