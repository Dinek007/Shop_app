import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FooterComponentProps } from "./types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    footer: {
        backgroundColor: "black",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTop: `4px solid ${palette.secondary.dark}`,
        zIndex: 999,
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
        textAlign: "center",
        fontSize: "10px",
        color: "white",
        position: "fixed",
        bottom: 0
    },
}))


export const FooterComponent: React.FC<FooterComponentProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography> ADDRESS: Wrzosowa 34, Cracow </Typography>
            <Typography> 685 489 921, fashion.mistery@mail.com  </Typography>
        </footer>
    )
}
