import React from 'react';
import {Link} from "react-router-dom";
import Logow1 from '../../../img/Logow1.svg';
import {makeStyles} from '@material-ui/core/styles';
import {PATH_AUTH} from "../../../routes/paths";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#1c39bb',
        height: '100vh',
        minHeight: '100vh'

    },
    App: {
        backgroundColor: '#1c39bb',
    }
}));


export default function FirstPage() {
    const classes = useStyles();
    return (
        <>
            <Link to={PATH_AUTH.login} style={{textDecoration: 'none'}}>
                <div className={classes.root}>
                    <img style={{marginTop: 300}} src={Logow1}/>
                    <p style={{fontSize: 28, color: 'white', fontWeight: 'bolder'}}>
                        به سامانه تسهیلگر فرآیندهای دندانپزشکی پند خوش آمدید
                    </p>
                </div>
            </Link>
        </>
    )
}
