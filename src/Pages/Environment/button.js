import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    newButton2: {
        paddingTop: ".6em",
        paddingBottom: ".6em",
        paddingRight: "1.3em",
        paddingLeft: "1.3em",
        borderRadius: 0,
        fontSize: ".3em",
        borderRadius: ".3em",
      }
});

export function Buttons(props) {
    const { title } = props.house
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            style={{ marginTop: "-2.3em" }}
            className={classes.newButton2}
        >
        {title}
      </Button>
    );
}