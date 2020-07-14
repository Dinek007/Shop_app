import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "1vw",
        color: "black",
        width: "100%",
        height: "5vh",
        backgroundColor: "#ccff00",
        borderRadius: "0"
    },
});

export const MenuItem = ({ text }) => {
    const classes = useStyles();

    return (
        <Button className={classes.item} > {text} </Button>
    )
}