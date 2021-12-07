import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
  
  const renderplank=(pl,text)=>{
      return(
        <Grid container direction="column">
        <Grid item lg={6}>
       <img src={pl}/>
       <Typography
       style={{ marginTop:"-1.8em",color: "black" }}
       variant="h5">
       {text}
     </Typography>
     </Grid>
     </Grid>
      );
  }

  debugger;
  export default function Plank({image,size}) {
  
        return(
            <>
            {renderplank(image,size)}
            </>
        );
  }