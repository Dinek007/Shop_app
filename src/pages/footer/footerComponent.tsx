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
        padding: 10,
        width: "100%",
        textAlign: "center",
        fontSize: "10px",
        color: "white",
    },
    footerLeft: {
    },
    footerRight: {
    }
}))


export const FooterComponent: React.FC<FooterComponentProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography className={classes.footerLeft}>ADDRESS: Wrzosowa 34, Cracow </Typography>
            <Typography className={classes.footerLeft}> 685 489 945, multi.shop@mail.com  </Typography>
        </footer>
    )
}
