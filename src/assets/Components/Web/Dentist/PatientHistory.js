import React from 'react';
//mui
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//image
import contact from '../../../img/contact.svg';
import doc4 from '../../../img/doc4.svg';
import contactBg from '../../../img/contactBg.svg';
//style
const useStyles = makeStyles((theme) => ({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },

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
//data grid
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

export default function PatientHistory() {
    const classes = useStyles();

    return (
        <Box width='1282px' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box width='692px' height='157px' textAlign='start' padding='24px' marginTop='56px' sx={{ backgroundImage: `url(${contactBg})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '105%', backgroundPositionY: '1px', boxShadow: '10px 10px 18px 36px rgba(248,248,248,0.75)' }}>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Typography variant='p' sx={{ color: '#2143DD', fontWeight: '700', fontSize: '34px' }}>مرضیه شاهرخی</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '24px', marginBottom: '8px' }}>
                        <Box width='194px'>
                            <img src={contact} />
                            <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>کد ملی :</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۰۹۲۱۲۳۴۵۶۷</Typography>
                        </Box>
                        <Box width='263px'>
                            <img src={contact} />
                            <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>شماره تماس  :</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۰۹۱۵۱۲۳۴۵۶۷</Typography>
                        </Box>
                        <Box width='167px'>
                            <img src={doc4} />
                            <Typography variant='p' marginRight='8px' fontSize='18px' fontWeight='400'>شماره پرونده  :</Typography>
                            <Typography variant='p' marginRight='8px' fontSize='19px' fontWeight='700'>۳۲۴۹</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box width='1327px' marginTop='15px' marginBottom='15px'>
                <TextField fullWidth id="outlined-search" placeholder='جستجو' type="search"
                    InputProps={{

                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                />
            </Box>
            <Box width='1327px'>
                <Box className={classes.BoxShadow} sx={{ width: '70%', marginRight: '24px' }}>

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
                        }} />

                </Box>
            </Box>
        </Box>
    )
}
