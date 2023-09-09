import React from 'react'
//mui 
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer
} from "@mui/material";
//image
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//slider
import Slider from "react-slick";
//---------chart -----------
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";


//style--

const useStyles = makeStyles((theme) => ({

    BoxShadow: {
        boxShadow: '1px -1px 112px -48px rgba(179,166,166,0.75)',
    },
    grid: {
        '&>.MuiDataGrid-main': {
            border: 'none',
            '&>.MuiDataGrid-columnHeaders': {
                border: 'none',
            },

            '& div div div div >.MuiDataGrid-cell': {
                border: 'none',
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

//------line chart--------

//Monthly
const series = {
    monthDataSeries1: {
        prices: [
            10,
            50,
            100

        ],
        dates: [
            "دی",
            "بهمن",
            "اسفند",
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
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },



        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'category',
        },
        yaxis: {
            opposite: false
        },
        legend: {
            horizontalAlign: 'right'
        }
    },
    series: [
        {
            data: series.monthDataSeries1.prices
        }
    ]
};
//Weekly
const SeriesWeek = {
    WeekDataSeries1: {
        prices: [
            10,
            50,
            100,
            200,
            250,
            300,
            350

        ],
        dates: [
            "شنبه",
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
            "پنجشنبه",
            "جمعه"
        ]
    }
}

const schemaWeek = {
    options: {
        series: [{
            name: "STOCK ABC",
            data: SeriesWeek.WeekDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },



        labels: SeriesWeek.WeekDataSeries1.dates,
        xaxis: {
            type: 'category',
        },
        yaxis: {
            opposite: false
        },
        legend: {
            horizontalAlign: 'right'
        }
    },
    series: [
        {
            data: SeriesWeek.WeekDataSeries1.prices
        }
    ]
};
//Yearly
const SeriesYear = {
    YearDataSeries1: {
        prices: [
            10,
            50,
            100,
            40,
            500,
            1000,
            250

        ],
        dates: [
            "1402",
            "1401",
            "1400",
            "1399",
            "1398",
            "1397",
            "1396"
        ]
    }
}

const schemaYear = {
    options: {
        series: [{
            name: "STOCK ABC",
            data: SeriesYear.YearDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },



        labels: SeriesYear.YearDataSeries1.dates,
        xaxis: {
            type: 'category',
        },
        yaxis: {
            opposite: false
        },
        legend: {
            horizontalAlign: 'right'
        }
    },
    series: [
        {
            data: SeriesYear.YearDataSeries1.prices
        }
    ]
};
//Three Month
const SeriesThreeMonth = {
    ThreeMonthDataSeries1: {
        prices: [
            100,
            150,
            200,
            540

        ],
        dates: [
            "سه ماه چهارم",
            "سه ماه سوم",
            "سه ماه دوم",
            "سه ماه اول ",
        ]
    }
}

const schemaThreeMonth = {
    options: {
        series: [{
            name: "STOCK ABC",
            data: SeriesThreeMonth.ThreeMonthDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },



        labels: SeriesThreeMonth.ThreeMonthDataSeries1.dates,
        xaxis: {
            type: 'category',
        },
        yaxis: {
            opposite: false
        },
        legend: {
            horizontalAlign: 'right'
        }
    },
    series: [
        {
            data: SeriesThreeMonth.ThreeMonthDataSeries1.prices
        }
    ]
};

//-----donut chart----
const chartData = {
    series: [200, 900],

    options: {
        chart: { type: "donut" },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { enabled: false },
        fill: {
            type: 'gradient',
        },
        states: {
            hover: { filter: { type: "darken", value: 0.5 } },
            active: { filter: { type: "none", value: 0 } }
        },
        stroke: { width: 0 },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: "75%",
                    labels: {
                        show: true,
                        name: { show: false },
                        total: {
                            show: true,
                            showAlways: true,
                            formatter: function (w) {
                                const totals = w.globals.seriesTotals;

                                const result = totals.reduce((a, b) => a + b, 0);

                                return (result / 1000).toFixed(3);
                            }
                        }
                    }
                }
            }
        }
    }
};

//information tab
const rows = [
    {
        id: 1,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 2,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    },
    {

        id: 3,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 4,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 0,
        headerAlign: 'center'

    },
    {

        id: 5,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    },
    {

        id: 6,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 7,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 0,
        headerAlign: 'center'

    }
    ,
    {

        id: 8,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    }
    ,
    {

        id: 9,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {
        id: 1,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 2,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    },
    {

        id: 3,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 4,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 0,
        headerAlign: 'center'

    },
    {

        id: 5,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    },
    {

        id: 6,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
    {

        id: 7,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 0,
        headerAlign: 'center'

    }
    ,
    {

        id: 8,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 2,
        headerAlign: 'center'

    }
    ,
    {

        id: 9,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 1,
        headerAlign: 'center'

    },
];

export default function RequestList(props) {
    const classes = useStyles();
    const [scroll, setScroll] = React.useState(false);
    //datagrid
    const { children, svalue, index, ...other } = props;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    //slider seting
    var settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        easing: 'linear',
        rtl: true,
        dots: true,
    };
    //statemange line chatr
    const [monthly, setMonthly] = React.useState(false);
    const [Weekly, setWeekly] = React.useState(false);
    const [Yearly, setYearly] = React.useState(false);
    const [ThreeMonth, setThreeMonth] = React.useState(false);
    //function 
    const FMonthly = () => {
        setMonthly(true);
        setWeekly(false);
        setYearly(false);
        setThreeMonth(false);
    }
    const FWeekly = () => {
        setMonthly(false);
        setWeekly(true);
        setYearly(false);
        setThreeMonth(false);
    }

    const Fyearly = () => {
        setMonthly(false);
        setWeekly(false);
        setYearly(true);
        setThreeMonth(false);
        console.log("yer")
    }

    const FThreeMonth = () => {
        setMonthly(false);
        setWeekly(false);
        setYearly(false);
        setThreeMonth(true);
    }

    return (
        <Box width='1410px'>
            <Box display={'flex'} flexDirection={'row'}
                sx={{ backgroundColor: 'white', borderRadius: '8px', height: '105px', alignItems: 'center' }}>
                <svg width="100" height="90" viewBox="-10 -20 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.833252 5.04167C0.833252 2.32627 3.03452 0.125 5.74992 0.125H10.6666C13.382 0.125 15.5833 2.32627 15.5833 5.04167V9.95833C15.5833 12.6737 13.382 14.875 10.6666 14.875H5.74992C3.03452 14.875 0.833252 12.6737 0.833252 9.95833V5.04167ZM25.4166 7.4997C25.4167 4.7843 27.6181 2.58317 30.3335 2.58333L94.2502 2.58718C96.9656 2.58734 99.1667 4.78874 99.1666 7.50414C99.1664 10.2195 96.965 12.4207 94.2496 12.4205L30.333 12.4167C27.6176 12.4165 25.4164 10.2151 25.4166 7.4997ZM0.833252 34.5417C0.833252 31.8263 3.03452 29.625 5.74992 29.625H10.6666C13.382 29.625 15.5833 31.8263 15.5833 34.5417V39.4583C15.5833 42.1737 13.382 44.375 10.6666 44.375H5.74992C3.03452 44.375 0.833252 42.1737 0.833252 39.4583V34.5417ZM25.4166 36.9997C25.4167 34.2843 27.6181 32.0832 30.3335 32.0833L94.2502 32.0872C96.9656 32.0873 99.1667 34.2887 99.1666 37.0041C99.1664 39.7195 96.965 41.9207 94.2496 41.9205L30.333 41.9167C27.6176 41.9165 25.4164 39.7151 25.4166 36.9997ZM0.833252 64.0417C0.833252 61.3263 3.03452 59.125 5.74992 59.125H10.6666C13.382 59.125 15.5833 61.3263 15.5833 64.0417V68.9583C15.5833 71.6737 13.382 73.875 10.6666 73.875H5.74992C3.03452 73.875 0.833252 71.6737 0.833252 68.9583V64.0417ZM25.4166 66.4997C25.4167 63.7843 27.6181 61.5832 30.3335 61.5833L94.2502 61.5869C96.9656 61.587 99.1667 63.7884 99.1666 66.5038C99.1664 69.2192 96.965 71.4203 94.2496 71.4202L30.333 71.4167C27.6176 71.4165 25.4164 69.2151 25.4166 66.4997Z"
                        fill="#F5F5F5" />
                </svg>
                <Typography variant='p'
                    sx={{ color: '#2143DD', fontWeight: 'bolder', paddingRight: '34px', fontSize: '34px' }}>

                    لیست درخواست ها</Typography>
            </Box>

            <Box display={'flex'} flexDirection={'column'} sx={{
                marginTop: '16px',
                backgroundColor: 'white',
                borderRadius: '8px',
                height: '1410px',
                paddingTop: '24px',
                paddingLeft: '64px',
                paddingRight: '64px',
                paddingBottom: '56px'
            }}>
                <Box sx={{ width: 'inherit', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Box display={'flex'} flexDirection={'row'} ><TextField

                        InputProps={{
                            sx: {
                                [`& fieldset`]: {
                                    border: 'none'
                                },
                                borderColor: '#F5F5F5',
                                backgroundColor: '#F5F5F5',
                                width: '537px',
                                height: '48px',
                                borderRadius: '8px',
                                border: 'none'
                            },
                            startAdornment: <InputAdornment sx={{ marginRight: '10px' }}
                                position="end"><SearchOutlinedIcon /></InputAdornment>,
                        }}
                        id="outlined-search" placeholder="جستجو" type="search" />
                        <Button variant='text' sx={{
                            height: '48px',
                            paddingTop: '14px',
                            paddingLeft: '29px',
                            paddingRight: '16px',
                            paddingBottom: '14px',
                            marginRight: '8px'
                        }}>
                            <FilterListOutlinedIcon sx={{ marginLeft: '13px' }} />
                            فیلترها
                        </Button>
                    </Box>
                    <Button variant='contained' sx={{
                        height: '48px',
                        paddingTop: '14px',
                        paddingLeft: '29px',
                        paddingRight: '24px',
                        paddingBottom: '14px'
                    }}>
                        ثبت درخواست جدید <AddOutlinedIcon sx={{ marginRight: '13px' }} />
                    </Button>
                </Box>

                <Box sx={{
                    backgroundcolor: '#E5E5E580',
                    paddingTop: '56px',
                    width: 'inherit',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ width: '334px', height: '343px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box className={classes.BoxShadow} sx={{
                            paddingTop: '39px',
                            paddingBottom: '84px',
                            marginBottom: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ReactApexChart
                                options={chartData.options}
                                series={chartData.series}
                                type="donut"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Typography sx={{ paddingLeft: '48px' }} variant='p' fontSize={'15px'}>در صف تایید
                                    (10)</Typography>
                                <Typography variant='p' fontSize={'15px'}>تایید شده (240)</Typography>
                            </Box>

                        </Box>
                        <Box className={classes.BoxShadow} sx={{ marginBottom: '24px', paddingTop: '25px', paddingRight: '24px', paddingLeft: '12px' }}>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography width='113px' fontSize='17px' fontweight='900' sx={{ letterSpacing: '-0.14px', color: '#132885' }}>میزان درخواست ها</Typography>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} height='26px' aria-label="small button group">
                                    <button onClick={()=>FWeekly()} style={{ fontWeight: '500', color: '#2143DD', backgroundColor: 'inherit', borderColor: '#2143DD', borderRadius: '0px 10px 10px 0px', fontSize: '10px', width: '40px', letterSpacing: '-0.24px' }}  >هفتگی</button>
                                    <button onClick={()=>FMonthly()} style={{ fontWeight: '500', color: '#2143DD', backgroundColor: 'inherit', borderColor: '#2143DD', fontSize: '10px', width: '40px', letterSpacing: '-0.24px' }}  >ماهانه</button>
                                    <button onClick={()=>FThreeMonth()} style={{ fontWeight: '500', color: '#2143DD', backgroundColor: 'inherit', borderColor: '#2143DD', fontSize: '10px', width: '48px', letterSpacing: '-0.24px' }}  >سه ماهه</button>
                                    <button onClick={()=>Fyearly()} style={{ fontWeight: '500', color: '#2143DD', backgroundColor: 'inherit', borderColor: '#2143DD', borderRadius: '10px 0px 0px 10px', fontSize: '10px', width: '40px', letterSpacing: '-0.24px' }}  >سالیانه</button>
                                </Box>
                            </Box>
                            <Chart
                                options={monthly ?
                                    schema.options :
                                    Weekly ? schemaWeek.options :
                                        ThreeMonth ? schemaThreeMonth.options :
                                            Yearly ? schemaYear.options : schema.options
                                }
                                series={
                                    monthly ?
                                    schema.series :
                                    Weekly ? schemaWeek.series :
                                        ThreeMonth ? schemaThreeMonth.series :
                                            Yearly ? schemaYear.series : schema.series
                                    }
                                type="area"
                                height="373"
                            />
                        </Box>
                        <Box height='248px' with='334px'>
                            <Slider {...settings}>
                                <Box>
                                    <Box display={'flex'} flexDirection={'column'} textAlign={'center'}
                                        paddingTop={'40px'} paddingBottom={'72px'} paddingRight={'24px'}
                                        paddingLeft={'24px'} sx={{
                                            backgroundImage: "linear-gradient(To right,#2143DD,#132885)",
                                            lineHeight: '30px',
                                            borderRadius: '8px'
                                        }}>
                                        <p style={{
                                            fontSize: '17px',
                                            color: 'white',
                                            fontWeight: 'bolder',
                                            borderRadius: '8px'
                                        }}> نکات آموزشی</p>
                                        <p style={{ fontSize: '15px', color: 'white' }}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                                        </p>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box display={'flex'} flexDirection={'column'} textAlign={'center'}
                                        paddingTop={'40px'} paddingBottom={'72px'} paddingRight={'24px'}
                                        paddingLeft={'24px'} sx={{
                                            backgroundImage: "linear-gradient(To right,#2143DD,#132885)",
                                            lineHeight: '30px',
                                            borderRadius: '8px'
                                        }}>
                                        <p style={{ fontSize: '17px', color: 'white', fontWeight: 'bolder' }}> نکات
                                            آموزشی</p>
                                        <p style={{ fontSize: '15px', color: 'white' }}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                                        </p>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box display={'flex'} flexDirection={'column'} textAlign={'center'}
                                        paddingTop={'40px'} paddingBottom={'72px'} paddingRight={'24px'}
                                        paddingLeft={'24px'} sx={{
                                            backgroundImage: "linear-gradient(To right,#2143DD,#132885)",
                                            lineHeight: '30px',
                                            borderRadius: '8px'
                                        }}>
                                        <p style={{ fontSize: '17px', color: 'white', fontWeight: 'bolder' }}> نکات
                                            آموزشی</p>
                                        <p style={{ fontSize: '15px', color: 'white' }}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                                        </p>
                                    </Box>
                                </Box>
                            </Slider>
                        </Box>
                    </Box>
                    <Box className={classes.BoxShadow} sx={{ width: '70%', height: '403px', marginRight: '24px' }}>
                        <div
                            style={{ marginTop: '24px', width: '100%', height: '1100px', border: 'none', borderRadius: '8px' }}
                            role="tabpanel"
                            hidden={svalue !== index}
                            id={`simple-tabpanel-${index}`}
                            aria-labelledby={`simple-tab-${index}`}
                            {...other}
                        >
                            <TableContainer sx={{
                                height: '1100px', overflowY: (scroll) == true ? 'scroll' : 'hidden', '&::-webkit-scrollbar': {
                                    width: '0.4em'
                                },

                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'rgba(0,0,0,.1)',
                                    outline: '1px solid slategrey'
                                }
                            }}>
                                <Table sx={{ minWidth: 650, direction: 'rtl' }}
                                    aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width={'32%'} align="center" fontSize='16px' fontWeight='500'>شماره
                                            </TableCell>
                                            <TableCell width={'32%'}
                                                align="center" fontSize='16px' fontWeight='500'>نوع درخواست</TableCell>
                                            <TableCell width={'36%'}
                                                align="center" fontSize='16px' fontWeight='700'>وضعیت </TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '70px' }}
                                            >
                                                <TableCell sx={{ p: 0, textAlign: 'center' }}>

                                                    <Typography fontSize='17px' fontWeight='500'
                                                    >{row.number}</Typography>


                                                </TableCell>
                                                <TableCell sx={{ p: 0, textAlign: 'center' }}>


                                                    <Typography fontSize='17px' fontWeight='500'
                                                    >{row.type}</Typography>


                                                </TableCell>
                                                <TableCell sx={{ p: 0, textAlign: 'center' }}>


                                                    <Typography textAlign='center' width='115px' fontSize='17px' fontWeight='700' paddingX='16px' paddingY='12px'
                                                        sx={{
                                                            marginRight: '149px',
                                                            borderRadius: '4px',
                                                            color: (row.status) == 0 ? '#2143DD' : (row.status) == 1 ? '#EC8A00' : '#C30000',
                                                            backgroundColor: (row.status) == 0 ? '#edf0fc' : (row.status) == 1 ? '#fdf6eb' : '#faebeb'
                                                        }}
                                                    >{(row.status) == 0 ? 'در صف تایید' : (row.status) == 1 ? 'نیاز به اصلاح' : 'لغو شده'}</Typography>

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button fullWidth
                                onClick={() => setScroll(true)}
                                sx={{
                                    height: '59px',
                                    backgroundColor: '#EDF0FC',
                                    color: '#2143DD',
                                    fontsize: '18px',
                                    fontWeight: 'bolder',
                                    marginTop: '18px'
                                }} variant='contained'>مشاهده بیشتر</Button>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
