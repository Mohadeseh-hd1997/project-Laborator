import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ({
    parent:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#F5F5F5',
        justifyContent:'space-around',
        marginBottom:5,
        fontSize:8,
        borderRadius:10,
        paddingRight:8,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:16,

    },
  
}));



export default function Requests(props) {
    const classes=useStyles();
    return (
        <div className={classes.parent}>
            <div><p style={{fontWeight:'bolder' ,fontSize:10}}>درخواست شماره : {props.RequestNumber}</p></div>
            
                <p >{props.TypeRequest}</p>
                <p style={{fontWeight:'bolder',fontSize:10}}>{props.statusRequest}</p>
                <img src={props.IconRequest} alt='icon'/>
            
        </div>
    )
}
