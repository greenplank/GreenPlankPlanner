import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import background from "../../images/home_plaster/home_plaster_aa5.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import { Link } from "react-router-dom";

import plaster from "../../images/plaster.jpg"
import border from "../../images/border.jpg"
import brick from "../../images/brick.jpg"

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
      backgroundColor: "transparent",
    },
    expanded: {},
  })(MuiAccordion);

  export default function Houses(){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  
    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
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
              <GridListTile cols={0.75}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/house"
                >
                  <Button
                    variant="contained"
                    style={{ marginTop: "-2.3em" }}
                    className={classes.newButton2}
                  >
                    HOUSE
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={0.75}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/garden"
                >
                  <Button
                    variant="contained"
                    style={{ marginTop: "-2.3em" }}
                    className={classes.newButton3}
                  >
                    GARDEN
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={0.75}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/roof"
                >
                  <Button
                    variant="contained"
                    style={{ marginTop: "-2.3em" }}
                    className={classes.newButton4}
                  >
                    ROOF
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={0.75}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/balcony"
                >
                  <Button
                    variant="contained"
                    style={{ marginTop: "-2.3em" }}
                    className={classes.newButton}
                  >
                    BALCONY
                  </Button>
                </Link>
              </GridListTile>
             
              <GridListTile style={{ marginTop: "-2.7em" }} cols={3}>
                <img src={background} alt="images" />
              </GridListTile>
              <GridListTile cols={1}>
                <Card style={{ border: "2px solid grey", boxShadow: "1" }}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={plaster} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Plaster
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
              <GridListTile cols={1}>   
                <Card style={{ border: "2px solid grey", boxShadow: "1" }}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={brick} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Clinker
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
              <GridListTile cols={1}>
                <Card
                  style={{
                    border: "2px solid grey",
                    boxShadow: "1",
                    color: "black",
                  }}
                >
                  <CardActionArea>
                    <CardMedia className={classes.media} image={border} />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Board
                    </Button>
                  </CardActions>
                </Card>
              </GridListTile>
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
    )
  }