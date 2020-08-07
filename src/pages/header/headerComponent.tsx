import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { HeaderComponentProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    title: {
        left: "35%",
        backgroundColor: palette.primary.main,
        zIndex: 999,
        position: "absolute",
        height: "70px",
        top: "0px",
        width: "30%",
        margin: "0px",
        textAlign: "center",
        fontSize: "40px",
        color: "black",
        paddingTop: "20px",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        borderBottom: "3px solid black",
        fontFamily: "Arial, Helvetica, sans-serif",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
    },
    header: {
        backgroundColor: palette.secondary.main,
        width: "100%",
        height: "300px"
    }
}));


export const HeaderComponent: React.FC<HeaderComponentProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <header className={classes.title}>
                MULTISHOP
            </header >
        </div>


    )
}
