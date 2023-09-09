import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
//img 
import stars from  '../../../img/star.svg';

export default function CommentLaborator(props) {
  return (
    <Card sx={{
        width: '1150px',
        height: '157px',
        borderRadius: '8px',
        border: 1,
        borderColor: '#E5E5E5',
        "&:hover": {
            boxShadow: 3,
        },
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        alignItems: 'center',
        textAlign: 'right'
    }}>
        <Typography>{props.DrName}</Typography>
        <Typography>{props.Date}</Typography>
        <Typography> <img src={StarIcon} alt='star'/> {props.Rate}</Typography>
        <Box sx={{
            width: '975px',
            height: '157px'
        }}>
            
            <Box
                sx={{
                    marginRight: '24px',
                    marginLeft: '24px',
                    marginTop: '15px',
                }}>
                <Typography
                    variant={'p'}
                    sx={{
                        fontSize: '14px'
                    }}>
                    {props.Description}
                </Typography>
            </Box>
        </Box>
    </Card>
  )
}
