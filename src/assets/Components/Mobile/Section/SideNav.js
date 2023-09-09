import react, {useState} from 'react';
import {NavLink} from "react-router-dom";
 // componnets 
import {navData, navData2} from "../../pages/Web//Dashboardchild/DashboardScreen"; 
// style 
import styles from './sidenav.module.css';
// mui 
import {Button, CssBaseline, Box} from '@mui/material'
import Grid from "@material-ui/core/Grid";
 // img 
import pandLiteLogo from '../../img/pandLiteLogo.svg';
import pandlogo from '../../img/pand.svg';

export default function SideNav() {
    const [open, setopen] = useState(true);
    const toggleOpen = () => {
        setopen(!open)
    }

    return (
        
           

            <Box className={open ? styles.sidenav : styles.sidenavClosed}>
               
                <Box sx={{marginTop: '64px'}}>
                    <Button className={styles.menuBtn} onClick={toggleOpen}>
                        {open ? <img src={pandlogo} style={{marginTop: '17px', marginBottom: '88px'}}/> :
                            <img src={pandlogo} style={{marginTop: '17px', cBottom: '88px'}}/>}
                    </Button>


                    <br/>
                    <Box sx={{marginBottom: '140px'}}>
                        {navData.map(item => {
                            return <NavLink
                                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                                key={item.id} className={styles.sideitem} to={item.link}>
                                <span style={{paddingLeft: 10}}>{item.icon}
                                    <span style={{paddingRight: '13px'}}
                                          className={open ? styles.linkText : styles.linkTextClosed}>
                                    {item.text}</span></span>

                                <span  className={open ? styles.Arrow : styles.ArrowClosed} style={{float: 'left'}}>{item.arrowDown}</span>
                            </NavLink>
                        })}
                    </Box>
                    <Box sx={{paddingBottom: '112px'}}>
                        {navData2.map(item => {
                            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                                <span style={{paddingLeft: 10}}>{item.icon}</span>
                                <span className={open ? styles.linkText : styles.linkTextClosed}>{item.text}</span>
                            </NavLink>
                        })}
                    </Box>
                </Box>
                <Box sx={{paddingBottom: '651px'}}>
                    <img src={pandLiteLogo}/>
                </Box>
            </Box>
     
    )
}