import React from 'react'
//mui 
import {DataGrid} from '@mui/x-data-grid';
import {makeStyles} from '@material-ui/core/styles';
import {useTheme} from '@mui/material/styles';
import {Box, Typography, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
            '&>.MuiDataGrid-columnHeaders': {
                borderBottom: 'none',
            },

            '& div div div div >.MuiDataGrid-cell': {
                borderBottom: 'none',
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
//line chart
const series = {
    monthDataSeries1: {
        prices: [
            8107.85,
            8128.0,
            8122.9,
            8600.65,
            8881.1,
            9340.85
        ],
        dates: [
            "20 Nov 2017",
            "21 Nov 2017",
            "22 Nov 2017",
            "23 Nov 2017",
            "24 Nov 2017",
            "27 Nov 2017",

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

        title: {
            text: 'میزان درخواست ها',
            align: 'center'
        },

        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
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
//donut chart
const chartData = {
    series: [200, 900],

    options: {
        chart: {type: "donut"},
        legend: {show: false},
        dataLabels: {enabled: false},
        tooltip: {enabled: false},
        fill: {
            type: 'gradient',
        },
        states: {
            hover: {filter: {type: "darken", value: 0.5}},
            active: {filter: {type: "none", value: 0}}
        },
        stroke: {width: 0},
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: "75%",
                    labels: {
                        show: true,
                        name: {show: false},
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
        status: 'در صف تایید',
        headerAlign: 'center'
    },
    {

        id: 2,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 3,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 4,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 5,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 6,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 7,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 8,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 9,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 10,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 11,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 12,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 13,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 14,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 15,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 16,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 17,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 18,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 19,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 20,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 21,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 22,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 23,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 24,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 25,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 26,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 27,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 28,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 29,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 30,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 31,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },

    {

        id: 33,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 34,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 35,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 36,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 37,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 38,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 39,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 40,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 3,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 41,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
    {

        id: 42,
        number: 100,
        type: 'اسکن دیجیتال',
        status: 'در صف تایید',
        headerAlign: 'center'

    },
];

export default function RequestList(props) {
    const classes = useStyles();

    //datagrid
    const {children, svalue, index, ...other} = props;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    //DATE OPTION 
    const [date, setDate] = React.useState('');

  const handleChangeDate = (event: SelectChangeEvent) => {
    setDate(event.target.value);
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
    return (
        <Box>
            <Box display={'flex'} flexDirection={'row'}
                 sx={{backgroundColor: 'white', borderRadius: '8px', height: '105px', alignItems: 'center'}}>
                <svg width="100" height="90" viewBox="-10 -20 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.833252 5.04167C0.833252 2.32627 3.03452 0.125 5.74992 0.125H10.6666C13.382 0.125 15.5833 2.32627 15.5833 5.04167V9.95833C15.5833 12.6737 13.382 14.875 10.6666 14.875H5.74992C3.03452 14.875 0.833252 12.6737 0.833252 9.95833V5.04167ZM25.4166 7.4997C25.4167 4.7843 27.6181 2.58317 30.3335 2.58333L94.2502 2.58718C96.9656 2.58734 99.1667 4.78874 99.1666 7.50414C99.1664 10.2195 96.965 12.4207 94.2496 12.4205L30.333 12.4167C27.6176 12.4165 25.4164 10.2151 25.4166 7.4997ZM0.833252 34.5417C0.833252 31.8263 3.03452 29.625 5.74992 29.625H10.6666C13.382 29.625 15.5833 31.8263 15.5833 34.5417V39.4583C15.5833 42.1737 13.382 44.375 10.6666 44.375H5.74992C3.03452 44.375 0.833252 42.1737 0.833252 39.4583V34.5417ZM25.4166 36.9997C25.4167 34.2843 27.6181 32.0832 30.3335 32.0833L94.2502 32.0872C96.9656 32.0873 99.1667 34.2887 99.1666 37.0041C99.1664 39.7195 96.965 41.9207 94.2496 41.9205L30.333 41.9167C27.6176 41.9165 25.4164 39.7151 25.4166 36.9997ZM0.833252 64.0417C0.833252 61.3263 3.03452 59.125 5.74992 59.125H10.6666C13.382 59.125 15.5833 61.3263 15.5833 64.0417V68.9583C15.5833 71.6737 13.382 73.875 10.6666 73.875H5.74992C3.03452 73.875 0.833252 71.6737 0.833252 68.9583V64.0417ZM25.4166 66.4997C25.4167 63.7843 27.6181 61.5832 30.3335 61.5833L94.2502 61.5869C96.9656 61.587 99.1667 63.7884 99.1666 66.5038C99.1664 69.2192 96.965 71.4203 94.2496 71.4202L30.333 71.4167C27.6176 71.4165 25.4164 69.2151 25.4166 66.4997Z"
                          fill="#F5F5F5"/>
                </svg>
                <Typography variant='p'
                            sx={{color: '#2143DD', fontWeight: 'bolder', paddingRight: '34px', fontSize: '34px'}}>

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
                <Box sx={{width: 'inherit', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextField

                        InputProps={{
                            sx: {
                                borderColor: '#F5F5F5',
                                backgroundColor: '#F5F5F5',
                                width: '40vw',
                                height: '48px',
                                borderRadius: '8px'
                            },
                            startAdornment: <InputAdornment sx={{marginRight: '10px'}}
                                                            position="end"><SearchOutlinedIcon/></InputAdornment>,
                        }}
                        id="outlined-search" placeholder="جستجو" type="search"/>

                    <Button variant='contained' sx={{
                        height: '48px',
                        paddingTop: '14px',
                        paddingLeft: '29px',
                        paddingRight: '24px',
                        paddingBottom: '14px'
                    }}>
                        ثبت درخواست جدید <AddOutlinedIcon sx={{marginRight: '13px'}}/>
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
                    
                    <Box className={classes.BoxShadow} sx={{width: '70%', marginRight: '24px'}}>
                        <div
                            style={{width: '100%'}}
                            role="tabpanel"
                            hidden={svalue !== index}
                            id={`simple-tabpanel-${index}`}
                            aria-labelledby={`simple-tab-${index}`}
                            {...other}
                        >
                            <DataGrid className={classes.grid}
                                      hideFooterPagination
                                      hideFooterSelectedRowCount
                                      columns={[
                                          {
                                              field: 'number',
                                              headerName: 'شماره',
                                              flex: 1,
                                              headerAlign: 'center',
                                              align: 'center'
                                          },
                                          {
                                              field: 'type',
                                              headerName: 'نوع',
                                              flex: 1,
                                              headerAlign: 'center',
                                              align: 'center'
                                          },
                                          {
                                              field: 'status',
                                              headerName: 'وضعیت',
                                              flex: 1,
                                              headerAlign: 'center',
                                              align: 'center'
                                          },
                                      ]}
                                      rows={rows}
                                      sx={{
                                          height: '1200px',
                                          textAlign: 'center',
                                          fontWeight: 'bolder',
                                          color: '#666666',
                                          border: 0,
                                      }}/>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
