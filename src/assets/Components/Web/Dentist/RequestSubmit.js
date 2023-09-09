import React, { useRef, useEffect, useState } from 'react';
import VerificationInput from "react-verification-input";
//component
import WorkOrderScreen from './WorkOrderScreen';
import PatientHistory from './PatientHistory';
import SelectLaboratorCard from './SelectLaboratorCard'; 
//mui 
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button, FormControl, TextField, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
//image
import digitalScan from '../../../img/digitalScan.svg';
import createWorkorder from '../../../img/createWorkorder.svg';
import contact from '../../../img/contact.svg';
import doc4 from '../../../img/doc4.svg';
import contactBg from '../../../img/contactBg.svg';
import scanReq from '../../../img/scanReq.svg';
import squre from '../../../img/squre.svg';


//style--
const useStyles = makeStyles(() => ({
    root: {
        "& .MuiStepIcon-completed ": { color: "green" },
        "& .Mui-completed": { color: "green" },
    },
    step_label_root: {
        paddingRight: '20px'
    },
    BoxShadow: {
        boxShadow: '1px -1px 112px -48px rgba(179,166,166,0.75)',
    },
    grid: {
        '&>.MuiDataGrid-main': {
            '&>.MuiDataGrid-columnHeaders': {
                borderBottom: 'none',
            },

            '& div div div div >.MuiDataGrid-cell': {
                borderBottom: 'none',
            },
        }
    }
    ,
    "& .slick-dots": {
        position: 'absolute',
        zIndex: 1,
        top: 20,
    },

}));


//step bar 
const steps = ['نحوه ثبت', 'جستجوی بیمار', 'انتخاب نوع ارسال', 'دستور درمان', 'انتخاب لابراتوار'];


