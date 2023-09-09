import {Box, Card, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function VideoCard({image, title, desc, isFav}) {
    return (
        <Card sx={{
            width: '354px',
            height: '363px',
            borderRadius: '8px',
            border: 1,
            borderColor: '#E5E5E5',
            "&:hover": {
                boxShadow: 3,
            },
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <img
                src={image}
                alt={title}
                style={{
                    minWidth: '354px',
                    height: '-webkit-fill-available'
                }}/>
            <Box sx={{
                width: '354px',
                height: '131px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Typography
                        variant={'h6'}
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginRight: '27px',
                        }}>
                        {title}
                    </Typography>
                    <FavoriteIcon sx={{
                        color: '#C30000',
                        display: 'flex',
                        marginInlineStart: 'auto',
                        marginLeft: '27px',
                    }}/>
                </Box>
                <Box
                    sx={{
                        marginRight: '27px',
                        marginLeft: '27px',
                        marginTop: '15px',
                    }}>
                    <Typography
                        variant={'p'}
                        sx={{
                            fontSize: '14px'
                        }}>
                        {desc.length <= 54 ? desc : (desc.substr(0, 54) + "...")}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}