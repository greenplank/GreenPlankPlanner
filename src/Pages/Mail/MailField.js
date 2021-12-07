import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
// import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { form } from "../../data/Terrace/form";

import airplane from "../../images/send.svg";

import { useContext } from "react";
import  {TerraceContext} from "../../helpers/ContextProvider";

export default function MailField() {
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

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
            <Grid container direction="column">
              <Grid item >
                <Typography align={"left"} style={{marginLeft:"1em",marginTop:"1em",marginBottom:"1em"}} variant="h6">For Sample or Order(Send Email)</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                <Grid item style={{width:"7em"}}>
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
            </Grid>
            <Grid item>
              <Button
                  variant="contained"
                  disabled={
                    email.length === 0 
                  }
                >
                  {buttonContents}
                </Button>
            </Grid>
            </Grid>
    </>
  );
}
