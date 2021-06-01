import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcDarkOrange = "#FF9914"
const arcRed = "#f72e00"
const arcBlack = "#000000"
const arcGrey = "#808080"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            darkOrange: `${arcDarkOrange}`,
            red: `${arcRed}`,
            black: `${arcBlack}`
        },
        primary: {
            main: `${arcDarkOrange}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        tertiary: {
            main: `${arcRed}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: "1rem",
            textTransform: "none",
            color: 'white'
        },
        h2: {
            fontFamily: "Relway",
            fontSize: "3.5rem",
            color: "arcBlue",
            lineHeight:1

        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: "arcBlue",
            lineHeight: 1.5
        },
        h6: {
            fontWeight: 500,
            fontFamily: "Raleway",
            color: arcBlue,
            lineHeight:"1em"
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 500
        },
        body1: {
            fontSize: "1.25rem",
            color: arcBlack,
            fontWeight: 300

        },
        caption: {
            fontSize: "1rem",
            fontWeight: 300,
            color: "#FE2213"
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem"
            }
        },
        MuiInput: {
            root: {
                color: arcGrey,
                fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
});