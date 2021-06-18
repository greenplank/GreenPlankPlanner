import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";


import img11 from "../../images/SVG/squaredisplay.png";
import img12 from "../../images/SVG/cshapedisplay.png";
import img13 from "../../images/SVG/lshapedisplay.png";
import img14 from "../../images/SVG/octaldisplay.png";
import img15 from "../../images/SVG/pantagondisplay.png";

export default function Form() {
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
            <Grid container direction="column">
              <Grid item >
                <Typography align={"left"} style={{marginLeft:"1em",marginTop:"1em",marginBottom:"1em"}} variant="h6">Basic Shapes</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item lg={4}>
                    <img alt="image" src={img11} />
                  </Grid>
                  <Grid item lg={4}>
                    <img alt="image" src={img12} />
                  </Grid>
                  <Grid item lg={4}>
                    <img alt="image" src={img13} />
                  </Grid>
                  <Grid item lg={4}>
                    <img alt="image" src={img14} />
                  </Grid>
                  <Grid item lg={4}>
                    <img alt="image" src={img15} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    </>
       
  );
}
