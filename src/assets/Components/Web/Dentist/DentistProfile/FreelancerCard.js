import {Box, Card, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function FreelancerCard({name, avatar, expertise, rate}) {
    return (
        <Box
            sx={{
                height: '178px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <img src={avatar} alt={'logo'}
                 style={{
                     position: 'inherit',
                     zIndex: 1,
                     marginBottom: '-50px',
                     width: '114px',

                 }}/>
            <Card sx={{
                position: 'inherit',
                zIndex: 0,
                width: '370px',
                height: '110px',
                boxShadow: 'none',
                border: 1,
                borderColor: '#E5E5E5',
                "&:hover": {
                    boxShadow: 3,
                },
            }}>
                <Typography sx={{
                    position: 'absolute',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    width: '42px',
                    height: '21px',
                    display: 'flex',
                    marginRight: '24px',
                    marginTop: '8px'
                }}>
                    {rate}
                    <StarIcon sx={{color: '#c29552'}}/>
                </Typography>
                <FavoriteIcon sx={{
                    color: '#C30000',
                    display: 'flex',
                    marginInlineStart: 'auto',
                    marginLeft: '8px',
                    marginTop: '8px'
                }}/>
                <Typography sx={{fontSize: '18px', fontWeight: 'bold'}}>{name}</Typography>
                <Typography sx={{fontSize: '14px', marginTop: '8px'}}>{expertise}</Typography>
            </Card>
        </Box>
    );
}