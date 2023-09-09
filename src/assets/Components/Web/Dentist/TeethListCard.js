import * as React from 'react';
//mui
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// img
import t1 from '../../../img/t1.svg';
import t2 from '../../../img/t2.svg';
import t3 from '../../../img/t3.svg';
import t4 from '../../../img/t4.svg';



export default function TeethListCard(props) {
    return (
        < Card sx={{ maxWidth: '411px', height: 'fit-content', border: 'none', borderRadius: '8px' }}>

            <CardContent style={{ textAlign: 'right', height: '469px', width: '411.33px', padding: '24px' }}>
                <Box borderRadius='8px' width='363.33px' height='86px' textAlign='center' display='flex' flexDirection='column' justifyContent='center' sx={{ backgroundColor: '#EFF2FF' }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 900, color: '#2143DD' }} gutterBottom variant="h5" component="div">
                        {props.number} دندان شماره
                    </Typography>
                </Box>
                <Box borderBottom='1px solid #E5E5E5' marginTop='24px' display='flex' flexDirection='row' justifyContent='space-between' height='43px' marginBottom='24px'>
                    <Box width='70%' sx={{ color: '#4C4C4C', fontSize: '18px', textAlign: 'left', fontWeight: 700 }}> {props.TypeTreeatment}</Box>
                    <Box width='30%' marginRight='8px'> <Typography sx={{ color: '#4C4C4C', fontSize: '18px' }} >نوع درمان</Typography></Box>
                    <Box width='10%'> <img src={t1} /> </Box>
                </Box>
                <Box borderBottom='1px solid #E5E5E5' display='flex' flexDirection='row' justifyContent='space-between' height='43px' marginBottom='24px'>
                    <Box width='70%' sx={{ color: '#4C4C4C', fontSize: '18px', textAlign: 'left', fontWeight: 700 }}>
                        {props.TypeDesign}
                    </Box>
                    <Box width='30%' marginRight='8px' ><Typography sx={{ color: '#4C4C4C', fontSize: '18px' }}>نوع طراحی</Typography></Box>


                    <Box width='10%'><img src={t2} /></Box>
                </Box>
                <Box borderBottom='1px solid #E5E5E5' display='flex' flexDirection='row' justifyContent='space-between' height='43px' marginBottom='24px'>
                    <Box width='70%' sx={{ color: '#4C4C4C', fontSize: '18px', textAlign: 'left', fontWeight: 700 }}>
                        {props.colorBase}
                    </Box>
                    <Box width='30%' marginRight='8px' ><Typography sx={{ color: '#4C4C4C', fontSize: '18px' }}>رنگ Base</Typography></Box>
                    <Box width='10%'><img src={t3} /></Box>

                </Box>
                <Box borderBottom='1px solid #E5E5E5' display='flex' flexDirection='row' justifyContent='space-between' height='43px' marginBottom='24px'>
                    <Box width='70%' sx={{ color: '#4C4C4C', fontSize: '18px', textAlign: 'left', fontWeight: 700 }}>{props.colorProtez}</Box>

                    <Box width='30%' marginRight='8px'><Typography sx={{ color: '#4C4C4C', fontSize: '18px' }} >رنگ پروتز</Typography></Box>
                    <Box width='10%'> <img src={t3} /></Box>

                </Box>
                <Box borderBottom='1px solid #E5E5E5' display='flex' flexDirection='row' justifyContent='space-between' height='43px' marginBottom='24px'>
                    <Box width='70%' sx={{ color: '#4C4C4C', fontSize: '18px', textAlign: 'left', fontWeight: 700 }}>  {props.TeethMaterial} </Box>

                    <Box width='30%' marginRight='8px'> <Typography sx={{ color: '#4C4C4C', fontSize: '18px' }}>متریال دندان</Typography> </Box>
                    <Box width='10%'> <img src={t4} /> </Box>

                </Box>

            </CardContent>
        </Card>
    )
}
