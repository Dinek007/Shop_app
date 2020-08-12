import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FooterComponentProps } from "./types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    footer: {
        backgroundColor: palette.primary.dark,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
        textAlign: "center",
        fontSize: "10px",
        color: "white",
    },
}))


export const FooterComponent: React.FC<FooterComponentProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography> ADDRESS: Wrzosowa 34, Cracow </Typography>
            <Typography> 685 489 945, multi.shop@mail.com  </Typography>
        </footer>
    )
}
