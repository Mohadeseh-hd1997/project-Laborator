import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "../../../utils/axios";
//mui 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, CssBaseline } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Grid from "@material-ui/core/Grid";
// component
import firspage from './FirstPage';
//hooks 
import { useForm } from "react-hook-form";
import { PATH_AUTH } from "../../../routes/paths";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
//img 
import key from '../../../img/key.svg';
import patternlogin from '../../../img/Patternlogin.svg';
import pand from '../../../img/pandLogo.svg';
import nz1 from '../../../img/nz1.svg';
import nz2 from '../../../img/nz2.svg';
import nz3 from '../../../img/nz3.svg';
import nz4 from '../../../img/nz4.svg';
//form manger
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";



const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        height: '1080px',
        alignItems: 'flex-start',
        [theme.breakpoints.up("xs")]: {
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
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
            justifyContent: "flex-start"
        },
        [theme.breakpoints.up("xl")]: {
            backgroundImage: `URL(${patternlogin})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: '600px 1000px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "flex-start"
        },
        [`& fieldset`]: {
            borderRadius: 12,
            textAlign: 'center',
        }
    }

}));

export default function OtpLogin() {
    const classes = useStyles();

    const navigate = useNavigate();

    const OtpSchema = Yup.object().shape({
        username: Yup.string().required('لطفا کد ملی خود را وارد کنید'),
    });

    const methods = useForm({
        resolver: yupResolver(OtpSchema)
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        try {
            await axios.get('/v1/account/user/login/otp?pk=' + data.username).then((response) => {
                localStorage.setItem('pk', data.username);
                navigate(PATH_AUTH.verify, { replace: true });
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
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Grid style={{ marginTop: 82 }} item xs={12} sm={9} className={classes.gridItem}
                    display={{ xs: "flex", lg: "flex" }}
                    alignContent="center"
                    alignItems='center'
                    marginRight='-192px'
                >
                    <img style={{ marginTop: 176 }} src={pand} width="142px" height='80px' />
                    <Typography variant='h4' style={{ color: '#3566DE', fontWeight: 'bolder', marginTop: 86 }}>
                        ورود با رمز یکبار مصرف
                    </Typography>

                    <Typography variant='span' style={{ color: '#6A6A6A', marginTop: 30, fontSize: 16 }}>
                        برای ورود به سامانه، شماره همراه خود را وارد کنید.
                    </Typography>
                    <RHFTextField
                        name="username"
                        InputLabelProps={{ shrink: false }}
                        sx={{ width: 335, textAlign: 'center', fontSize: 14 }}
                        placeholder="نام کاربری خود را وارد کنید"
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

                    <Button
                        type={'submit'}
                        variant='contained'
                        style={{
                            backgroundColor: '#1C39BB',
                            textAlign: 'center',
                            width: 190,
                            height: 50,
                            borderRadius: 12,
                            marginTop: 12,
                            fontSize: 16,
                            paddingTop: 15,
                            paddingBottom: 15
                        }}>
                        درخواست رمز
                    </Button>

                    <Link style={{ color: '#6A6A6A', marginTop: 36, textDecoration: 'none' }} component={firspage}
                        to={PATH_AUTH.login}>
                        -استفاده از نام کاربری و رمز عبور برای ورود-
                    </Link>

                    <img style={{
                        marginTop: 22,
                        textDecoration: 'none',
                        backgroundColor: '#E5E5E5',
                        borderRadius: 20,
                        paddingTop: 12.5,
                        paddingBottom: 12.5,
                        paddingRight: 17.5,
                        paddingLeft: 17.5
                    }} src={key} />
                    <div style={{ textAlign: 'center', marginTop: 39 }}>
                        <span style={{ fontSize: 12, color: '#6A6A6A' }}>کاربر جدید هستید ؟</span>

                        <Link style={{ fontSize: 12, color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}
                            to={PATH_AUTH.register}>
                            ایجاد حساب کاربری
                        </Link>
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
        </FormProvider>
    );
}
