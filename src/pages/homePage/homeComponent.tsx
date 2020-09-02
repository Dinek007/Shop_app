import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { HomeComponentProps } from "./types";
import Button from '@material-ui/core/Button';

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
        top: "30px"

    },
    source: {
        textDecoration: "none",
        color: palette.secondary.main,
    }
}))


export const HomeComponent: React.FC<HomeComponentProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.homePic}>
            <Button className={classes.button}>
                <a href='/products' className={classes.source}>PRODUCTS</a>
            </Button>
        </div>
    )
}
