import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../images/balcony/balcony_standard_aa5.jpg"

import Balconys from '../../components/Environments/balcony'


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

  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: null,
    justifyItems: "flex-end",
  }
}));

export default function House() {
  const ter_hous_variation_images=[
    {
     id:1,
     img:"../../../images/home_board/home_board_aa5.jpg",
     title:"plaster",
     name:"img"
  }]
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Balconys/>
    </Grid>
  );
}
