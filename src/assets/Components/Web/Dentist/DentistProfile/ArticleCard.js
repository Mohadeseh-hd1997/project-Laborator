import {Box, Card, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ArticleCard({image, title, desc, isFav}) {
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
            <img
                src={image}
                alt={title}
                style={{
                    height: '-webkit-fill-available'
                }}/>
            <Box sx={{
                width: '975px',
                height: '157px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop:'24px'
                }}>
                    <Typography
                        variant={'h6'}
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginRight: '24px',
                        }}>
                        {title}
                    </Typography>
                    <FavoriteIcon sx={{
                        color: '#C30000',
                        display: 'flex',
                        marginInlineStart: 'auto',
                        marginLeft: '24px',
                    }}/>
                </Box>
                <Box
                    sx={{
                        marginRight: '24px',
                        marginLeft: '24px',
                        marginTop: '15px',
                    }}>
                    <Typography
                        sx={{
                            fontSize: '14px'
                        }}>
                        {desc.length <= 350 ? desc : (desc.substr(0, 350) + "...")}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}