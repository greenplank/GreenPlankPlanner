import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TextField from '@material-ui/core/TextField'
import CallToAction from '../CallToAction/CallToAction'

import phoneIcon from '../../images/phone.svg'
import emailIcon from '../../images/email.svg'
import airplane from '../../images/send.svg'

import Dialog from '@material-ui/core/Dialog'
import DiagloContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles(theme => ({
    background: {
        // backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em"
    },
    message: {
        border: `2px solid green`,
        marginTop: ".5em",
        borderRadius: ".3em"
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
    }
}))


export default function Forms(props) {
    const classes = useStyles()
    const theme = useTheme()

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState("")

    const [phone, setPhone] = useState('')
    const [phoneHelper, setPhoneHelper] = useState("")

    const [message, setMessage] = useState('')


    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const [alert, steAlert] = useState({ open: false, message: "", backgroundColor: "" })

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case "email":
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if (!valid) {
                    setEmailHelper("Invalid Email")
                }
                else {
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if (!valid) {
                    setPhoneHelper("Invalid Phone")
                }
                else {
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }

    const onConfirm = () => {
        setLoading(true)

        axios.get("",
            {
                params: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                }
            }
        )
            .then(res => {
                setLoading(false);
                setOpen(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                steAlert({ open: true, message: "Message sent successfully", backgroundColor: "#4BB543" })
            })
            .catch(err => {
                setLoading(false);
                steAlert({
                    open: true,
                    message: "Something went wrong,please try again!", backgroundColor: "#FF3232"
                })
            });
    }

    const buttonContents = (
        <React.Fragment>
            Send Message
            <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
        </React.Fragment>
    )

    return (
        <Grid container direction="row" >
            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{marginTop:"2em"}} >
                            <Typography variant="h2" align={matchesMD ? "center" : undefined} >Contact Us</Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} > We are waiting.</Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "1em" }}>
                            <Grid item style={{marginTop:"-.7em"}}>
                                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="tel:5555555555" style={{ textDecoration: "none", color: 'inherit' }}>(555) 555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container >
                            <Grid item style={{marginTop:"-.7em"}}>
                                <img src={emailIcon} alt="envelope" style={{ marginRight: "0.5em"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="mailto:info@greenplank.se" style={{ textDecoration: "none", color: 'inherit' }}>info@greenplank.se</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20em", marginTop: "0.5em" }}>
                            <Grid item>
                                <TextField style={{ marginBottom: "0.3em" }} fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField helperText={emailHelper} error={emailHelper.length !== 0} style={{ marginBottom: "0.3em" }} fullWidth label="Email" id="email" value={email} onChange={onChange} />
                            </Grid>
                            <Grid item>
                                <TextField helperText={phoneHelper} error={phoneHelper.length !== 0} style={{ marginBottom: "0.3em" }} fullWidth label="Phone" id="phone" value={phone} onChange={onChange} />
                            </Grid>
                            <Grid item>
                                <TextField style={{ marginBottom: "0.3em" }} fullWidth label="Message" InputProps={{ disableUnderline: true }} id="message" className={classes.message} multiline rows={7} value={message} onChange={(event) => setMessage(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" style={{ maxWidth: "20em", marginTop: "0.5em" }}>
                            <Button variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                                onClick={() => setOpen(true)}>
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                style={{ zIndex: 1302 }}
                open={open} onClose={() => setOpen(false)}
                PaperProps={{
                    style: {
                        paddingTop: matchesXS ? "1em" : "5em",
                        paddingBottom: matchesXS ? "1em" : "5em",
                        paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em",
                        paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em"
                    }
                }}>
                <DiagloContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>Confirm Message</Typography>
                        </Grid>
                        <Grid item>
                            <TextField style={{ marginBottom: "0.5em" }} fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField helperText={emailHelper} error={emailHelper.length !== 0} style={{ marginBottom: "0.5em" }} fullWidth label="Email" id="email" value={email} onChange={onChange} />
                        </Grid>
                        <Grid item>
                            <TextField helperText={phoneHelper} error={phoneHelper.length !== 0} style={{ marginBottom: "0.5em" }} fullWidth label="Phone" id="phone" value={phone} onChange={onChange} />
                        </Grid>
                        <Grid item>
                            <TextField style={{ marginBottom: "0.5em" }} fullWidth label="Message" InputProps={{ disableUnderline: true }} id="message" className={classes.message} multiline rows={7} value={message} onChange={(event) => setMessage(event.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item container style={{ marginTop: "2em" }} alignItems="center">
                        <Grid item>
                            <Button color="primary" style={{ fontWeight: 300 }} onClick={() => setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained"
                                className={classes.sendButton}
                                disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                                onClick={onConfirm}>
                                {loading ? <CircularProgress size={30} /> : buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </DiagloContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => steAlert({ ...alert, open: false })}
                autoHideDuration={4000} />
            <Grid item container direction={matchesMD ? "column" : "row"}
                style={{ marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0, marginBottom: matchesMD ? "5em" : 0 }}
                justify={matchesMD ? "center" : undefined}
                lg={8} xl={9}>
                <CallToAction />
            </Grid>
        </Grid>

    )
}