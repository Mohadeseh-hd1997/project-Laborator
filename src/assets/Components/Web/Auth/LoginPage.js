import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
// mui
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Button, CssBaseline} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
//components
import firspage from './FirstPage';
import Iconify from '../../../components/Iconify';
// img
import patternlogin from '../../../img/Patternlogin.svg';
import pand from '../../../img/pandLogo.svg';
import mobileLogin from '../../../img/mobileLogin.svg';
import nz1 from '../../../img/nz1.svg';
import nz2 from '../../../img/nz2.svg';
import nz3 from '../../../img/nz3.svg';
import nz4 from '../../../img/nz4.svg';
// hooks
import {FormProvider, RHFTextField} from "../../../components/hook-form";
import useAuth from "../../../hooks/useAuth";
import {useForm} from 'react-hook-form';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import {PATH_AFTER_LOGIN, PATH_AUTH} from "../../../routes/paths";
//form manager
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';


const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 184
    },
    root: {

        alignItems: 'flex-start',
        [theme.breakpoints.up("xs")]: {
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
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


export default function LoginPage() {

    const {login} = useAuth();

    const isMountedRef = useIsMountedRef();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('لطفا کد ملی خود را وارد کنید'),
        password: Yup.string().required('لطفا رمز عبور خود را وارد کنید'),
    });

    const methods = useForm({
        resolver: yupResolver(LoginSchema)
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = methods;

    const onSubmit = async (data) => {
        try {
            await login(data.username, data.password);
            navigate(PATH_AFTER_LOGIN, {replace: true});

        } catch (error) {
            console.error(error.response.data);

            toast.error('  !نام کاربری یا رمز عبور اشتباه است', {
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

    const classes = useStyles();

    return (
        <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
            <CssBaseline/>
            <Grid container className={classes.root}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
            >
                <Grid item xs={12} sm={9} className={classes.gridItem}
                      display={{xs: "flex", lg: "flex"}}
                      alignContent="center"
                      alignItems='center'
                >
                    <img style={{marginTop: 174}} src={pand} width="142px" height='80px'/>
                    <Typography variant='p'
                                style={{color: '#3566DE', fontWeight: 'bolder', marginTop: 40, fontSize: 24}}>
                        درود بر شما !
                    </Typography>
                    <Typography variant='span' style={{color: '#6A6A6A', marginTop: 30, fontSize: 16}}>
                        برای ورود به سامانه اطلاعات خود را وارد کنید
                    </Typography>
                    <RHFTextField
                        name="username"
                        InputLabelProps={{shrink: false}}
                        sx={{width: 335, textAlign: 'center', fontSize: 14}}
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
                                        }}/>
                                </InputAdornment>
                            ),
                        }}/>

                    <RHFTextField
                        name="password"
                        InputLabelProps={{shrink: false}}
                        sx={{width: 335, textAlign: 'center', fontSize: 14}}
                        placeholder="رمز عبور"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon style={{fill: '#1C39BB', marginRight: 10, marginLeft: 40}}/>

                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}
                                                edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}/>
                    <Link style={{color: '#6A6A6A', textDecoration: 'none', marginTop: 17, fontSize: 13}}
                          to={PATH_AUTH.resetPassword}>
                        فراموشی رمز عبور ؟
                    </Link>
                    <Button
                        type="submit"
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
                        تایید
                    </Button>
                    <Link style={{color: '#6A6A6A', marginTop: 36, textDecoration: 'none'}} component={firspage}
                          to={PATH_AUTH.verify}>
                        - استفاده از رمز عبور یکبار مصرف برای ورود-
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
                    }} width="61px" height="61px" src={mobileLogin}/>
                    <div style={{textAlign: 'center', marginTop: 39}}>
                        <span style={{fontSize: 12, color: '#6A6A6A'}}>کاربر جدید هستید ؟</span>

                        <Link style={{fontSize: 12, color: '#000000', fontWeight: 'bold', textDecoration: 'none'}}
                              to={PATH_AUTH.register}>
                            ایجاد حساب کاربری
                        </Link>
                        <div style={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <img src={nz4}/>
                            <img src={nz3}/>
                            <img src={nz2}/>
                            <img src={nz1}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <ToastContainer/>
        </FormProvider>
    )
}