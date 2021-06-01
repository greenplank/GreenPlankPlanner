import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../images/home_plaster/home_plaster_aa5.jpg";

import { terraceEnv } from "../../data/Terrace/Environment";

import Houses from "../../Pages/Environment/house";

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
  },
}));

export default function Index() {
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
       <Houses/>
    </Grid>
  )
}
