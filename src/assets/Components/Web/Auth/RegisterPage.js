import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
// mui 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, CssBaseline } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import PasswordChecklist from "react-password-checklist"
import CallIcon from '@mui/icons-material/Call';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from "@material-ui/core/IconButton";
//component
import firspage from './FirstPage';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { dispatch } from "../../../redux/store";
// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { PATH_AUTH } from "../../../routes/paths";
//img
import patternlogin from '../../../img/Patternlogin.svg';
import nz1 from '../../../img/nz1.svg';
import nz2 from '../../../img/nz2.svg';
import nz3 from '../../../img/nz3.svg';
import nz4 from '../../../img/nz4.svg';
import pand from '../../../img/pandLogo.svg';
//components
import Iconify from "../../../components/Iconify";
//form magnager 
import * as Yup from "yup"; 



// style 
const useStyles = makeStyles((theme) => ({

    root: {
        alignItems: 'flex-start',
        [theme.breakpoints.up("xs")]: {
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
        },
        [theme.breakpoints.up("sm")]: {
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
        },
        [theme.breakpoints.up("md")]: {
            backgroundImage: 'none',

            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
        },
        [theme.breakpoints.up("lg")]: {
            backgroundImage: `URL(${patternlogin})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: '600px 1000px',

            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        [theme.breakpoints.up("xl")]: {
            backgroundImage: `URL(${patternlogin})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: '600px 1000px',

            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingTop: 5,
        paddingBottom: 70,

        [`& fieldset`]: {
            borderRadius: 12,
            textAlign: 'center',
        }
    },
    gridItem: {
        justifyContent: 'center'
    }
}));


export default function RegisterPage() {
    const classes = useStyles();

    const navigate = useNavigate();

    const [Valid, setValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const RegisterSchema = Yup.object().shape({
        username: Yup.string().required('لطفا کد ملی خود را وارد کنید'),
        phone_number: Yup.string().required('لطفا تلفن همراه خود را وارد کنید'),
        first_name: Yup.string().required('لطفا نام خود را وارد کنید'),
        last_name: Yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
    });

    const methods = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        try {
            await axios.post('/v1/account/user/register', {
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                phone_number: data.phone_number,
                password: data.password
            }).then((response) => {
                const { user } = response.data.user;
                window.localStorage.setItem('accessToken', response.data.access_token);
                window.localStorage.setItem('user', response.data.user);
                dispatch({
                    type: 'REGISTER',
                    payload: {
                        user,
                    },
                });
                localStorage.setItem('pk', data.username);
                localStorage.setItem('isLogin', false);
                navigate(PATH_AUTH.verify);
            }).catch(r => {
                console.error(r);
                toast.error(r, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        } catch (error) {
            console.log(error);
            toast.error('مشکلی پیش آمده است. لطفا دوباره امتحان کنید', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <CssBaseline />
            <Grid container className={classes.root}
            >
                <Grid item xs={12} sm={9} className={classes.gridItem}
                    display={{ xs: "flex", lg: "flex" }}
                    alignContent="center"
                    alignItems='center'
                >
                    <div style={{ marginTop: 170, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img width="142px" height="80px" src={pand} />
                        <Typography variant='p' style={{
                            color: '#1C39BB',
                            fontWeight: 'bolder',
                            marginTop: 27,
                            fontSize: '28px'
                        }}>
                            ثبت نام کاربر جدید
                        </Typography>
                        <Typography variant='span' style={{ color: '#6A6A6A', marginTop: 28, fontSize: 17 }}>
                            برای ثبت نام اطلاعات زیر را کامل کنید
                        </Typography>

                        <RHFTextField
                            name="first_name"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="نام"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineOutlinedIcon
                                            style={{
                                                fill: '#1C39BB',
                                                marginLeft: 10,
                                                marginRight: 23,
                                                marginTop: 0
                                            }} />
                                    </InputAdornment>
                                ),
                            }} />
                        <RHFTextField
                            name="last_name"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="نام خانوادگی"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineOutlinedIcon
                                            style={{
                                                fill: '#1C39BB',
                                                marginLeft: 10,
                                                marginRight: 23,
                                                marginTop: 0
                                            }} />
                                    </InputAdornment>
                                ),
                            }} />
                        <RHFTextField
                            name="username"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="نام کاربری"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineOutlinedIcon
                                            style={{
                                                fill: '#1C39BB',
                                                marginLeft: 10,
                                                marginRight: 23,
                                                marginTop: 0
                                            }} />
                                    </InputAdornment>
                                ),
                            }} />

                        <RHFTextField
                            name="phone_number"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="تلفن همراه"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        <CallIcon fontSize="medium"
                                            style={{ marginRight: 14, marginLeft: 10, fill: '#1C39BB' }} />
                                    </InputAdornment>
                                ),
                            }} />

                        <RHFTextField
                            name="password"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="رمز عبور"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon style={{ fill: '#1C39BB', marginRight: 10, marginLeft: 40 }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}
                                            edge="end">
                                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />

                        <RHFTextField
                            name="password1"
                            InputLabelProps={{ shrink: false }}
                            sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                            placeholder="تکرار رمز عبور"
                            type={showPassword1 ? 'text' : 'password'}
                            onChange={(e) => setPassword1(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon style={{ fill: '#1C39BB', marginRight: 10, marginLeft: 40 }} />

                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword1(!showPassword1)}
                                            edge="end">
                                            <Iconify icon={showPassword1 ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                        <PasswordChecklist
                            rules={["minLength", "number", "match"]}
                            minLength={8}
                            value={password}
                            valueAgain={password1}
                            onChange={(isValid) => {
                                setValid(isValid)
                            }}
                            messages={{
                                minLength: "رمر عبور باید بیشتر از 8 باشد.",
                                number: "رمز عبور باید شامل اعداد باشد.",
                                match: "رمز عبور همخوانی ندارد.",
                            }}
                            style={password === '' ? { display: 'none' } : {}}
                        />
                        <Button
                            type="submit"
                            variant='contained'
                            disabled={!Valid}
                            style={{
                                backgroundColor: '#1C39BB',
                                textAlign: 'center',
                                width: 190,
                                height: 50,
                                borderRadius: 12,
                                marginTop: 40,
                                fontSize: 16,
                                paddingTop: 15,
                                paddingBottom: 15
                            }}>
                            تایید ثبت نام
                        </Button>
                        <div style={{ marginTop: 39 }}>
                            <span style={{ color: '#6A6A6A' }}>دارای حساب کاربری هستید؟ </span>

                            <Link style={{ color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}
                                component={firspage} to="/LoginPage">
                                ورود به سامانه
                            </Link>

                        </div>
                        <div style={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <img src={nz4} />
                            <img src={nz3} />
                            <img src={nz2} />
                            <img src={nz1} />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <ToastContainer />
        </FormProvider>
    );
}
