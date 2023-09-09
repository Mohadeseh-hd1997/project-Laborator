import {Box, Button, Card, Grid, Typography} from "@mui/material";
import React from "react";
import ProfileSummeryCard from "./ProfileSummeryCard";
import ReactApexChart from "react-apexcharts";
import {LaboratorCard} from "./LaboratorCard";
import avatar_wrap from '../../img/avatar_wrap.svg'
import articles from '../../icons/articles.svg'
import camera from '../../icons/camera.svg'
import creators from '../../icons/creators.svg'
import shop from '../../icons/shop.svg'
import microscop from '../../icons/microscop.svg'
import coin from '../../icons/coin.svg'
import report from '../../icons/report.svg'
import {BankCard} from "./BankCard";
import {Link} from "react-router-dom";
import {PATH_DENTIST} from "../../routes/paths";

export default function ProfileGrid(props) {
    const {children, svalue, index, ...other} = props;


    const series = {
        monthDataSeries1: {
            prices: [
                0,
                1,
                5,
                10,
                15,
                25
            ],
            dates: [
                "شنبه",
                "یک شنبه",
                "دوشنبه",
                "سه شنبه",
                "چهار شنبه",
                "پنح شنبه",
                "جمعه",
            ]
        }
    }
    const schema = {
        options: {
            series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },

            title: {
                text: undefined,
                align: 'center'
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: true,
            },
            legend: {
                show: true,
            },
            labels: series.monthDataSeries1.dates,
            xaxis: {
                show: true,
                labels: {
                    show: true,
                },
            }, yaxis: {
                show: true,
                labels: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                data: series.monthDataSeries1.prices
            }
        ]
    };

    const schema1 = {
        options: {
            series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
            colors: ['#AD06D7'],
            chart: {
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },

            title: {
                text: undefined,
                align: 'center'
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: true,
            },
            legend: {
                show: true,
            },
            labels: series.monthDataSeries1.dates,
            xaxis: {
                show: true,
                labels: {
                    show: true,
                },
            }, yaxis: {
                show: true,
                labels: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                data: series.monthDataSeries1.prices
            }
        ]
    };
    return (
        <>
            <Grid container spacing={2} direction="column">
                <Grid item container xs={12} direction="row">

                    <Box sx={{marginLeft: '24px'}}>
                        <ProfileSummeryCard
                            title="درخواست ها"
                            subTitle={'2 درخواست تایید نشده'}
                            total={10}
                            chartColor={'#00B998'}
                            chartData={[22, 8, 35, 50, 82]}
                            badge={5}
                        />
                    </Box>
                    <Box sx={{marginLeft: '24px'}}>
                        <ProfileSummeryCard
                            title="سفارش ها"
                            subTitle={'5 سفارش فعال'}
                            total={20}
                            chartColor={'#C30000'}
                            chartData={[22, 8, 35, 50, 82]}
                            badge={5}
                        />
                    </Box>
                    <Box>
                        <ProfileSummeryCard
                            title="میزان هزینه ها"
                            subTitle={'5 پرداخت در انتظار'}
                            total={400000000}
                            chartColor={'#00B998'}
                            chartData={[22, 8, 35, 50, 82]}
                            badge={5}
                        />
                    </Box>
                </Grid>
                <Grid item container xs={12} direction="row">
                    <Card sx={{
                        alignItems: 'center',
                        p: 3,
                        width: '780px',
                        height: '280px'
                    }}>
                        <Box sx={{flexGrow: 1}}>
                            <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
                                جدول هزینه ها | روکش موقت
                            </Typography>
                        </Box>

                        <ReactApexChart type="area" series={[{data: [0, 1, 10, 5, 10, 20, 5]}]}
                                        options={schema.options} width={729} height={203}/>
                    </Card>
                    <Card sx={{
                        alignItems: 'center',
                        paddingRight: '48px',
                        paddingLeft: '48px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        width: '306px',
                        height: '280px',
                        marginRight: '24px'
                    }}>
                        <Box sx={{flexGrow: 1, marginBottom: '40px'}}>
                            <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
                                تعداد بیماران
                            </Typography>
                        </Box>

                        <ReactApexChart type="line" series={[{data: [0, 1, 10, 5, 10, 20, 5]}]}
                                        options={schema1.options} width={306} height={214}/>
                    </Card>
                </Grid>
                <Grid item container xs={12} direction="row">
                    <Card sx={{width: '1158px', height: '252px', paddingRight: '48px', paddingLeft: '48px'}}>
                        <Typography
                            sx={{marginTop: '24px', marginBottom: "12 px", fontWeight: 'bold', fontSize: '17px'}}>
                            لابراتوار هایی که اخیرا به آنان سفارش داده اید
                        </Typography>
                        <Box sx={{display: 'flex', justifyItems: 'center', gap: '24px'}}>
                            <LaboratorCard
                                name={'smart'}
                                logo={avatar_wrap}
                                city={'مشهد'}
                                rate={2.7}
                            />
                            <LaboratorCard
                                name={'لابراتووار اسمارت'}
                                logo={avatar_wrap}
                                city={'مشهد'}
                                rate={2.7}
                            />
                            <LaboratorCard
                                name={'smart'}
                                logo={avatar_wrap}
                                city={'مشهد'}
                                rate={2.7}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item container xs={12} direction="row">
                    <Card sx={{
                        width: '590px',
                        height: '484px',
                        paddingRight: '48px',
                        paddingLeft: '48px',
                        paddingTop: '24px',
                        paddingBottom: '24px'
                    }}>
                        <Typography sx={{fontWeight: 'bold', fontSize: '17px', marginBottom: '22px'}}>
                            علاقه مندی های من
                        </Typography>
                        <Grid container direction={'row'}>
                            <Grid item direction={'column'}>
                                <Link to={PATH_DENTIST.favourite.laborator} style={{textDecoration: 'none'}}>
                                    <Button
                                        startIcon={
                                            <img
                                                src={microscop}
                                                style={{position: 'absolute', top: '57px'}}
                                                alt={'icon'}/>
                                        }
                                        sx={{
                                            width: '185px',
                                            height: '208px',
                                            border: 1,
                                            borderColor: '#E5E5E5',
                                            borderRadius: 2,
                                            fontSize: '18px',
                                            fontColor: '#798EEB',
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}>
                                        <p style={{position: 'inherit', top: '24px'}}>لابراتوار</p>
                                    </Button>
                                </Link>
                                <Link to={PATH_DENTIST.favourite.product} style={{textDecoration: 'none'}}>
                                    <Button startIcon={<img src={shop} style={{position: 'absolute', top: '57px'}}
                                                            alt={'icon'}/>}
                                            sx={{
                                                width: '185px',
                                                height: '208px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginRight: '17px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '24px'}}>محصولات</p>
                                    </Button>
                                </Link>

                            </Grid>
                            <Grid item direction={'column'}>
                                <Link to={PATH_DENTIST.favourite.article} style={{textDecoration: 'none'}}>
                                    <Button startIcon={<img src={articles} style={{position: 'absolute', top: '57px'}}
                                                            alt={'icon'}/>}
                                            sx={{
                                                width: '185px',
                                                height: '208px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginTop: '24px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '24px'}}>مقالات</p>
                                    </Button>
                                </Link>
                                <Link to={PATH_DENTIST.favourite.video} style={{textDecoration: 'none'}}>
                                    <Button startIcon={<img src={camera} style={{position: 'absolute', top: '57px'}}
                                                            alt={'icon'}/>}
                                            sx={{
                                                width: '185px',
                                                height: '208px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginRight: '17px',
                                                marginTop: '24px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '24px'}}>ویدیو ها</p>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item sx={{marginTop: '-208px'}} direction={'column'}>
                                <Link to={PATH_DENTIST.favourite.freelancer} style={{textDecoration: 'none'}}>
                                    <Button startIcon={<img src={creators} style={{position: 'absolute', top: '179px'}}
                                                            alt={'icon'}/>}
                                            sx={{
                                                width: '185px',
                                                height: '440px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginRight: '17px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '24px'}}>طراحان</p>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card sx={{
                        width: '448px',
                        height: '484px',
                        marginRight: '24px',
                        paddingRight: '48px',
                        paddingLeft: '48px',
                        paddingTop: '24px',
                        paddingBottom: '24px'
                    }}>
                        <Typography sx={{fontWeight: 'bold', fontSize: '17px'}}>
                            مالی
                        </Typography>
                        <Grid container direction={'column'}>
                            <Grid item direction={'row'}>
                                <Link to={PATH_DENTIST.financial.transactions} style={{textDecoration: 'none'}}>
                                    <Button startIcon={
                                        <img src={coin}
                                             style={{position: 'absolute', top: '15px', right: '84px'}}
                                             alt={'icon'}/>
                                    }
                                            sx={{
                                                width: '215.5px',
                                                height: '116px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginTop: '24px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '28px'}}>تراکنش ها</p>
                                    </Button>
                                </Link>
                                <Link to={PATH_DENTIST.financial.reports} style={{textDecoration: 'none'}}>
                                    <Button startIcon={
                                        <img src={report}
                                             style={{position: 'absolute', top: '15px', right: '84px'}}
                                             alt={'icon'}/>
                                    }
                                            sx={{
                                                width: '215.5px',
                                                height: '116px',
                                                border: 1,
                                                borderColor: '#E5E5E5',
                                                borderRadius: 2,
                                                marginRight: '17px',
                                                marginTop: '24px',
                                                fontSize: '18px',
                                                fontColor: '#798EEB',
                                                fontWeight: 'bold'
                                            }}>
                                        <p style={{position: 'inherit', top: '28px'}}>گزارشات نموداری</p>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item direction={'row'}>
                                <Box sx={{marginTop: '24px'}}>
                                    <BankCard
                                        inventory={'3400000'}
                                        sheba={'IR1000000000008081871812322'}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}