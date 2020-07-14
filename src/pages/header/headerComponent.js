import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        position: "fixed",
        backgroundColor: "black",
        height: "10vh",
        top: "0px",
        width: "100%",
        margin: "0px",
        textAlign: "center",
        fontSize: "8vh",
        color: "#ccff00",
    }
});


export const HeaderComponent = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}> 
            MULTISHOP 
            
        </header >

    )
}
