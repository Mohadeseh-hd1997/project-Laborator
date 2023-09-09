import React from 'react';
import Slider from "react-slick";
//component
import TeethList from './TeethList';
//mui
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@mui/material';
//img
import contact from '../../../img/contact.svg';
import calenderReq from '../../../img/calenderReq.svg';
import doc4 from '../../../img/doc4.svg';
import drreq from '../../../img/drreq.svg';
import clinic from '../../../img/clinic.svg';
import contactBg from '../../../img/contactBg.svg';
import Warning from '../../../img/Warning.svg';
import Description from '../../../img/Description.svg';
import attach from '../../../img/attach.svg';
import eye from '../../../img/eye.svg';
import map from '../../../img/map.svg';
import smart from '../../../img/smart.svg';
//style--
const useStyles = makeStyles(() => ({
    root: {
        "& .MuiStepIcon-completed ": { color: "green" },
        "& .Mui-completed": { color: "green" },
        "& #doc-nav-info": '***'
    }
}));

export default function PreviewRequestList(props) {
    const docs = [
        { uri: require("../../../img/p2.png") },
        { uri: require("../../../img/p2.png") },
        { uri: require("../../../img/p1.png") },
        { uri: require("../../../img/p2.png") },
        { uri: require("../../../img/p2.png") },
    ];

    //slider setting 
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        easing: 'linear',
        rtl: true,
        dots: false,
        arrows: false,
        outline: false
    };

    return (
        <Box display='flex' flexDirection='column' maxWidth='1410px'  >
            <Box width='1282px' height='275px' textAlign='start' padding='24px' sx={{ backgroundImage: `url(${contactBg})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'Right', backgroundPositionY: '24px', boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)' }}>
                <Typography variant='p' sx={{ color: '#2143DD', fontWeight: 'bold', fontSize: '34px' }}>مرضیه شاهرخی</Typography>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '24px', marginBottom: '8px' }}>
                        <Box width='308.5px'>
                            <img src={contact} />
                            <Typography variant='p' marginRight='8px' sx={{ fontSize: '18px' }}>کد ملی :</Typography>
                            <Typography variant='p' marginRight='8px'>۰۹۲۱۲۳۴۵۶۷</Typography>
                        </Box>
                        <Box width='308.5px'>
                            <img src={contact} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>شماره تماس  :</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>۰۹۱۵۱۲۳۴۵۶۷</Typography>
                        </Box>
                        <Box width='308.5px'>
                            <img src={doc4} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>شماره پرونده  :</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>۳۲۴۹</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box width='308.5px'>
                            <img src={calenderReq} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>تاریخ ثبت:</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>۱۴۰۱/۱۱/۱۶</Typography>
                        </Box>
                        <Box width='308.5px'>
                            <img src={calenderReq} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>تاریخ تحویل:</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>۱۴۰۱/۱۱/۱۶</Typography>
                        </Box>
                        <Box width='308.5px'>
                            <img src={drreq} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>پزشک معالج:</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>دکتر رضا ملا</Typography>
                        </Box>
                        <Box width='308.5px'>
                            <img src={clinic} />
                            <Typography variant='p' marginRight='8px' fontSize='18px'>کلینیک:</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='24px'>اسمارت (مشهد)</Typography>
                        </Box>
                    </Box>
                    {props.Bridge ?
                        <Box sx={{ marginTop: '16px', borderRadius: '4px', height: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundImage: 'linear-gradient(45deg, #C30000, #8A0000)' }}>
                            <Box width='6px' sx={{ borderRadius: '4px', backgroundColor: '#C30000', height: 'inherit' }}></Box>
                            <img src={Warning} style={{ marginRight: '11px', padding: '8px', borderRadius: '50px', backgroundColor: '#a03333' }} />
                            <Typography variant='p' fontSize='18px' fontWeight='700' marginRight='11px' color='#FFFFFF'>دستور درمان دارای Bridge می‌باشد.</Typography>
                        </Box>
                        : ''}
                </Box>
            </Box>

            <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center' sx={{ backgroundImage: `url(${map})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'left', boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)', borderRadius: '8px' }} paddingX='24px' paddingY='54px' width='1282px' height='208px' textAlign='start' marginTop='32px' marginBottom='47px'>

                <Box>
                    <img src={smart} />
                </Box>
                <Box>
                    <Typography fontSize='29px' fontWeight='900' sx={{ color: '#2143DD' }}>لابراتوار دیجیتال اسمارت مشهد</Typography>
                    <Typography fontSize='16px' fontWeight='700'>
                        <Typography fontSize='16px' fontWeight='400' sx={{ color: '#4C4C4C' }}>
                            آدرس
                        </Typography>
                        مشهد، بلوار هفت تیر، هفت تیر ۱، پلاک ۸۴
                    </Typography>
                </Box>

            </Box>

            <Box sx={{ boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)', borderRadius: '8px' }} width='1282px' height='469px' textAlign='start' marginTop='32px' marginBottom='47px'>
                < TeethList />

            </Box>
            <Box sx={{ boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)', borderRadius: '8px' }} width='1282px' height='313px' textAlign='start' paddingX='40px' paddingY='32px'>
                <Box>
                    <Typography fontWeight='700' fontSize='24px' textalign='start'>توضیحات و پیوست</Typography>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='16px'>
                    <Box width='40%' display='flex' flexDirection='row' justifyContent='space-between' alignItems='flex-start' paddingLeft='24px'>
                        <img src={Description} />
                        <Typography

                            sx={{ color: '#4C4C4C', marginRight: '8px' }} lineHeight='36px' fontWeight='400' fontSize='18px' textalign='start'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </Typography>

                    </Box>
                    <Box width='60%' borderRight='1px solid #E5E5E5' paddingY='8px' paddingRight='32px' paddingLeft='10px' >
                        <Box display='flex' flexDirection='row' justifyContent='flex-start' marginLeft='8px'>
                            <img src={attach} />
                            <Typography fontSize='18px' fontWeight='500' marginRight='8px'>پیوست ها</Typography>
                        </Box>
                        <Box textalign='center' marginRight='87px'>
                            <Slider  {...settings}>
                                {docs.map(item =>
                                    <Box>
                                        <img src={item.uri} style={{ marginRight: '18px' }} />
                                        <Box display='flex' flexDirection='row' alignItems='center' sx={{ backgroundColor: '#E5E5E5' }} paddingX='14px' paddingY='12px' marginTop='10px' height='48px' width='152px' borderRadius='8px' >
                                            <img src={eye} style={{ marginRight: '18px' }} />
                                            <p style={{ fontSize: '14px' }}> STL|Scan42 </p>
                                        </Box>
                                    </Box>
                                )}
                            </Slider>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
