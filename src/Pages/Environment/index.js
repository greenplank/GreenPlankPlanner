import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CheckIcon from "@material-ui/icons/Check";

import Button from "@material-ui/core/Button";
import background from "../../images/home_plaster/home_plaster_aa5.jpg";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import { terraceEnv } from "../../data/Terrace/Environment";

import { useContext } from "react";
import  ContextProvider from "../../helpers/ContextProvider";

import { Link } from "react-router-dom";

import Houses from "../../Pages/Environment/house";
import Gardens from "../../Pages/Environment/garden";
import Roofs from "../../Pages/Environment/roof";
import Balconys from "../../Pages/Environment/balcony";

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
  let [selectedTerraceEnv, setSelectedTerraceEnv] = useState([]);
  const [on_update_scene,scene]=useState();
  
  const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  
    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
  // const { btngroup } = useContext(ContextProvider);

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
       <div
        className={classes.root}
        style={{
          marginLeft: matchesSM ? ".3em" : matchesMD ? "6em" : "18em",
          marginRight: matchesSM ? ".5em" : "0.1em",
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
            style={{ backgroundColor: "#569936", color: "white" }}
          >
             <AddIcon />
            <Typography>Environment</Typography>
          </AccordionSummary>
      <AccordionDetails style={{ marginBottom: "-1em" }}>
      <GridList cellHeight={210} spacing={5} cols={3}>


        {terraceEnv.map((key) => {
          return (
            <GridListTile cols={0.75}>
            <button className={classes.newButton3}
              onClick={() => {
                setSelectedTerraceEnv(key);
              }}
              key={key}
            >
              {key.title}
            </button>
            </GridListTile>
          );
        })}
    
        {terraceEnv[selectedTerraceEnv].variations.length ? (
          terraceEnv[selectedTerraceEnv].variations.map(vari => {
            return (
              <div
                key={vari.title}
                onClick={() => on_update_scene(vari.title)}
                className="img_cont m-2"
                style={{ position: "relative", cursor: "pointer" }}
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={vari.image}
                  alt=""
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "rgba(1, 1,1,0.5"
                  }}
                  className="m-0 text-light w-100 text-center"
                >
                  <small>{vari.title}</small>
                </p>
              </div>
            );
          })
        ) : (
          <p>No Variatian avaliable at the moment</p>
        )}
     
    
      {/* {
        terraceEnv.map((item)=>
        <div>
          <button>{item.title}</button>
        {item.variations.map((sub)=>{
        return(
          <div>
            <img src={sub.thumbnail} />
            <p style={{color:"#ffffff"}}>{sub.title}</p>
          </div>
        )
      }
        )}

        </div>
        )
      } */}
      

       <Houses />
       {/* <Gardens/> */}
       {/* <Roofs/> */}
       {/* <Balconys/> */}

       </GridList>
       </AccordionDetails>
        </Accordion>
        <GridList cellHeight={210} cols={3}>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/"
              className={classes.newButton1}
            >
              Back
            </Button>
          </GridListTile>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/decking"
              className={classes.newButton1}
            >
              Next
            </Button>
          </GridListTile>
        </GridList>
      </div>
    </Grid>
  )
}
