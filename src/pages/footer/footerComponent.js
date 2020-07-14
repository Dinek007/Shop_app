import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        position: "fixed",
        backgroundColor: "black",
        height: "5vh",
        bottom: "0px",
        width: "100%",
        textAlign: "center",
        fontSize: "3vh",
        color: "#ccff00",
    },
    footerLeft: {
        float: "left",
        position: "relative",
        margin: 0,
        marginTop: "1vh",
        left: "1vw",
    },
    footerRight: {
        float: "right",
        right: "1vw",
        position: "relative",
        margin: 0,
        marginTop: "1vh"
    }
});


export const FooterComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p className={classes.footerLeft}>ADDRESS: Wrzosowa 34, Cracow </p>
            <p className={classes.footerRight}> 685 489 945, multi.shop@mail.com  </p>
        </footer>
    )
}
