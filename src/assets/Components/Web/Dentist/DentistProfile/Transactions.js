import React from "react";
import SwipeableViews from "react-swipeable-views";
// mui
import { Box, Card } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// components 
import NavGrid from "../../../../components/DentistProfile/NavGrid";
import TransactionTab from "../../../../components/DentistProfile/TransactionTab";
import TransactionsReportTab from "../../../../components/DentistProfile/TransactionsReportTab";


export default function Transactions(props,active) {


    const { children, svalue, index, ...other } = props;
    const [value, setValue] = React.useState(active);
    console.log(active)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    return (
        <>
            <NavGrid />
            <Box sx={{
                width: '1254px',
                height: 'content',
                marginRight: '24px',
            }}>
                <Card sx={{ p: '48px', height: '880px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
                        <Box sx={{
                            marginTop: '24px',
                            marginBottom: '24px',
                            bgcolor: 'background.paper',
                            width: '100%',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <AppBar
                                position="static"
                                sx={{
                                    border: '1px solid #4D69E4',
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    backgroundColor: 'white',
                                    color: '#4D69E4',
                                    width: '36%',
                                    alignSelf: 'center'
                                }}>
                                <Tabs
                                    TabIndicatorProps={{
                                        style: { display: 'none' }
                                    }}
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                    visibleScrollbar="false"
                                >
                                    <Tab label="تراکنش ها"  sx={{ fontWeight: 'bold' }} />
                                    <Tab label="گزارشات نموداری"
                                        sx={{ borderRight: '1px solid #7e92eb', fontWeight: 'bold' }} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                index={value}
                                onChangeIndex={handleChangeIndex}
                                sx={{ width: '100%' }}
                            >
                                <Box
                                    style={{ marginTop: '24px', width: '100%' }}
                                    role="tabpanel"
                                    hidden={svalue !== index}
                                    id={`simple-tabpanel-${index}`}
                                    aria-labelledby={`simple-tab-${index}`}
                                    {...other}
                                >
                                    <TransactionTab />
                                </Box>
                                <Box
                                    style={{ marginTop: '24px' }}
                                    role="tabpanel"
                                    hidden={svalue !== index}
                                    id={`simple-tabpanel-${index}`}
                                    aria-labelledby={`simple-tab-${index}`}
                                    {...other}
                                >
                                    <TransactionsReportTab />
                                </Box>
                            </SwipeableViews>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </>
    );
}