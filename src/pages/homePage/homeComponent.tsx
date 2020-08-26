import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { HomeComponentProps } from "./types";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    homePic: {
        backgroundImage: "url(./walppaper.jpg)",
        width: "100%",
        height: "900px"
    }
}))


export const HomeComponent: React.FC<HomeComponentProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.homePic}>
            <Button>

                <a href='/products'>PRODUCTS</a>
            </Button>
        </div>
    )
}
