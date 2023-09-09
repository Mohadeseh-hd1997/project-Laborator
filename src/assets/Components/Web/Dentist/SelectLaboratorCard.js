import React from 'react'
//mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
//slider
import Slider from "react-slick";
//img 
import smartLab1 from '../../../img/smartLab.png';
import smartLab2 from '../../../img/smartLab2.png';
import smartLab3 from '../../../img/smartLab3.png';
import location from '../../../img/location.svg';
//rating label

const labels = {

    1: '۱',
    1.5: '۱.۵',
    2: '۲',
    2.5: '۲.۵',
    3: '۳',
    3.5: '۳.۵',
    4: '۴',
    4.5: '۴.۵',
    5: '۵',
};
//Data

const Data = [
    {
        img: smartLab1,
        location: 'مشهد',
        clinicName: 'اسمارت',
        rate: 5
    },
    {
        img: smartLab2,
        location: 'یزذ',
        clinicName: 'اسمارت',
        rate: 3.5
    },
    {
        img: smartLab3,
        location: 'تبریز',
        clinicName: 'فرداد',
        rate: 4.5
    },
    {
        img: smartLab1,
        location: 'اصفهان',
        clinicName: 'نواندیشان',
        rate: 4
    },
    {
        img: smartLab2,
        location: 'تهران',
        clinicName: 'رهام',
        rate: 1
    },
    {
        img: smartLab3,
        location: 'شیراز',
        clinicName: 'فردا',
        rate: 2.5
    }
]

export default function SelectLaboratorCard() {
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        easing: 'linear',

    };
    return (
        <Box maxwidth='1410px' paddingRight='24px' paddingLeft='24px'>
            <Typography marginTop='96px' marginBottom='40px' textAlign='right' fontSize='24px' fontWeight='700' variant="p" component="div">لابراتوار هایی که اخیرا به آنها درخواست داده اید </Typography>

            <Slider {...settings}>

                {Data.map((item) => (
                    <Card sx={{ maxWidth: '438px', marginRight: '24px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt="Paella dish"
                                sx={{ borderRadius: '16px' }}
                            />
                            <CardContent sx={{ textAlign: 'left', padding: '24px' }}>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row !important',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Rating
                                            name="text-feedback"
                                            value={item.rate}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Typography gutterBottom variant="h6" component="div">{labels[item.rate]}</Typography>

                                    </Box>
                                    <Typography fontSize='24px' fontWeight='700' variant="p" component="div">
                                        {item.clinicName}
                                    </Typography>



                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-start',
                                        alignContent: 'flex-start',
                                        marginTop: '25px'
                                    }}
                                >

                                    <Typography fontSize='18px' fontWeight='500' marginRight='4px' variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                    <img src={location} />
                                </Box>

                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ textAlign: 'right', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '24px' }}>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='text'>
                                مشاهده پروفایل
                            </Button>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='contained'>
                                ارسال درخواست
                            </Button>

                        </CardActions>
                    </Card>
                ))}
            </Slider>

            <Typography marginTop='96px' marginBottom='40px' textAlign='right' fontSize='24px' fontWeight='700' variant="p" component="div">برترین لابراتوار‌ها</Typography>

            <Slider {...settings}>

                {Data.map((item) => (
                    <Card sx={{ maxWidth: '438px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt="Paella dish"
                                sx={{ borderRadius: '16px' }}
                            />
                            <CardContent sx={{ textAlign: 'left', padding: '24px' }}>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row !important',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Rating
                                            name="text-feedback"
                                            value={item.rate}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Typography gutterBottom variant="h6" component="div">{labels[item.rate]}</Typography>

                                    </Box>
                                    <Typography fontSize='24px' fontWeight='700' variant="p" component="div">
                                        {item.clinicName}
                                    </Typography>



                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-start',
                                        alignContent: 'flex-start',
                                        marginTop: '25px'
                                    }}
                                >

                                    <Typography fontSize='18px' fontWeight='500' marginRight='4px' variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                    <img src={location} />
                                </Box>

                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ textAlign: 'right', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '24px' }}>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='text'>
                                مشاهده پروفایل
                            </Button>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='contained'>
                                ارسال درخواست
                            </Button>

                        </CardActions>
                    </Card>
                ))}
            </Slider>


            <Typography marginTop='96px' marginBottom='40px' textAlign='right' fontSize='24px' fontWeight='700' variant="p" component="div">لابراتوار‌های جدید</Typography>

            <Slider {...settings}>

                {Data.map((item) => (
                    <Card sx={{ maxWidth: '438px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt="Paella dish"
                                sx={{ borderRadius: '16px' }}
                            />
                            <CardContent sx={{ textAlign: 'left', padding: '24px' }}>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row !important',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Rating
                                            name="text-feedback"
                                            value={item.rate}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Typography gutterBottom variant="h6" component="div">{labels[item.rate]}</Typography>

                                    </Box>
                                    <Typography fontSize='24px' fontWeight='700' variant="p" component="div">
                                        {item.clinicName}
                                    </Typography>



                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-start',
                                        alignContent: 'flex-start',
                                        marginTop: '25px'
                                    }}
                                >

                                    <Typography fontSize='18px' fontWeight='500' marginRight='4px' variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                    <img src={location} />
                                </Box>

                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ textAlign: 'right', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '24px' }}>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='text'>
                                مشاهده پروفایل
                            </Button>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='contained'>
                                ارسال درخواست
                            </Button>

                        </CardActions>
                    </Card>
                ))}
            </Slider>



            <Typography marginTop='96px' marginBottom='40px' textAlign='right' fontSize='24px' fontWeight='700' variant="p" component="div">در شهر شما</Typography>

            <Slider {...settings}>

                {Data.map((item) => (
                    <Card sx={{ maxWidth: '438px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt="Paella dish"
                                sx={{ borderRadius: '16px' }}
                            />
                            <CardContent sx={{ textAlign: 'left', padding: '24px' }}>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row !important',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Rating
                                            name="text-feedback"
                                            value={item.rate}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Typography gutterBottom variant="h6" component="div">{labels[item.rate]}</Typography>

                                    </Box>
                                    <Typography fontSize='24px' fontWeight='700' variant="p" component="div">
                                        {item.clinicName}
                                    </Typography>



                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexdiretion: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-start',
                                        alignContent: 'flex-start',
                                        marginTop: '25px'
                                    }}
                                >

                                    <Typography fontSize='18px' fontWeight='500' marginRight='4px' variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                    <img src={location} />
                                </Box>

                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ textAlign: 'right', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '24px' }}>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='text'>
                                مشاهده پروفایل
                            </Button>
                            <Button sx={{ borderRadius: '8px', width: '191px', height: '48px', fontWeight: '700', fontSize: '14px' }} variant='contained'>
                                ارسال درخواست
                            </Button>

                        </CardActions>
                    </Card>
                ))}
            </Slider>
        </Box>
    )
}
