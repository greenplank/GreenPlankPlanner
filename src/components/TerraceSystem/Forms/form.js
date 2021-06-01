import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import background from "../../../images/home_board/home_board_aa5.jpg";
import mobileBackground from "../../../images/mobileBackground.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Link } from "react-router-dom";

// import img1 from "../../../images/balcony/balcony_standard_aa7.jpg";
// import img2 from "../../../images/balcony/balcony_standard_aa5.jpg";
// import img3 from "../../../images/balcony/balcony_standard_aa6.jpg";
// import img4 from "../../../images/balcony/balcony_standard_aa4.jpg";
// import img5 from "../../../images/balcony/balcony_standard_aa3.jpg";
// import img6 from "../../../images/balcony/balcony_standard_aa2.jpg";
// import img8 from "../../../images/All Profiles Color/Smart Regular Coffee Brown.png";
// import img9 from "../../../images/All Profiles Color/Classic Side 2 Chocolate.png";
// import img10 from "../../../images/All Profiles Color/Smart Natural Beach Grey.png";
import img11 from "../../../images/SVG/squaredisplay.png";
import img12 from "../../../images/SVG/cshapedisplay.png";
import img13 from "../../../images/SVG/lshapedisplay.png";
import img14 from "../../../images/SVG/octaldisplay.png";
import img15 from "../../../images/SVG/pantagondisplay.png";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 15,
    borderRadius: 50,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
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
  avatar: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
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

export default function TerraceMain() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
          elevation={6}
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ backgroundColor: "#569936", color: "white" }}
          >
            {<AddIcon />}
            <Typography>Form</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ marginBottom: "1em", padding:"0 0.5em 0 0.5em" }}>
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

           
          </AccordionDetails>
        </Accordion>
        <GridList cellHeight={210} cols={3}>
          <GridListTile  cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/smartclassic"
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
