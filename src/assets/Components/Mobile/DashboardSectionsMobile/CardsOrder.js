import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardcs: {
        borderRadius: 20
    }
}));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);




export default function CardsOrder(props) {
    const classes = useStyles();
    return (
        <Card variant='outlined' style={{paddingBottom:17,borderRadius: 28, height: 132, marginLeft: 10, backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <CardContent >
                <Typography style={{ marginTop:4}} gutterBottom>
                    <span style={{ fontSize: 12, fontWeight: 'bolder' }}> سفارش شماره  {props.order} </span>
                    <span style={{ fontSize: 10 , fontWeight: 'bolder'}}> {props.name} </span>
                </Typography>

                <Typography sx={{ mb: 1.5, fontSize: 12 }} >
                    {props.step} : مرحله فعلی
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <Typography sx={{ fontSize: 10 }} variant="body2">
                        مرحله بعدی  : {props.nextStep}
                    </Typography>
                    <Typography sx={{ fontSize: 8 }} variant="body2">
                        زمان باقیمانده تا تحویل  : {props.duration}
                    </Typography>
                </div>
            </CardContent>

        </Card>
    )
}
