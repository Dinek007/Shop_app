import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        position: "fixed",
        backgroundColor: "black",
        height: "10%",
        top: "0px",
        width: "100%"
    }
});


export const HeaderComponent = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}> </header>
    )
}
