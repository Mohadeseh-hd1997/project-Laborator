import React, {useState, useRef, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
// mui 
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Button, CssBaseline} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Grid from "@material-ui/core/Grid";
//components
import firspage from './FirstPage';
//used image
import pand from '../../../img/pandLogo.svg';
import nz1 from '../../../img/nz1.svg';
import nz2 from '../../../img/nz2.svg';
import nz3 from '../../../img/nz3.svg';
import nz4 from '../../../img/nz4.svg';
import patternlogin from '../../../img/Patternlogin.svg';
import key from '../../../img/key.svg';

import VerificationInput from "react-verification-input";
import useAuth from "../../../hooks/useAuth";
import {PATH_AFTER_LOGIN, PATH_AUTH} from "../../../routes/paths";

//styles 
const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',

    },
    root: {
        height: '1080px',
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

export default function AuthNumber() {
    const classes = useStyles();

    const {otp_login} = useAuth();

    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');

    const [value, setValue] = useState(null);

    const navigate = useNavigate();

    //timer for recive message 
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
        let {total, hours, minutes, seconds}
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

    const onSubmit = async (data) => {
        try {
            await otp_login(localStorage.getItem('pk'), data);
            navigate(PATH_AFTER_LOGIN, {replace: true});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <CssBaseline/>
            <Grid container spacing={{xs: 0, md: 0, lg: 0}} className={classes.root}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
            >
                <Grid spacing={{xs: 0, md: 0, lg: 0}} item xs={12} sm={9} className={classes.gridItem}
                      display={{xs: "flex", lg: "flex"}}
                      alignContent="center"
                      alignItems='center'
                      marginRight='-50px'
                >
                    <FormControl style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <img style={{marginTop: 176}} src={pand} width="142px" height='80px'/>
                        <Typography variant='h4' style={{color: '#3566DE', fontWeight: 'bolder', marginTop: 40}}>
                            احراز شماره تلفن همراه
                        </Typography>

                        <Typography variant='span' style={{color: '#6A6A6A', marginTop: 30, fontSize: 17}}>
                            کد ارسالی به شماره همراه {localStorage.getItem('pk')} را وارد نمایید.
                        </Typography>

                        <VerificationInput
                            length={4}
                            validChars={'0-9'}
                            autoFocus={true}
                            onComplete={(value) => {
                                setValue(value);
                                onSubmit(value);
                            }}
                            containerProps={{
                                style: {direction: 'ltr', marginTop: 40, borderRadius: 20}
                            }}
                        />

                        <Typography variant='span' style={{color: '#6A6A6A', marginTop: 30, fontSize: 12}}>
                            {timer} ثانیه تا در خواست مجدد | اصلاح شماره همراه ؟
                        </Typography>

                        <Button variant='contained'
                                onClick={() => {
                                    if (value !== null) {
                                        onSubmit(value);
                                    } else {
                                        // TODO add error message
                                    }
                                }}
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
                            ورود به سامانه
                        </Button>
                        <Link style={{color: '#6A6A6A', marginTop: 36, textDecoration: 'none'}} component={firspage}
                              to={PATH_AUTH.login}>
                            - استفاده از نام کاربری و رمز عبور برای ورود-
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
                        }} src={key}/>
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
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}
