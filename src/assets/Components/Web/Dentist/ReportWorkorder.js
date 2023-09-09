import React from 'react';
// img 
import teeth from '../../../img/teeth.svg';
// mui
import { div, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
// components 
import LinkBar from '../../Mobile/LinkBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        lineHeight: 0,


    },
}));


export default function ReportWorkorder() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', }} >
                    <p style={{ fontSize: 20, marginRight: 10, fontWeight: 'bolder' }}>تایید دستور درمان</p>
                    <p style={{ fontSize: 12, marginTop: 27, color: '#6A6A6A', marginRight: 10 }}>تاریخ ثبت : 14 - بهمن - 1401</p>
                    <p style={{ color: '#6A6A6A', marginRight: 10, fontWeight: 'bolder', fontSize: 14 }}>بهناز جعفری - شماره پرونده 23914</p>
                    <p style={{ color: '#6A6A6A', marginRight: 10, fontSize: 12 }}>شماره پرونده : 23914</p>
                    <p style={{ color: '#6A6A6A', marginRight: 10, fontSize: 12 }}>شماره ملی : 0932871762</p>
                    <p style={{ fontSize: 14, color: '#6A6A6A', marginRight: 10, fontWeight: 'bolder', marginTop: 31 }}>پزشک معالج : دکتر رضا ملا</p>
                    <p style={{ fontSize: 12, color: '#C02727', marginRight: 10, fontWeight: 'bolder', marginTop: 31 }}> دستور درمان دارای Bridge می باشد</p>
                </div>
                <div style={{ marginTop: 12, marginBottom: 20 }}>
                    <img src={teeth} alth="teeth" width='auto' />
                </div>

                <div sx={{ marginTop: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <p style={{ float: 'right', fontSize: 14, fontWeight: 'bolder' }}>شماره دندان</p>
                        <p style={{ fontSize: 14, fontWeight: 'bolder' }}>5</p>
                    </div>
                    <Divider style={{ color: 'black', marginLeft: '7%', marginRight: '7%' }} />

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>نوع طراحی</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Full Contour</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>نوع درمان</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Crown</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>متریال دندان</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Infiltration Ceramic</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>انتخاب رنگ پروتز</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14, paddingRight: 10 }}>2M1|VITA 3D master</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>رنگ Base</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>5</p>
                    </div>
                    <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>+ توضیحات اضافه </p>
                        <p style={{ color: '#6A6A6A', fontSize: 14, fontWeight: 'bolder' }}> ندارد</p>
                    </div>
                </div>

                <div sx={{ marginTop: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <p style={{ float: 'right', fontSize: 14, fontWeight: 'bolder' }}>شماره دندان</p>
                        <p style={{ fontSize: 14, fontWeight: 'bolder' }}>5UR</p>
                    </div>
                    <Divider style={{ color: 'black', marginLeft: '7%', marginRight: '7%' }} />

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>نوع طراحی</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Full Contour</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>نوع درمان</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Crown</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>متریال دندان</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>Infiltration Ceramic</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>انتخاب رنگ پروتز</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14, paddingRight: 10 }}>2M1|VITA 3D master</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>رنگ Base</p>
                        <p style={{ color: '#6A6A6A', fontSize: 14 }}>5</p>
                    </div>
                    <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: '#6A6A6A', float: 'right', fontSize: 14, fontWeight: 'bolder' }}>+ توضیحات اضافه </p>
                        <p style={{ color: '#6A6A6A', fontSize: 14, fontWeight: 'bolder' }}>   لطفا بعد از طراحی حتما تایید اخذ شود.</p>
                    </div>
                </div>
                <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <a style={{ fontSize: 16, fontWeight: 'bolder', textDecoration: 'none', color: "#3566DE" }} href="#">مشاهده پیوست</a>
                    <p style={{ marginTop: 30, fontSize: 13, fontWeight: 'bold', textDecoration: 'none', color: "#C02727" }}>آخرین مهلت زمانی مجاز تحویل : 25 بهمن 1401  !</p>
                </div>

                <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button style={{ borderColor: '#6A6A6A', width: '139px', height: '53px', borderRadius: 12, color: '#A8A8AA', fontSize: 12, fontWeight: 'bolder', marginLeft: 10 }} variant='outlined'>ذخیره پیش نویس</Button>
                    <Button style={{ borderColor: '#6A6A6A', width: '139px', height: '53px', borderRadius: 12, color: '#6A6A6A', fontSize: 13, fontWeight: 'bolder' }} variant='outlined'>ویرایش</Button>
                </div>
                <Button style={{ width: 298, marginTop: 30, borderRadius: 12, backgroundColor: '#FDD817', color: '#6A6A6A', fontSize: 16, fontWeight: 'bolder' }} variant='outlined'>تایید<span style={{ fontSize: 12, color: '#6A6A6A' }}> ( انتخاب لابرآتوآر )</span></Button>


            </div>
            <div style={{ width: 364 }}>
                <LinkBar />

            </div>
        </>
    )
}
