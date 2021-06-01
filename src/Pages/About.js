import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


import Avatar from '@material-ui/core/Avatar'
import profile from '../images/founder.jpg'
import yearbook from '../images/yearbook.svg'
import puppy from '../images/puppy.svg'


import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import history from '../images/history.svg'

import CallToAction from '../components/CallToAction/CallToAction'


const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: "0.5em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  paragraphContainer: {
    maxWidth: "30em"
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300
    }
  }
}))

export default function About() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" className={classes.rowContainer} align={matchesMD ? "center" : undefined} style={{ marginTop: "2em" }}>About US</Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography variant="h4" align="center" className={classes.rowContainer} className={classes.missionStatement} style={{ marginTop: "2em" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,when an unknown
          printer took a galley of type and scrambled it.
                </Typography>
        <Typography variant="h4" className={classes.missionStatement}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
      </Grid>
      <Grid item container justify="space-around" className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "4em", marginBottom: "4em" }}>
        <Grid item>
          <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom>History</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                We are the new kid on the block
                        </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,when an unknown
                printer took a galley of type and scrambled it.
                        </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.
                        </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy.
                        </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img src={history} alt="quill pen sitting on top of book" style={{ maxHeight: matchesMD ? 200 : "22em" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "4em" }}>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>Team</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
                    </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 year old.
                    </Typography>
        </Grid>
        <Grid item style={{marginBottom:"4em"}}>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em " }}>
              <Typography variant="body1" align="center" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.
              </Typography>
              <Typography variant="caption" align="center" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.
              </Typography>
            </Grid>
          </Hidden>
          <Grid container direction="row">
          <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}>
            <Grid item>
              <img src={yearbook} alt="yearbook page about founder" style={{ maxWidth: matchesMD ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant="caption">a page from my Sophomore yearbook</Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em " }}>
              <Typography variant="body1" align="center" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.
              </Typography>
              <Typography variant="caption" align="center" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an.
              </Typography>
            </Grid>
          </Hidden>
          <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
            <Grid item>
              <img src={puppy} alt="grey spotted puppy" style={{ maxWidth: matchesMD ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant="caption">my miniature dapple dachshund, Sterling</Typography>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  )

}