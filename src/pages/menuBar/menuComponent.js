import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    menu: {
        position: "fixed",
        backgroundColor: "yellow",
        height: "85%",
        left: "0px",
        top: "10%",
        width: "10%",
    }
});


export const MenuComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.menu}></div>
    )
}
