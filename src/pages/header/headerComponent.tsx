import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { HeaderComponentProps } from "./types";


const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    header: {
        position: "relative",
        backgroundColor: palette.secondary.main,
        borderBottom: `5px solid black`,
        paddingBottom: "70px",
    },
    title: {
        backgroundColor: "black",
        position: "relative",
        left: "50%",
        width: "1000px",
        transform: "translate(-50%, 0)",
        height: "100px",
        textAlign: "center",
        fontSize: "50px",
        color: "white",
        paddingTop: "30px",
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
        borderBottom: "3px solid black",
        fontFamily: "Comic Sans MS",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .6)',
    },
    category: {
        fontSize: "130px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "208px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "black",
        marginBottom: "50px"
    },
    homeIco: {
        fontSize: "60px",
        position: "absolute",
        left: "70px",
        color: palette.secondary.main,
        border: `6px solid ${palette.secondary.main}`,
        padding: "7px",
        top: "23px",
        borderRadius: 100
    },
    cartIco: {
        fontSize: "60px",
        position: "absolute",
        right: "70px",
        color: palette.secondary.main,
        border: `6px solid ${palette.secondary.main}`,
        padding: "7px",
        top: "23px",
        borderRadius: 100
    }
}));


export const HeaderComponent: React.FC<HeaderComponentProps> = ({
    categoryName,

}) => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <header className={classes.title}>
                <HomeIcon className={classes.homeIco} />
                FASHION MISTERY
                <ShoppingCartIcon className={classes.cartIco} />
            </header >

            <div className={classes.category}> {categoryName} </div>


        </div>


    )
}
