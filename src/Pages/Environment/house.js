import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


import { terraceEnv } from "../../data/Terrace/Environment";

import Button from "@material-ui/core/Button";
import background from "../../images/home_plaster/home_plaster_aa5.jpg";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import plaster from "../../images/plaster.jpg"
import border from "../../images/border.jpg"
import brick from "../../images/brick.jpg"

const useStyles = makeStyles((theme) => ({
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      height: "15em",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${background})`,
        backgroundAttachment: "inherit",
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    newButton: {
      paddingTop: ".6em",
      paddingBottom: ".6em",
      paddingRight: "1em",
      paddingLeft: "1em",
      borderRadius: 0,
      fontSize: ".3em",
      borderRadius: ".3em",
    },
    newButton2: {
      paddingTop: ".6em",
      paddingBottom: ".6em",
      paddingRight: "1.7em",
      paddingLeft: "1.7em",
      borderRadius: 0,
      fontSize: ".3em",
      borderRadius: ".3em",
    },
    newButton3: {
      paddingTop: ".6em",
      paddingBottom: ".6em",
      paddingRight: "1.3em",
      paddingLeft: "1.3em",
      borderRadius: 0,
      fontSize: ".3em",
      borderRadius: ".3em",
    },
    newButton4: {
      paddingTop: ".6em",
      paddingBottom: ".6em",
      paddingRight: "1.8em",
      paddingLeft: "1.8em",
      borderRadius: 0,
      fontSize: ".3em",
      borderRadius: ".3em",
    },
    newButton1: {
      height: 60,
      width: 200,
      borderRadius: 0,
      fontSize: ".3em",
      color: "white",
      backgroundColor: "#569936",
      "&:hover": {
        backgroundColor: "#000",
      },
    },
    newImg: {
      marginTop: "-2.3em",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: null,
      justifyItems: "flex-end",
    },
    gridList: {
      width: 500,
      height: 450,
    },
    media: {
      height: 100,
    },
  }));


  export default function Houses(){

    {
      terraceEnv.map((item)=>
      
      {item.variations.map((sub)=>{
      return(
        <div>
          <img src={sub.thumbnail} />
          <p style={{color:"#ffffff"}}>{sub.title}</p>
        </div>
      )
    }
      )}
      )
    }
    
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return(
      <GridList cellHeight={210} spacing={5} cols={3}>
              <GridListTile style={{ marginTop: "-2.7em" }} cols={3}>
                <img src={background} alt="images" />
              </GridListTile>
              <GridListTile cols={1}>
                <Card style={{ border: "2px solid grey", boxShadow: "1" }}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={plaster} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Plaster
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
              <GridListTile cols={1}>   
                <Card style={{ border: "2px solid grey", boxShadow: "1" }}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={brick} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Clinker
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
              <GridListTile cols={1}>
                <Card
                  style={{
                    border: "2px solid grey",
                    boxShadow: "1",
                    color: "black",
                  }}
                >
                  <CardActionArea>
                    <CardMedia className={classes.media} image={border} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Board
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
              </GridList>
    )
  }