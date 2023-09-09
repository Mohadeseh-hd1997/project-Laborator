import React from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Button, Card,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import excelIcon from "../../icons/excelIcon.svg";
import pdfIcon from "../../icons/pdfIcon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";


const rows = [
    {
        id: 1,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]
    },
    {

        id: 2,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 3,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 4,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 5,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 6,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 7,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 8,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 9,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 10,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {

        id: 11,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {
        id: 12,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]

    },
    {
        id: 13,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]
    },
    {
        id: 13,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]
    },
    {
        id: 13,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]
    },
    {

        id: 13,
        date: '1402/01/01',
        price: 1500000,
        detail: [
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            },
            {
                product: 'دستکش جراحی 7/5 - برند - شماره قطعه 17 - بارکد 17',
                amount: 1,
                support: 'ts'
            }
        ]
    }
];
export default function TransactionTab() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChangeAcc = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Typography variant={'h4'} sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlignLast: 'right'
            }}>
                تراکنش ها
            </Typography>
            <Button startIcon={<PrintOutlinedIcon/>} sx={{backgroundColor: '#EFF2FF'}}>پرینت</Button>
            <Button startIcon={<img src={excelIcon} alt={'excel'}/>}
                    sx={{backgroundColor: '#EFF2FF', marginLeft: '8px'}}>خروجی
                اکسل</Button>
            <Button startIcon={<img src={pdfIcon} alt={'pdf'}/>}
                    sx={{backgroundColor: '#EFF2FF', marginLeft: '8px'}}>خروجی
                Pdf</Button>
            <Box sx={{
                borderTop: 1,
                borderColor: '#E5E5E5',
                marginTop: '32px',

            }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        height: '800px',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': {
                            width: '0.4em'
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                            outline: '1px solid slategrey'
                        }
                    }}>
                    <Table sx={{minWidth: 650, direction: 'rtl'}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{borderBottom: 0}}
                                    width={'25%'}
                                    align="right">
                                    کد سفارش
                                </TableCell>
                                <TableCell
                                    sx={{borderBottom: 0}}
                                    width={'25%'}
                                    align="right">
                                    تاریخ و ساعت پرداخت
                                </TableCell>
                                <TableCell
                                    sx={{borderBottom: 0}}
                                    width={'25%'}
                                    align="right">
                                    مبلغ سفارش
                                </TableCell>
                                <TableCell
                                    sx={{borderBottom: 0}}
                                    width={'25%'}
                                    align="right">
                                    اطلاعات محصول/خدمات
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell colspan="4" sx={{p: 0}}>
                                        <Accordion
                                            expanded={expanded === row.id}
                                            onChange={handleChangeAcc(row.id)}
                                            sx={{
                                                borderRadius: '8px',
                                                marginTop: '16px',
                                                border: 0,
                                                boxShadow: 0,
                                                width: '100%',
                                                '& .Mui-expanded': {
                                                    backgroundColor: '#F5F5F5',
                                                    borderRadius: '8px',
                                                    marginTop: '24px'
                                                },
                                            }}>
                                            <AccordionSummary
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                sx={{
                                                    p: 0,
                                                    paddingRight: '16px',
                                                    height: '64px'
                                                }}
                                            >
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    width: '100%',
                                                    textAlign: 'right'
                                                }}>
                                                    <Typography sx={{width: '25%'}}>{row.id}</Typography>
                                                    <Typography sx={{width: '25%'}}>{row.date}</Typography>
                                                    <Typography sx={{width: '25%'}}>{row.price}</Typography>
                                                    <Typography sx={{
                                                        width: '25%',
                                                        color: '#2143DD'
                                                    }}>
                                                        اطلاعات بیشتر
                                                        <span>
                                                            <ExpandMoreIcon/>
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails
                                                sx={{
                                                    backgroundColor: '#F5F5F5',
                                                }}>
                                                <Card
                                                    sx={{
                                                        height: 'content',
                                                        paddingRight: '24px',
                                                        paddingLeft: '24px'
                                                    }}>
                                                    <TableContainer>
                                                        <Table sx={{
                                                            direction: 'rtl',
                                                            marginTop: '16px'
                                                        }}
                                                               aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{border: 0}}
                                                                        width={'80%'}
                                                                        align="right">محصول/خدمات</TableCell>
                                                                    <TableCell
                                                                        sx={{border: 0}}
                                                                        width={'10%'}
                                                                        align="right">تعداد</TableCell>
                                                                    <TableCell
                                                                        sx={{border: 0}}
                                                                        width={'10%'}
                                                                        align="right">
                                                                        پشتیبانی
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {row.detail.map((detail) => (
                                                                    <TableRow
                                                                        key={row.id}
                                                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                                    >
                                                                        <TableCell
                                                                            sx={{border: 0}}
                                                                            width={'80%'}
                                                                            align="right">{detail.product}</TableCell>
                                                                        <TableCell
                                                                            sx={{border: 0}}
                                                                            width={'10%'}
                                                                            align="right">{detail.amount}</TableCell>
                                                                        <TableCell
                                                                            sx={{border: 0}}
                                                                            width={'10%'}
                                                                            align="right">
                                                                            <ForumOutlinedIcon
                                                                                fontSize="small"
                                                                                color="primary"
                                                                                sx={{
                                                                                    borderRadius: '8px',
                                                                                    p: '12px',
                                                                                    width: '24px',
                                                                                    height: '24px',
                                                                                    background: '#EFF2FF'
                                                                                }}/>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Card>
                                            </AccordionDetails>
                                        </Accordion>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}