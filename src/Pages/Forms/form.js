import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { form } from "../../data/Terrace/form";

// import { useContext } from "react";
// import  {TerraceContext} from "../../helpers/ContextProvider";

export default function Form({setShapeId=()=>{}}) {
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // const {selectedEnvId,selectShape,onEnvChange, onShapeChange} = useContext(TerraceContext);

  return (
    <>
            <Grid container direction="column">
              <Grid item >
                <Typography align={"left"} style={{marginLeft:"1em",marginTop:"1em",marginBottom:"1em"}} variant="h6">Basic Shapes</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                {
                  form.map(fr => {
                  return (
                  <Grid item lg={4} key={fr.id} >
                  <img src={fr.image} onClick={()=>setShapeId(fr.id)} />
                 </Grid>                                                                                                            
                  );
                  })
                }
                </Grid>
              </Grid>
            </Grid>
    </>
  );
}
