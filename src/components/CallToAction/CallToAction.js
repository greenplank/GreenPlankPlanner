import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles,useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Button from '@material-ui/core/Button'
import background from '../../images/contact.jpg'
import mobileBackground from '../../images/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 15,
        borderRadius: 50,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
        backgroundRepeat: "no-repeat",
        height: "15em",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment:"inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:60,
        width:225,
        backgroundColor:theme.palette.common.orange,
        fontSize:"1.5em",
        marginRight:"5em",
        marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:0,
            marginRight:0
        }
    }
}));

export default function CallToAction() {
    const classes = useStyles();
    const theme=useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))



    return (
        <Grid container  alignItems="center" 
        justify={matchesSM ? "center" : "space-between"} 
        className={classes.background} 
        direction={matchesSM ? "column" :"row"}
        >
            <Grid item style={{marginLeft:matchesSM ? 0 : "5em",textAlign:matchesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item style={{align:"left"}}>
                        <Typography style={{marginLeft:"-2em",color:"white",fontWeight:400}} variant="h2">Get Sample Estimation</Typography>
                        <Typography style={{marginLeft:"-8em",color:"white",fontWeight:400,fontSize:'1.5rem'}} variant="body1">For more details contact us</Typography>
                        <Grid container  justify={matchesSM ? "center" : undefined } item >
                            <Button variant="contained" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                
            </Grid>
        </Grid>
    )
}
