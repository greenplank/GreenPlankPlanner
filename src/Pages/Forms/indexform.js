import React,{useState,useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Form from "../../Pages/Forms/form";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import BackgroundImg from "../Environment/background.js";

import { Link } from "react-router-dom";
import { useContext } from "react";
import  {TerraceContext} from "../../helpers/ContextProvider";

import {terraceEnv} from "../../data/Terrace/Environment";


const useStyles = makeStyles((theme) => ({
  newButton1: {
    height: 60,
    width: 200,
    borderRadius: 0,
    fontSize: ".3em",
    color: "white",
    backgroundColor: "#369956",
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
  },
  expanded: {},
})(MuiAccordion);

export default function FormIndex() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    const [image, setImg] = useState(null);

    const {getEnvId,getVarId} = useContext(TerraceContext);
    let i = getEnvId();
    let vari = getVarId();
  useEffect(()=>{
    if(i!==null){
      let env = terraceEnv.find(a=>a.id===i);
      if(env.variations){
         let variation = env.variations.find(a=>a.id===vari);
        setImg(variation.image)
      }
      else{
        setImg(env.image);
      }
    }
  },[i,vari])

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
    <BackgroundImg image={image} properties={{backgroundAttachment:"fixed",backgroundPosition:"cente" ,backgroundRepeat: "no-repeat",backgroundColor: 'black',opacity:0.1,width:'100%'}}/>
    <h5 style={{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"20em",height:"20em",color:"black"}}>Choose the terrace shape</h5>
      <div
        className={classes.root}
        style={{
          marginLeft: matchesSM ? ".3em" : matchesMD ? "6em" : "18em",
          marginRight: matchesSM ? ".5em" : "0.1em",
          position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",
          marginTop:"-2em"
        }}
      >
        <Accordion
          elevation={6}
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ backgroundColor: "#369956", color: "white" }}
          >
            {<AddIcon />}
            <Typography>Form</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ marginBottom: "1em", padding:"0 0.5em 0 0.5em" }}>

              <Form/>

          </AccordionDetails>
        </Accordion>
        <GridList cellHeight={210} cols={3}>
          <GridListTile  cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/board"
              className={classes.newButton1}
            >
              Back
            </Button>
          </GridListTile>
          <GridListTile cols={1.5}>
            <Button variant="contained" className={classes.newButton1}>
              Next
            </Button>
          </GridListTile>
        </GridList>
      </div>
    </Grid>
  );
}
