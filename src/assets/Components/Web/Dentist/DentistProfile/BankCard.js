import {Box, IconButton} from "@mui/material";
import bankCardImage from '../../img/bankCardImage.svg';
import pandLogoBankCard from '../../img/pandLogoBankCard.svg';
import simBank from '../../img/simBank.svg';
import penSquerLight from "../../icons/penSquerLight.svg";
import React from "react";
import {addCommas, digitsEnToFa} from "@persian-tools/persian-tools";


export function BankCard({inventory, sheba}) {
    return (
        <>
            <Box sx={{
                width: '448px',
                height: '295px',
                backgroundImage: `url(${bankCardImage})`,
                borderRadius: '8px'
            }}>
                <Box sx={{
                    width: '448px',
                    height: '295px',
                    backgroundImage: `url(${pandLogoBankCard})`,
                    backgroundRepeat: false,
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'self-end',
                }}>

                    <Box sx={{
                        width: '448px',
                        height: '70px',
                        backgroundColor: '#000',
                        backgroundRepeat: false,
                        borderBottomRightRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        position: 'relative',
                        top: '225px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent: 'center'
                    }}>

                        <p style={{
                            color: '#fff',
                            fontSize: '17px',
                            letterSpacing: 3,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <IconButton aria-label="delete" size="small">
                                <img src={penSquerLight}/>
                            </IconButton>
                            {sheba}
                        </p>

                    </Box>
                    <Box
                        sx={{width: 'inherit', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', marginRight: '31px', color: '#fff'}}>
                            <p style={{fontSize: '18px', p: 0, margin: 0}}>
                                موجودی اعتبار
                            </p>
                            <p style={{fontSize: '54px'}}>
                                {(digitsEnToFa(addCommas(inventory)))} <span style={{fontSize: '25px'}}>  ريال</span>
                            </p>
                        </Box>
                        <img src={simBank}
                             style={{
                                 width: '66.51px',
                                 height: '48.15px',
                                 position: 'relative',
                                 top: '25px',
                                 left: '35.8px'
                             }}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
