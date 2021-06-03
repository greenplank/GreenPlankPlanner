import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../images/roof_standard/roof_standard_aa5.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


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
  

  export default function Roofs() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  
    return(
            <GridList cellHeight={210} spacing={6} cols={3}>
              <GridListTile style={{ marginTop: "-.1em" }} cols={3}>
                <img src={background} alt="images" />
              </GridListTile>
            </GridList>
    )
  }