export default function RequestSubmit(props) {
    const classes = useStyles();
    const [NewPatient, setNewPatient] = React.useState(false);
    const [showVerify, setShowVerify] = React.useState(false);
    const [PatientHistoryy, setPatientHistoryy] = React.useState(false);
    const [SelectLab, setSelectLab] = React.useState(false);
    //timer for recive message 
    const [value, setValue] = useState(null);
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const clearTimer = (e) => {

        setTimer('00:00:10');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }


    //form checkbox mange
    const [checkstate, setCheckstate] = React.useState({
        patientNumber: false,
        Nationalcode: false,
        man: false,
        women: false,

    });

    const checkhandleChange = (event) => {
        setCheckstate({
            ...checkstate,
            [event.target.name]: event.target.checked,
        });
    };

    const { patientNumber, Nationalcode, man, women } = checkstate;
    //stepper
    const formContent = (step) => {
        switch (step) {
            case 0:
                return <>
                    <Box textAlign='center' marginTop='100px'>
                        <Typography variant='p' sx={{ fontSize: '20px', fontWeight: 'bolder' }}>نحوه ثبت درخواست خود را
                            انتخاب کنید</Typography>
                    </Box>

                    <Box display='flex' flexDirection='row' justifyContent='center' alignContent='center'
                        alignItems='center' textAlign='center' marginTop='100px'>
                        <Button sx={{
                            marginLeft: '24px',
                            borderRadius: '8px', border: '1px solid #D2D9F8', width: '335px', height: '335px',
                            backgroundColor: '#EFF2FF', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center'
                        }}>
                            <img src={createWorkorder} />
                            <Typography variant='p' fontSize='16px' fontWeight='bolder' marginTop='56px'
                                color='#2143DD'>ثبت دستور کار جدید</Typography>
                        </Button>
                        <Button sx={{
                            borderRadius: '8px', border: '1px solid #D2D9F8', width: '335px', height: '335px',
                            backgroundColor: '#EFF2FF', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center'
                        }}>
                            <img src={digitalScan} />
                            <Typography variant='p' fontSize='16px' fontWeight='bolder' marginTop='56px'
                                color='#2143DD'>درخواست اسکن دیجیتال حضوری</Typography>
                        </Button>
                    </Box>
                </>;
            case 1:
                return <>
                    <Box textAlign='center' marginTop='146px'>
                        <Typography variant='p' sx={{ fontSize: '20px', fontWeight: 'bolder' }}>جهت دسترسی به سوابق بیمار
                            یکی از اطلاعات زیر را وارد نمایید</Typography>
                    </Box>

                    {NewPatient ?
                        <FormControl sx={{
                            marginTop: '48px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <Box sx={{ marginLeft: '16px' }}>
                                <TextField placeholder='نام' sx={{ width: '433px', height: '48px', marginTop: '16px' }}
                                    id="outlined-basic" fullWidth variant="outlined" />
                                <TextField placeholder='کدملی' sx={{ width: '433px', height: '48px', marginTop: '16px' }}
                                    id="outlined-basic" fullWidth variant="outlined" />
                                <TextField placeholder='شماره همراه'
                                    sx={{ width: '433px', height: '48px', marginTop: '16px' }} id="outlined-basic"
                                    fullWidth variant="outlined" />
                            </Box>

                            <Box>
                                <TextField placeholder='نام خانوادگی'
                                    sx={{ width: '433px', height: '48px', marginTop: '16px' }} id="outlined-basic"
                                    fullWidth variant="outlined" />

                                <Box sx={{
                                    width: '433px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    <TextField placeholder='روز'
                                        sx={{ width: '208px', height: '48px', marginTop: '16px' }}
                                        id="outlined-basic" fullWidth variant="outlined" />
                                    <TextField placeholder='ماه'
                                        sx={{ width: '208px', height: '48px', marginTop: '16px' }}
                                        id="outlined-basic" fullWidth variant="outlined" />
                                    <TextField placeholder='سال'
                                        sx={{ width: '208px', height: '48px', marginTop: '16px' }}
                                        id="outlined-basic" fullWidth variant="outlined" />
                                </Box>

                                <Box sx={{
                                    width: '433px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start'
                                }}>
                                    <Typography variant='p' sx={{
                                        marginRight: '8px',
                                        marginTop: '16px',
                                        fontSize: '12px'
                                    }}>جنسیت</Typography>
                                    <FormControlLabel sx={{ marginRight: '-30px', marginTop: '30px', fontSize: '12px' }}
                                        control={
                                            <Checkbox checked={man} onChange={checkhandleChange}
                                                name="Nationalcode" />
                                        }
                                        label="آقا"
                                    />
                                    <FormControlLabel sx={{ marginRight: '73px', marginTop: '30px', fontSize: '12px' }}
                                        control={
                                            <Checkbox checked={women} onChange={checkhandleChange}
                                                name="Nationalcode" />
                                        }
                                        label="خانم"
                                    />
                                </Box>
                            </Box>
                        </FormControl>
                        : (
                            <FormControl sx={{ marginTop: '48px' }}>
                                <FormControlLabel sx={{ marginRight: '-10px', marginTop: '16px', fontSize: '12px' }}
                                    control={
                                        <Checkbox disabled={Nationalcode === true} checked={patientNumber}
                                            onChange={checkhandleChange} name="patientNumber" />
                                    }
                                    label="شماره تماس بیمار"
                                />
                                <TextField disabled={Nationalcode === true}
                                    sx={{ width: '484px', height: '48px', marginTop: '8px' }} id="outlined-basic"
                                    fullWidth variant="outlined" />
                                <FormControlLabel sx={{ marginRight: '-10px', marginTop: '16px', fontSize: '12px' }}
                                    control={
                                        <Checkbox disabled={patientNumber === true} checked={Nationalcode}
                                            onChange={checkhandleChange} name="Nationalcode" />
                                    }
                                    label="کدملی بیمار"
                                />
                                <TextField disabled={patientNumber === true}
                                    sx={{ width: '484px', height: '48px', marginTop: '8px' }} id="outlined-basic"
                                    fullWidth variant="outlined" />
                            </FormControl>
                        )}
                    {NewPatient ? <Box marginTop='48px'>
                        <Button variant='contained' paddingBottom='12px' paddingTop='12px' paddingRight='24px'
                            paddingLeft='24px'>ثبت بیمار</Button>
                        <Button paddingBottom='12px' paddingTop='12px' paddingRight='24px' paddingLeft='24px'
                            onClick={() => setNewPatient(false)}>انصراف</Button>
                    </Box> : (<Box marginTop='48px'>
                        <Button variant='contained' paddingBottom='12px' paddingTop='12px' paddingRight='24px'
                            paddingLeft='24px'>جستجوی بیمار</Button>
                        <Button paddingBottom='12px' paddingTop='12px' paddingRight='24px' paddingLeft='24px'
                            onClick={() => setNewPatient(true)}> افزودن بیمار</Button>
                    </Box>
                    )}
                </>;
            case 2:
                return <Box>
                    {showVerify ?
                        <Box>
                            <p style={{ color: '#4C4C4C', marginTop: '146px', fontSize: '24px', fontWeight: 'bolder' }}>
                                کد تایید ارسال شده به شماره ۰۹۱۵۱۲۳۴۵۶۷ را وارد نمایید
                            </p>

                            <VerificationInput
                                length={4}
                                validChars={'0-9'}
                                autoFocus={true}
                                onComplete={(value) => {
                                    setValue(value);
                                }}
                                containerProps={{
                                    style: { direction: 'ltr', marginTop: 40, borderRadius: 20 }
                                }}
                            />

                            <Typography variant='span' style={{ color: '#6A6A6A', marginTop: 30, fontSize: 12 }}>
                                {timer} ارسال مجدد
                            </Typography>
                            <Box marginTop='48px'>
                                <Button variant='contained' sx={{ marginLeft: '8px', width: '83px', height: '48px', fontSize: '14px', fontWeight: '700', backgroundColor: '#1C39BB' }}>ثبت کد</Button>
                                <Button variant='contained' sx={{
                                    width: '125px', height: '48px', fontSize: '14px', fontWeight: '700', backgroundColor: '#EFF2FF', color: '#1C39BB',
                                    ":hover": {
                                        bgcolor: "#96bcdd",
                                        color: "#1C39BB"
                                    }
                                }}>ویرایش اطلاعات</Button>
                            </Box>
                        </Box> : (
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                {PatientHistoryy ? <PatientHistory/> :(
                                <>
                                <Box width='692px' height='157px' textAlign='start' padding='24px' marginTop='56px' sx={{ backgroundImage: `url(${contactBg})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '105%', backgroundPositionY: '1px', boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)' }}>
                                    <Box display='flex' flexDirection='row' justifyContent='space-between'>
                                        <Typography variant='p' sx={{ color: '#2143DD', fontWeight: '700', fontSize: '34px' }}>مرضیه شاهرخی</Typography>
                                        <Button onClick={() => setPatientHistoryy(true)} borderRadius='8px' paddingRight='24px' paddingLeft='24px' paddingTop='12px' paddingBottom='12px' variant='text' sx={{ backgroundColor: '#EFF2FF', width: '166px', fontSize: '16px', fontWeight: '700' }}>
                                            مشاهده سوابق بیمار
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '24px', marginBottom: '8px' }}>
                                            <Box width='194px'>
                                                <img src={contact} />
                                                <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>کد ملی :</Typography>
                                                <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۰۹۲۱۲۳۴۵۶۷</Typography>
                                            </Box>
                                            <Box width='263px'>
                                                <img src={contact} />
                                                <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>شماره تماس  :</Typography>
                                                <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۰۹۱۵۱۲۳۴۵۶۷</Typography>
                                            </Box>
                                            <Box width='167px'>
                                                <img src={doc4} />
                                                <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>شماره پرونده  :</Typography>
                                                <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۳۲۴۹</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box marginTop='48px'>
                                    <Typography variant='p' sx={{ color: '#4C4C4C', fontWeight: '700', fontSize: '20px' }}>نوع ارسال را انتخاب  کنید</Typography>
                                </Box>
                                <Box display='flex' flexDirection='row' justifyContent='center' alignContent='center'
                                    alignItems='center' textAlign='center' marginTop='48px'>
                                    <Button onClick={() => setShowVerify(true)}
                                        sx={{
                                            marginLeft: '24px',
                                            borderRadius: '8px', border: '1px solid #D2D9F8', width: '335px', height: '335px',
                                            backgroundColor: '#EFF2FF', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                            alignContent: 'center', alignItems: 'center'
                                        }}>
                                        <img src={squre} />
                                        <Typography variant='p' fontSize='16px' fontWeight='bolder' marginTop='56px'
                                            color='#2143DD'>ارسال قالب سنتی </Typography>
                                    </Button>
                                    <Button onClick={() => setShowVerify(true)}
                                        sx={{
                                            borderRadius: '8px', border: '1px solid #D2D9F8', width: '335px', height: '335px',
                                            backgroundColor: '#EFF2FF', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                            alignContent: 'center', alignItems: 'center'
                                        }}>
                                        <img src={scanReq} />
                                        <Typography variant='p' fontSize='16px' fontWeight='bolder' marginTop='56px'
                                            color='#2143DD'>ارسال اسکن دیجیتال</Typography>
                                    </Button>
                                </Box>
      </>  )}
                            </Box>
                        )
                    }
                </Box>;
            case 3:
                return <>
                    <Box textAlign='center' marginTop='100px'>
                        <Typography variant='p' sx={{ fontSize: '20px', fontWeight: 'bolder' }}> دندان را انتخاب کنید و
                            دستور درمان را انجام دهید </Typography>
                    </Box>

                    <Box display='flex' flexDirection='row' justifyContent='center' alignContent='center'
                        alignItems='center' textAlign='center' marginTop='100px'>
                        <WorkOrderScreen />
                    </Box>
                </>;
            default:
                return <SelectLaboratorCard/>
        }
    };
    const [activeStepCount, setActiveStepCount] = React.useState(0);
    const [skip, setSkip] = React.useState(new Set());
    const optionalStep = (step) => {
        return step === 1;
    };


    const skipStep = (step) => {
        return skip.has(step);
    };

    const handleStepNext = () => {
        let newSkipped = skip;
        if (skipStep(activeStepCount)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStepCount);
        }

        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
        setSkip(newSkipped);
    };

    const handleStepBack = () => {
        setActiveStepCount((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepSkip = () => {

        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
        setSkip((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStepCount);
            return newSkipped;
        });
    };

    const handleStepReset = () => {
        setActiveStepCount(0);
    };

    return (
        <Box maxWidth='1410px'>
            <Box display={'flex'} flexDirection={'row'}
                sx={{ backgroundColor: 'white', borderRadius: '8px', height: '105px', alignItems: 'center' }}>
                <svg width="100" height="90" viewBox="-10 -5 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.2105 0.750004H68.7895C71.3813 0.749916 73.6172 0.74984 75.4589 0.900309C77.4027 1.05912 79.336 1.40976 81.1964 2.35766C83.9717 3.7718 86.2282 6.02826 87.6424 8.80365C88.5903 10.664 88.9409 12.5973 89.0997 14.5411C89.2502 16.3827 89.2501 18.6186 89.25 21.2104V68.7896C89.2501 71.3814 89.2502 73.6173 89.0997 75.4589C88.9409 77.4027 88.5903 79.336 87.6424 81.1964C86.2282 83.9718 83.9718 86.2282 81.1964 87.6424C79.336 88.5903 77.4027 88.9409 75.4589 89.0997C73.6173 89.2502 71.3814 89.2501 68.7896 89.25H21.2104C18.6186 89.2501 16.3827 89.2502 14.5411 89.0997C12.5973 88.9409 10.664 88.5903 8.80365 87.6424C6.02826 86.2282 3.7718 83.9717 2.35766 81.1964C1.40976 79.336 1.05912 77.4027 0.900309 75.4589C0.74984 73.6172 0.749916 71.3813 0.750004 68.7895V21.2105C0.749916 18.6187 0.74984 16.3828 0.900309 14.5411C1.05912 12.5973 1.40976 10.664 2.35766 8.80365C3.7718 6.02826 6.02826 3.7718 8.80365 2.35766C10.664 1.40976 12.5973 1.05912 14.5411 0.900309C16.3828 0.74984 18.6187 0.749916 21.2105 0.750004ZM10.5833 59.75V68.6C10.5833 71.4347 10.5872 73.2651 10.701 74.6581C10.8101 75.9938 10.9954 76.489 11.1192 76.7321C11.5906 77.6573 12.3428 78.4094 13.2679 78.8808C13.511 79.0047 14.0062 79.1899 15.3419 79.299C16.7349 79.4129 18.5653 79.4167 21.4 79.4167H68.6C71.4347 79.4167 73.2651 79.4129 74.6581 79.299C75.9938 79.1899 76.489 79.0047 76.7321 78.8808C77.6573 78.4094 78.4094 77.6573 78.8808 76.7321C79.0047 76.489 79.1899 75.9938 79.299 74.6581C79.4129 73.2651 79.4167 71.4347 79.4167 68.6V59.75H71.1836C68.5445 59.75 68.0262 59.7816 67.592 59.8859C67.0903 60.0063 66.6107 60.2049 66.1708 60.4745C65.7901 60.7079 65.4012 61.052 63.5351 62.9181L62.9181 63.5351C62.8208 63.6324 62.7244 63.729 62.6287 63.8249C61.2154 65.2408 59.9693 66.4892 58.4671 67.4098C57.1474 68.2185 55.7086 68.8145 54.2036 69.1758C52.4904 69.5871 50.7266 69.5855 48.726 69.5836C48.5906 69.5835 48.4541 69.5833 48.3164 69.5833H41.6836C41.546 69.5833 41.4094 69.5835 41.274 69.5836C39.2735 69.5855 37.5096 69.5871 35.7965 69.1758C34.2914 68.8145 32.8526 68.2185 31.5329 67.4098C30.0307 66.4892 28.7846 65.2408 27.3714 63.8249C27.2757 63.7291 27.1792 63.6324 27.0819 63.5351L26.4649 62.9181C24.5988 61.052 24.21 60.7079 23.8292 60.4745C23.3893 60.2049 22.9097 60.0063 22.408 59.8859C21.9738 59.7816 21.4556 59.75 18.8164 59.75H10.5833ZM79.4167 49.9167H71.1836C71.046 49.9167 70.9095 49.9165 70.774 49.9164C68.7735 49.9146 67.0096 49.9129 65.2965 50.3242C63.7914 50.6855 62.3526 51.2815 61.0329 52.0902C59.5307 53.0108 58.2846 54.2592 56.8713 55.6751C56.7757 55.771 56.6792 55.8676 56.5819 55.9649L55.9649 56.5819C54.0987 58.4481 53.71 58.7922 53.3292 59.0255C52.8893 59.2951 52.4097 59.4937 51.908 59.6142C51.4738 59.7184 50.9556 59.75 48.3164 59.75H41.6836C39.0445 59.75 38.5262 59.7184 38.092 59.6142C37.5903 59.4937 37.1107 59.2951 36.6708 59.0255C36.2901 58.7922 35.9013 58.4481 34.0351 56.5819L33.4181 55.9649C33.3208 55.8676 33.2244 55.771 33.1287 55.6751C31.7154 54.2592 30.4693 53.0108 28.9671 52.0902C27.6474 51.2815 26.2086 50.6855 24.7036 50.3242C22.9904 49.9129 21.2265 49.9146 19.226 49.9164C19.0905 49.9165 18.954 49.9167 18.8164 49.9167H10.5833V21.4C10.5833 18.5653 10.5872 16.7349 10.701 15.3419C10.8101 14.0062 10.9954 13.511 11.1192 13.2679C11.5906 12.3428 12.3428 11.5906 13.2679 11.1192C13.511 10.9954 14.0062 10.8101 15.3419 10.701C16.7349 10.5872 18.5653 10.5833 21.4 10.5833H68.6C71.4347 10.5833 73.2651 10.5872 74.6581 10.701C75.9938 10.8101 76.489 10.9954 76.7321 11.1192C77.6573 11.5906 78.4094 12.3428 78.8808 13.2679C79.0047 13.511 79.1899 14.0062 79.299 15.3419C79.4129 16.7349 79.4167 18.5653 79.4167 21.4V49.9167ZM45 15.5C47.7154 15.5 49.9167 17.7013 49.9167 20.4167V30.25H59.75C62.4654 30.25 64.6667 32.4513 64.6667 35.1667C64.6667 37.8821 62.4654 40.0833 59.75 40.0833H49.9167V49.9167C49.9167 52.6321 47.7154 54.8333 45 54.8333C42.2846 54.8333 40.0833 52.6321 40.0833 49.9167V40.0833H30.25C27.5346 40.0833 25.3333 37.8821 25.3333 35.1667C25.3333 32.4513 27.5346 30.25 30.25 30.25H40.0833V20.4167C40.0833 17.7013 42.2846 15.5 45 15.5Z"
                        fill="#F5F5F5" />
                </svg>
                <Typography variant='p'
                    sx={{ color: '#2143DD', fontWeight: 'bolder', paddingRight: '34px', fontSize: '34px' }}>

                    ثبت درخواست جدید</Typography>
            </Box>

            <Box display={'flex'} flexDirection={'column'} sx={{
                width: 'content',
                marginTop: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                height: 'content',
                paddingTop: '48px',
             
                paddingBottom: '56px'
            }}>
                <Box>
                    <center>

                        <div style={{ width: "100%" }}>
                            <Stepper activeStep={activeStepCount} sx={{width:'60%'}}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};

                                    if (skipStep(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step
                                            sx={{
                                                '& .MuiStepLabel-root .Mui-completed': {
                                                    color: '#00826B', // circle color (COMPLETED)
                                                },
                                                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                                                {
                                                    color: '#00826B', // Just text label (COMPLETED)
                                                },
                                                '& .MuiStepLabel-root .Mui-active': {
                                                    color: '#2143DD', // circle color (ACTIVE)
                                                },
                                                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                                                {
                                                    color: 'common.white', // Just text label (ACTIVE)
                                                }
                                            }}
                                            key={label} {...stepProps}>
                                            <StepLabel classes={{ label: classes.step_label_root }}  {...labelProps}>
                                                {label}
                                            </StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <div>
                                {formContent(activeStepCount)}
                                <Box sx={{
                                    display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',
                                    pt: 2
                                }}>
                                    <Button
                                        variant='contained'
                                        color="primary"
                                        disabled={activeStepCount === 0}
                                        onClick={handleStepBack}
                                        sx={{ mt: 5 }}
                                    >
                                        صفحه قبلی
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />

                                    <Button variant='contained' sx={{ mt: 5 }} onClick={handleStepNext}>
                                        {activeStepCount === steps.length - 1 ?
                                            'تایید' : 'صفحه بعدی'}
                                    </Button>
                                </Box>
                            </div>
                        </div>
                    </center>
                </Box>
            </Box>
        </Box>
    )
}
