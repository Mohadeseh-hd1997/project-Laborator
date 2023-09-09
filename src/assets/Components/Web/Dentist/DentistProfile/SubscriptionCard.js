import {Box, Card} from "@mui/material";
import pandSubsLogo from "../../img/pandSubsLogo.svg";
import pandSubsLogoGrd from "../../img/pandSubsLogoGrd.svg";
import React from "react";

export default function SubscriptionCard({icon, keyy, value, isSelect}) {
    return (
        isSelect ? (
            <Card sx={{
                width: '1390px',
                height: '230px',
                marginTop: '69px',
                background: 'linear-gradient(to top, rgb(102,10,209,69%), #660AD1)',
                borderRadius: '8px'
            }}>
                <Box sx={{
                    width: '1390px',
                    height: '230px',
                    backgroundImage: `url(${pandSubsLogo})`,
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'row',
                    placeItems: 'center'
                }}>
                    <img src={icon} style={{
                        width: '110px',
                        height: '110px',
                        marginRight: '88px',
                        color: '#fff',
                    }} alt={'icon'}/>
                    <p style={{
                        marginRight: '35px',
                        fontSize: '36px',
                        p: 0,
                        marginTop: '14px',
                        marginBottom: '14px',
                        color: '#fff'
                    }}>{keyy}</p>
                    <p style={{
                        float: 'left',
                        marginInlineStart: 'auto',
                        marginLeft: '70px',
                        fontSize: '36px',
                        p: 0,
                        marginTop: '14px',
                        marginBottom: '14px',
                        color: '#fff'
                    }}>{value}</p>
                </Box>
            </Card>
        ) : (
            <Card sx={{
                width: '1390px',
                height: '230px',
                marginTop: '69px',
                background: '#fff',
                borderRadius: '8px'
            }}>
                <Box sx={{
                    width: '1390px',
                    height: '230px',
                    backgroundImage: `url(${pandSubsLogoGrd})`,
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'row',
                    placeItems: 'center'
                }}>
                    <img src={icon} style={{
                        width: '110px',
                        height: '110px',
                        marginRight: '88px',
                        color: '#1C39BB',
                    }} alt={'icon'}/>
                    <p style={{
                        marginRight: '35px',
                        fontSize: '36px',
                        p: 0,
                        marginTop: '14px',
                        marginBottom: '14px',
                        color: '#1C39BB'
                    }}>{keyy}</p>
                    <p style={{
                        float: 'left',
                        marginInlineStart: 'auto',
                        marginLeft: '70px',
                        fontSize: '36px',
                        p: 0,
                        marginTop: '14px',
                        marginBottom: '14px',
                        color: '#1C39BB'
                    }}>{value}</p>
                </Box>
            </Card>
        )
    );
}