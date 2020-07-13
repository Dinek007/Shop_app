import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        position: "fixed",
        backgroundColor: "black",
        height: "5%",
        bottom: "0px",
        width: "100%"
    }
});


export const FooterComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}> </footer>
    )
}
