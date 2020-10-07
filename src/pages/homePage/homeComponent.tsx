import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { HomeComponentProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    homePic: {
        backgroundImage: "url(./walppaper.jpg)",
        position: "relative",
        height: "900px",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    button: {
        borderBottom: `3px solid ${palette.secondary.main}`,
        fontSize: "30px",
        position: "relative",
        top: "30px",
        color: palette.secondary.dark,
        [breakpoints.down('xs')]: {
            fontSize: "60px",
        },
    },
    source: {
        textDecoration: "none",
    }
}))

export const HomeComponent: React.FC<HomeComponentProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.homePic}>
            <a href='/products' className={classes.source}>
                <Button className={classes.button}>
                    PRODUCTS
                </Button>
            </a>
        </div >
    )
}