import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import {Buttons} from '../../components/Main/HomeElements';

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import { terraceEnv } from "../../data/Terrace/Environment";

import { useContext } from "react";
import  {TerraceContext} from "../../helpers/ContextProvider";
import { useHistory } from 'react-router-dom';

import Houses from "../../Pages/Environment/house";
import BackgroundImage from "./background";
import '../../Styles/env_index.css'


const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
    // backgroundColor: "transparent"
    backgroundColor:"black"
  },
  expanded: {},
})(MuiAccordion);

export default function Index() {
  const history = useHistory();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

     const [envId,setEnvId] = useState();
     const [image, setImg] = useState(null);

    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const {selectedEnvId,selectedEnvVarId,onEnvChange, onEnvVarChange,setSelectedEnvVarId} = useContext(TerraceContext);

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <BackgroundImage image={image}/>
       <div
        class="root"
        style={{
          marginLeft: matchesSM ? ".3em" : matchesMD ? "6em" : "18em",
          marginRight: matchesSM ? ".5em" : "0.1em",
          marginTop:"-19em"
        }}
      >
        <Accordion
          style={{
            boxShadow: "0px 0px 44px 0px rgba(0,0,0,0.75)",
            webkitBoxShadow: "0px 0px 44px 0px rgba(0,0,0,0.75)",
            mozBoxShadow: "0px 0px 44px 0px rgba(0,0,0,0.75)",
          }}
          elevation={6}
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ backgroundColor: "#369956", color: "white" }}
          >
             <AddIcon />
            <Typography>Environment</Typography>
          </AccordionSummary>
      <AccordionDetails>
      <Grid container direction="column">
         <Grid item>
         <Grid container direction="row">
        {
        terraceEnv.map(env => {
          return (
            <Grid item lg={3} >
            <button class={env.id !== envId ? "envButton" : "envButtonSelected"}
              onClick={() => {
                onEnvChange(env.id)
                if(env.id!==1){
                  onEnvVarChange(-1)
                }else{
                  onEnvVarChange(1)
                }
                setEnvId(env.id)
              }
              }
            >
              {env.title}
            </button>
            </Grid>
          );
        })
        }
        </Grid>
    </Grid>

    <Grid item>

    <Houses selectedEnvId={selectedEnvId} selectedEnvVarId={selectedEnvVarId} setSelectedEnvVarId={onEnvVarChange} setImg={setImg} />
  
    </Grid>

       </Grid>
       </AccordionDetails>
        </Accordion>
        <Grid container direction="column">
        <Grid item>
         <Grid container direction="row">
           <Grid item lg={4} style={{marginLeft:"1.5em"}} >
           <Buttons
              variant="contained"
              onClick={()=>history.push("/")}
            >
              Back
            </Buttons>
           </Grid>
           <Grid item lg={4}>
           <Buttons
              variant="contained"
              onClick={()=>history.push("/board")}
            >
              Next
            </Buttons>
           </Grid>
         </Grid>
       </Grid>
       </Grid>
      </div>
    </Grid>
  )
}
