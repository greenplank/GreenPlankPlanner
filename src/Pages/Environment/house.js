import React,{useState,useEffect} from "react";
import { makeStyles, useTheme, withStyles ,} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


import { terraceEnv } from "../../data/Terrace/Environment";

import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";



const useStyles = makeStyles((theme) => ({
    gridList: {
      width: 500,
      height: 450
    },
    media: {
      height: 100
    },
  }));


  export default function Houses({selectedEnvId=1,setSelectedEnvVarId=()=>{},selectedEnvVarId,setImg=()=>{}}){

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const [bgImage,setBgImg]=useState('');

    useEffect(() => {
      let background = terraceEnv.find(env =>env.id===selectedEnvId);
      let variations = background.variations;
      let selectedVaritation = variations?.find(vari=>vari.id===selectedEnvVarId);
      setBgImg(selectedVaritation?.image);
      setImg(selectedVaritation?.image);
    }, [] );

    useEffect(() => {
      let background = terraceEnv.find(env =>env.id===selectedEnvId);
      if(background.id>1){
      
        setBgImg(background.image);
        setImg(background.image);
      }
      else{
        let background = terraceEnv.find(env =>env.id===selectedEnvId);
      let variations = background.variations;
      let selectedVaritation = variations.find(vari=>vari.id===selectedEnvVarId);
      setBgImg(selectedVaritation.image);
      setImg(selectedVaritation.image)
      }
    }, [selectedEnvId,selectedEnvVarId] );

    

    return(
      <Grid container direction="column">
         <Grid item>
         <Grid container direction="row">
           <Grid item lg>
           <img src={bgImage} alt="images" width="400px" height="200px"/>
           </Grid>
         </Grid>
        </Grid>
        <Grid item>
        {
          terraceEnv.map(({title='someting',variations=[],id})=>{
          
           if(id===selectedEnvId) 
           return (
            <Grid container direction="row" >
             {variations.map(({thumbnail="",title:mapTitle='something else',id,image})=>{ 
               return(
                <Grid item lg={4} onClick={()=>{
                  setBgImg(image)
                  setSelectedEnvVarId(id)}}>
                 <Card style={{ border: "2px solid grey", boxShadow: "1" }}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={thumbnail} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      {mapTitle}
                    </Button>
                  </CardActions>
                 </Card>
                </Grid>
               );
             })}
       </Grid>
          )
        })
        }
        </Grid>
        </Grid>
        
    )
  }