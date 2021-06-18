import React, { useState,useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import styled from "styled-components";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import { board } from "../../data/Terrace/board";
import '../../Styles/board.css'

import { useContext } from "react";
import  {TerraceContext} from "../../helpers/ContextProvider";

import { Link } from "react-router-dom";

import BackgroundImg from "../Environment/background.js";

import SmartClassic from "../../Pages/Board/smartClassic";
import {terraceEnv} from "../../data/Terrace/Environment";


const useStyles = makeStyles((theme) => ({

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 60,
    width: 225,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5em",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
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
  avatar: {
    height: "3.5em",
    width: "3.5em",
    [theme.breakpoints.down("sm")]: {
      height: "3em",
      width: "3em",
      maxHeight: 300,
      maxWidth: 300,
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
  gridList: {
    width: 500,
    height: 450,
  },
  media: {
    height: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

const AccordionDetailsFilter = withStyles((theme) => ({
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

const AccordionSummaryFilter = withStyles({
  root: {
    flexDirection: "column",
  },
  content: {
    marginBottom: 0,
  },
  expandIcon: {
    marginRight: 0,
    paddingTop: 0,
  },
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

const AccordionFilter = withStyles({
  root: {
    border: "3px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 30,
    },
  },
  expanded: {},
})(MuiAccordion);


const SampleOrder = styled.button`
  font-size: 1rem;
  padding: 1rem 10.2rem 1rem 10.2rem;
  margin-right: 0.1em;
  background: #4563;
  color: #000;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #fff;
  }
`;

export default function Border() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [brdId,setBrdId] = useState();
  const [image, setImg] = useState(null);
  const [flag,setFlag] =useState(false);
  

  const [expanded, setExpanded] = React.useState("panel1");


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {selectedBoardId,selectedBoardColorVarId,onBoardChange, onBoardColorVarChange,getEnvId,getVarId} = useContext(TerraceContext);
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
      <BackgroundImg image={image} properties={{backgroundAttachment:"fixed",backgroundPosition:"cente" ,backgroundRepeat: "no-repeat",backgroundColor: 'black',opacity:flag?1:0.1,width:'100%'}}/>
      {!flag && <h5 style={{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"20em",height:"20em",color:"black"}}>Choose the Decking</h5>}
      <div
        className={classes.root}
        style={{
          marginLeft: matchesSM ? ".3em" : matchesMD ? "6em" : "18em",
          marginRight: matchesSM ? ".5em" : "0.1em",
          position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",
          marginTop: matchesSM ? "8em" : matchesMD ? "2em" : "-2em"
        }}
      >
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ backgroundColor: "#369956", color: "white" }}
          >
            {<AddIcon />}
            <Typography>Board & Colour</Typography>
          </AccordionSummary>

          <AccordionDetails
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <GridList
              cellHeight={60}
              spacing={5}
              className={classes.gridList}
              cols={3}
            >

                {
                    board.map(brd=>{
                      return(
                  <Grid item  lg={3} >
                  <Button class={brd.id !== brdId ? "envButton" : "envButtonSelected"}
                    variant="contained"
                    onClick={()=>{
                      setFlag(true)
                      onBoardChange(brd.id);
                     let envArray = brd.variations.filter(a=>a.Envid===i);
                     if(vari>0){
                      let obj = envArray.find(a=>a.Varid===vari);
                      setImg(obj?.image);
                     }
                     else{
                       setImg(envArray[0].image);
                     }

                      setBrdId(brd.id);
                    }}
                  >
                    {brd.title}
                  </Button>
                   </Grid>
                      )
                    })
                  }
                  
              <SmartClassic selectedBoardId={selectedBoardId} selectedBoardColorVarId={selectedBoardColorVarId} setSelectedBoardColorVarId={onBoardColorVarChange} setImage={setImg}/>
             
            </GridList>
          </AccordionDetails>
        </Accordion>
        <GridList cellHeight={210} cols={3}>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/index"
              className={classes.newButton1}
            >
              Back
            </Button>
          </GridListTile>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/indexform"
              className={classes.newButton1}
            >
              Next
            </Button>
          </GridListTile>
        </GridList>
      </div>

    </Grid>
  );
}
