import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardsArticle(props) {
    return (
        <Card sx={{ maxWidth: 345 ,height:'fit-content' ,border :'none',textAlign:'right'}}>
            <CardMedia
                style={{ height:150,paddingTop:10 }}
                image={props.img}
            />
            <CardContent style={{textAlign:'right' ,height:20,marginTop:-36}}>
                <Typography  style={{fontSize:10 ,fontWeight:'bolder'}} gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography  style={{fontSize:6 ,fontWeight:'bolder' ,color:'#151313'}}  variant="body2" >
                   {props.description}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'end'}}>
                <Button style={{fontSize:6 ,fontWeight:'bolder',color:'#FF3D00',paddingRight:8}} size="small" >مطالعه کامل مقاله</Button>
            </CardActions>
        </Card>
    )
}
