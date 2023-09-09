import React from "react";
import {Box, Card, Grid, Typography} from "@mui/material";
import price from "../../img/price.svg";
import {fNumber} from "../../utils/formatNumber";
import transactionsAmount from "../../img/transactionsAmount.svg";
import tooth from "../../img/tooth.svg";
import ReactApexChart from "react-apexcharts";

export default function TransactionsReportTab() {

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

    const schema1 = {
        options: {
            series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
            fill: {
                opacity: 0.1
            },
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
    const schema2 = {

        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        options: {
            tooltip: {
                enabled: true,
                marker: {
                    show: false
                }
            },
            states: {
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none'
                    }
                },
            },
            chart: {
                height: 214,
                type: 'bar',
            },
            colors: ['#D2D9F8'],
            plotOptions: {
                bar: {
                    columnWidth: '28px',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ['کراون'],
                    ['آنله'],
                    ['روکش'],
                    ['اباتمنت'],
                    ['روکش موقت'],
                    ['زیرکونیا'],
                    ['سرجیکال گاید'],
                    ['پی اف ام'],
                    ['پست']
                ],
                labels: {
                    style: {
                        colors: ['#132885'],
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    opacity: 1,
                    width: 'barWidth',
                    position: 'front',
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#2143DD',
                            colorTo: '#132885',
                            opacityFrom: 1,
                            opacityTo: 1,
                        }
                    },
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 1,
                        opacity: 1,
                    }
                }
            }
        },
    };

    return (
        <>
            <Typography variant={'h4'} sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlignLast: 'right'
            }}>
                گزارشات نموداری
            </Typography>
            <Box sx={{borderTop: 1, borderColor: '#E5E5E5', marginTop: '32px'}}>
                <Grid container spacing={2} direction="column" sx={{marginTop: '48px'}}>
                    <Grid item container xs={6} direction="row" sx={{p: 0}}>
                        <Grid item container direction='row' sx={{width: '720px', p: 0}}>
                            <Card
                                sx={{
                                    alignItems: 'center',
                                    paddingTop: '24px',
                                    width: '335px',
                                    height: '120px',
                                    marginRight: '24px',
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${price})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionY: '20px'
                                }}>
                                <Typography sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'right',
                                    marginRight: '42px',
                                    fontSize: '17px',
                                    color: '#132885'
                                }}>
                                    <span style={{
                                        marginBottom: '16px',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>
                                        {fNumber(40000000)}
                                    </span>
                                    مجموع مبلغ پرداختی
                                </Typography>
                            </Card>
                            <Card
                                sx={{
                                    alignItems: 'center',
                                    paddingTop: '24px',
                                    width: '335px',
                                    height: '120px',
                                    marginRight: '24px',
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${transactionsAmount})`,
                                    backgroundRepeat: 'no-repeat'

                                }}>
                                <Typography sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'right',
                                    marginRight: '42px',
                                    fontSize: '17px',
                                    color: '#132885'
                                }}>
                                    <span style={{
                                        marginBottom: '16px',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>42</span>
                                    تعداد تراکنش ها
                                </Typography>
                            </Card>
                            <Card
                                sx={{
                                    alignItems: 'center',
                                    paddingTop: '24px',
                                    width: '697px',
                                    height: '118px',
                                    marginRight: '24px',
                                    marginTop: '24px',
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${tooth})`,
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                <Typography sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'right',
                                    marginRight: '42px',
                                    fontSize: '17px',
                                    color: '#132885'
                                }}>
                                <span style={{
                                    marginBottom: '16px',
                                    fontSize: '24px',
                                    fontWeight: 'bold'
                                }}>5</span>
                                    میزان تراکنش‌های لابراتواری
                                </Typography>
                            </Card>
                        </Grid>
                        <Card sx={{
                            paddingTop: '24px',
                            width: '437px',
                            height: '288px',
                        }}>

                            <Box sx={{flexGrow: 1, marginBottom: '40px'}}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        color: '#132885',
                                        fontWeight: 'bold',
                                        textAlign: 'right',
                                        marginRight: '24px'
                                    }}>
                                    نمودار خریدها
                                </Typography>
                            </Box>
                            <ReactApexChart
                                type="area"
                                series={[{data: [0, 1, 10, 5, 10, 20, 5]}]}
                                options={schema1.options}
                                width={389}
                                height={196}/>
                        </Card>
                    </Grid>
                    <Grid item container xs={6} direction="row"
                          sx={{justifyContent: 'right'}}>
                        <Card sx={{
                            width: '1158px',
                            height: '308px'
                        }}>
                            <Box sx={{
                                flexGrow: 1,
                                marginBottom: '24px',
                                marginTop: '24px'
                            }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        color: '#132885',
                                        fontWeight: 'bold',
                                        textAlign: 'right',
                                        marginRight: '56px'
                                    }}>
                                    دسته‌بندی های موردعلاقه
                                </Typography>
                            </Box>
                            <ReactApexChart
                                type="bar"
                                series={[{data: [250, 50, 100, 200, 300, 400, 500, 350, 450]}]}
                                options={schema2.options}
                                width={1078}
                                height={214}/>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}