import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { HeaderComponentProps } from "./types";

const useStyles = makeStyles({
    header: {
        position: "fixed",
        backgroundColor: "black",
        zIndex:999,
        height: "5vh",
        top: "0px",
        width: "100%",
        margin: "0px",
        textAlign: "center",
        fontSize: "20px",
        color: "#ccff00",
    }
});


export const HeaderComponent: React.FC<HeaderComponentProps> = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}> 
            MULTISHOP 
            
        </header >

    )
}
