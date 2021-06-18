import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DiagloContent from '@material-ui/core/DialogContent'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../Slider/index'
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeItems1,
  HomeH1,
  HomeP,
  HomeBtn,
} from './HomeElements';

export default function Main() {
  const history = useHistory();
  const theme = useTheme()

  const [open, setOpen] = useState(false)

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

  

  return (
    <HomeContainer>
      <HomeContent>
        <HomeItems>
          <HomeH1>Home Renovation</HomeH1>
          <HomeP>Award Winning Company</HomeP>
        </HomeItems>
        <HomeItems1>
          <HomeBtn onClick={() => setOpen(true)}>Gallery</HomeBtn>
         <HomeBtn  style={{ textDecoration: "none", color: "inherit" }} onClick={() => history.push("/index")}>Terrace System</HomeBtn>
          <HomeBtn>Fence System</HomeBtn>
          <HomeBtn>Classic System</HomeBtn>
        </HomeItems1>
      </HomeContent>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open} onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            paddingBottom: matchesXS ? "1em" : "3em",
            paddingLeft: matchesXS ? 0 : matchesSM ? "3em" : matchesMD ? "10em" : "7em",
            paddingRight: matchesXS ? 0 : matchesSM ? "3em" : matchesMD ? "10em" : "7em"
          }
        }}>
        <Grid item style={{marginBottom:"2em",fontWeight:400}}>
          <Typography variant="h2" align="center" gutterBottom>Gallery</Typography>
        </Grid>
        <Banner />
        <Grid item container style={{ marginTop: "2em" }} alignItems="center">
          <Grid item style={{ marginLeft: "9em" }}>
            <Button variant="container" align="center" style={{ fontWeight: 300, color: "white", backgroundColor: "red" }} onClick={() => setOpen(false)}>Cancel</Button>
          </Grid>
        </Grid>
      </Dialog>
    </HomeContainer>
  );
};


