import React from "react";
// mui
import { Box, Button, Typography } from "@mui/material";
// img 
import PatternSubs from '../../../../img/PatternSubs.svg'
import rezaMolla from "../../../../img/rezaMolla.svg";
import Subs3w from '../../../../icons/Subs3w.svg';
import Subs3b from '../../../../icons/Subs3b.svg';
import SubscriptionCard from "../../../../components/DentistProfile/SubscriptionCard";

export default function Subscription() {
    return (
        <div style={{
            backgroundImage: `url(${PatternSubs})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: "right",
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Typography variant={'p'} sx={{
                marginTop: '100px',
                color: '#1C39BB',
                fontSize: '52px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                خرید / تمدید اشتراک
            </Typography>
            <Box>
                <img
                    style={{
                        minWidth: '150px',
                        minHeight: '154px',
                        marginTop: '52px'
                    }}
                    src={rezaMolla}
                    alt={'dentist img'}
                />
                <Box sx={{ justifyContent: 'center' }}>
                    <Typography variant={'p'} sx={{ color: '#2143DD', fontWeight: 'bolder', fontSize: '34px' }}>
                        دکتر رضا ملا
                    </Typography>
                </Box>
                <Typography variant={'p'} sx={{ fontWeight: 'bolder', fontSize: '18px' }}>
                    پریودنتیست | ارتودنتیست
                </Typography>
            </Box>
            <Box>
                <SubscriptionCard keyy={'اشتراک ۳ ماهه'} value={'۱۷۵۰۰۰ تومان'} icon={Subs3w} isSelect={true} />
                <SubscriptionCard keyy={'اشتراک ۶ ماهه'} value={'۵۲۵۰۰۰ تومان'} icon={Subs3b} isSelect={false} />
                <SubscriptionCard keyy={'اشتراک ۱ ساله'} value={'۷۳۵۰۰۰  تومان'} icon={Subs3b} isSelect={false} />
            </Box>
            <Button sx={{
                width: '272px',
                height: '72px',
                backgroundColor: '#9658DE',
                borderRadius: '10px',
                fontSize: '32px',
                color: '#fff',
                p: 0,
                margin: 0,
                marginTop: '113px',
                marginBottom: '235px'
            }}>
                پشتیبانی
            </Button>
        </div>
    );
}