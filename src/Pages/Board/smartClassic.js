import React, { useState,useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import background from "../../images/home_board/home_board_aa5.jpg";

import GridListTile from "@material-ui/core/GridListTile";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Banner from "../../components/Slider/index";

import { useContext } from "react";
import  {TerraceContext} from "../../helpers/ContextProvider";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import TextField from "@material-ui/core/TextField";
import airplane from "../../images/send.svg";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Divider from "@material-ui/core/Divider";

import Thumbnail from "./thumbnail";
import Planks from "./planks"

import BorderSurfaceImg from "../../images/typeimage/classic_narrow.png"


import img4 from "../../images/balcony/balcony_standard_aa4.jpg";
import img11 from "../../images/Denmark-min.jpg";
import { board } from "../../data/Terrace/board";

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
  backImg1: {
    // backgroundImage: `url(${img6})`,
    backgroundPosition: "center",
    backgroundColor:"Grey",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "3em",
    marginTop: ".1em",
    width: "100%",
  },
  backImg2: {
    backgroundImage: `url(${img4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "3em",
    marginTop: ".1em",
    width: "100%",
  },
  backImg3: {
    backgroundImage: `url(${BorderSurfaceImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    width: "100%",
  },
  backImg4: {
    backgroundImage: `url(${img4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10em",
    width: "100%",
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
    paddingTop: ".7em",
    paddingBottom: ".6em",
    paddingRight: "1em",
    paddingLeft: "1.1em",
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
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    color: "inherit",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: 380,
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  formControl3: {
    margin: theme.spacing(2),
    minWidth: 270,
  },
  formControl4: {
    margin: theme.spacing(2),
    minWidth: 560,
  },
  message: {
    border: `2px solid #808080`,
    marginTop: ".5em",
    borderRadius: ".3em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  padding: 0 2rem;
  margin-top: -3em;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const ButtonSec = styled.button`
  font-size: 0.7rem;
  padding: 1rem 3.2rem 1rem 3.2rem;
  margin-right: 0.1em;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec1 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 2.7rem 1rem 2.7rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec2 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 2.3rem 1rem 2.3rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec3 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 3.6rem 1rem 3.6rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
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

export default function SmartClassic({thumbnailImage,plankImage,textPlank,selectedBoardId=1,selectedBoardColorVarId,setSelectedBoardColorVarId=()=>{},setImage=()=>{},selectedPlanks=()=>{},selectedThumbnail=()=>{},selectedPlankText=()=>{}}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [open, setOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [colorId,setColorId] =useState(1);

  const {getEnvId,getVarId} = useContext(TerraceContext);
  let i = getEnvId();
  let vari = getVarId();

  const [expanded, setExpanded] = React.useState("panel1");
  const [state, setState] = useState([]);

  const [boardthumbnail,setBoardThumbnail]=useState('');
  const [boardplank,setBoardPlank]=useState('');
  const [boardplanktext,setBoardPlankText]=useState('');

  useEffect(() => {
    let background = board.find(env =>env.id===selectedBoardId);
    setBoardThumbnail(background?.thumbnail);
  }, [] );

  useEffect(() => {
    let background = board.find(env =>env.id===selectedBoardId);
    if(background.id>1){
      setBoardThumbnail(background.thumbnail);
    }
    else{
      let background = board.find(env =>env.id===selectedBoardId);
      setBoardThumbnail(background.thumbnail);
    }
  }, [selectedBoardId,selectedBoardColorVarId] );

  useEffect(()=>{
    let background = board.find(env =>env.id===selectedBoardId);
    let colorsVari=background.colors;
    let Variation = colorsVari[0].variations[0];
    let thumbArray = Variation.thumbnail[0];
    let plankArray=Variation.planks[0];
    selectedThumbnail(thumbArray?.thumbnail);
    selectedPlanks(plankArray?.image);
    selectedPlankText(plankArray?.size)
  },[])

  useEffect(()=>{
    setBoardThumbnail(thumbnailImage);
  },[thumbnailImage])

  useEffect(()=>{
    setBoardPlank(plankImage);
  },[plankImage])

  useEffect(()=>{
    setBoardPlankText(textPlank);
  },[textPlank])

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeForm = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );


  return (
    <>
              <GridListTile
                className={classes.backImg}
                onClick={() => setOpen(true)}
                style={{marginTop:"1em"}}
                cols={3}
              >
                <Grid container direction="column">
                <Thumbnail image={boardthumbnail}/>
                <PlayCircleOutlineIcon
                  style={{ marginTop:"-12em",marginLeft:"2em", marginBottom:"3em",color: "white", width: "15em", height: "6em" }}
                />
                </Grid>
              </GridListTile>
              <GridListTile
                className={classes.backImg1}
                style={{ justifyContent: "center" }}
                cols={1}
              >
              <Planks  image={boardplank} size={boardplanktext}/>
              
              </GridListTile>

              <GridListTile
                style={{ marginTop: ".4em", marginLeft: ".4em" }}
                cols={0.5}
              >
                {
                  board.map(({title="Text",colors=[],id})=>{

                    if(id===selectedBoardId) 
                    return(
                      <Grid container direction="row" >
                        {
                          colors.map(({variety='some-text',id,image="",variations,planks,thumbnail})=>{
                            debugger;
                            return(
                              <Avatar style={{marginLeft:".2em"}}
                              onClick={()=>{
                                debugger;
                                setColorId(id)
                                let envArray = variations.filter(a=>a.Envid===i);
                                debugger;
                                if(vari>0){
                                 let obj = envArray.find(a=>a.Varid===vari);
                                 debugger;
                                 setImage(obj?.image);
                                 let thumbArray = obj.thumbnail;
                                 let plankArray = obj.planks;
                                debugger;
                                setBoardThumbnail(thumbArray[0]?.image)
                                setBoardPlank(plankArray[0]?.image)
                                setBoardPlankText(plankArray[0]?.size)
                                }
                                else{
                                  setImage(envArray[0].image);
                                }
                                debugger;
                              }
                              }
                              alt="releated images"
                              src={image}
                              className={classes.avatar}
                            />
                            )
                          })
                        }
                      </Grid>
                    )
                  })
                }
              </GridListTile>

              <GridListTile style={{marginLeft:"5em"}} cols={3}>
                {
                  board.map(({title="Text",colors=[],id})=>{

                    if(id===selectedBoardId) 
                    return(
                      <Grid container direction="row" >
                        {
                          colors.map(({variety='some-text',id})=>{
                            
                              if(colorId==id) {
                                return (<Typography variant="h6">{variety}</Typography>)
                              }
                              else{
                                return(null)
                              }
                          })
                        }
                      </Grid>
                    )
                  })
                }
              </GridListTile>
        
              <GridListTile style={{marginLeft:".5em",marginBottom:"1em"}}  cols={3}>
                <SampleOrder onClick={() => setSampleOpen(true)}>
                  Sample Order
                </SampleOrder>
              </GridListTile>
    

      {/* Gallery Slider Popup */}
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            paddingBottom: matchesXS ? "1em" : "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "7em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "7em",
          },
        }}
      >
        <Grid item style={{ marginBottom: "2em", fontWeight: 400 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Gallery
          </Typography>
        </Grid>
        <Banner />
        <Grid item container style={{ marginTop: "2em" }} alignItems="center">
          <Grid item style={{ marginLeft: "9em" }}>
            <Button
              variant="container"
              align="center"
              style={{
                fontWeight: 300,
                color: "white",
                backgroundColor: "red",
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>

      {/* Sample Popup  */}
      <Dialog
        fullWidth
        style={{ zIndex: 1302 }}
        open={sampleOpen}
        onClose={() => setSampleOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : 0,
            paddingBottom: matchesXS ? "1em" : 0,
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "5em"
              : 0,
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "5em"
              : 0,
            minWidth: "1400px",
            minHeight: "200px",
          },
        }}
      >
        <AppBar style={{ backgroundColor: "#369956" }} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Sample Order Form
            </Typography>
            <Button onClick={() => setSampleOpen(false)} color="inherit">
              cancel
            </Button>
          </Toolbar>
        </AppBar>
        <img src={img11} alt="images" style={{ marginBottom: "4em" }} />
        <Grid item style={{ marginBottom: "2em", fontWeight: 400 }}>
          <Typography variant="h3" align="center" gutterBottom>
            <span style={{ fontWeight: "bold" }}>Sample Order Form</span>
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginBottom: "2em",
            padding: ".5em 14em 1em 14em",
            fontWeight: 400,
          }}
        >
          <Typography paragraph align="center" gutterBottom>
            We will gladly send you samples of our products free of charge
            according to your wishes! Select which products in which colour you
            would like to receive in the drop-down menus. You can order up to 3
            products per category. You can open a preview of the samples by
            clicking on the red "i". You can find more information about the
            products on our website in the "Product world" section.
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          style={{ backgroundColor: "#F8F8FF", padding: "4em 4em 9em 4em" }}
        >
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h5">Terrace pattern</Typography>
              <Typography paragraph>Please select up to 3 patterns</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid conatiner direction="row">
              <Grid item>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Classic
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>21x45mm varia brun</option>
                    <option value={20}>24x55mm varia brun</option>
                    <option value={30}>30x65mm varia brun</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Classic Varia
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Premium
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Dynum
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Signum
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Premium Plus
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            style={{ padding: "4em 4em .1em 0" }}
          >
            <Typography variant="h5">Facade patterns</Typography>
            <Typography paragraph>
              Only a limited selection of façade patterns is available. The full
              range includes all panel widths in all colours respectively.
              Please select up to 3 patterns.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            style={{ padding: "4em 4em .1em 0" }}
          >
            <Typography variant="h5">
              Fence and construction timber pattern
            </Typography>
            <Typography paragraph>Please select up to 3 patterns.</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" style={{ paddingBottom: "4em" }}>
              <Grid item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Divider />
          </Grid>
          <Grid container direction="row" style={{ padding: "4em 4em .1em 0" }}>
            <Typography variant="h5">My Address Detail</Typography>
          </Grid>
          <Grid item direction="column">
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <TextField
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl4}>
                <TextField
                  fullWidth
                  label="Message"
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  className={classes.message}
                  multiline
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0
                  }
                  onClick={() => setOpen(true)}
                >
                  {buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
