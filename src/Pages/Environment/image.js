import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  
});

export function Images(props) {
    const { title,image,thumbnail } = props.houseinner
    const classes = useStyles();

    return (
        {image}
    );
}