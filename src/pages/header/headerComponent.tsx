import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { HeaderComponentProps } from "./types";


const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    header: {
        position: "relative",
        backgroundColor: palette.secondary.main,
        borderBottom: `3px solid black`,
        paddingBottom: "70px",
        [breakpoints.down('md')]: {
            paddingBottom: "60px",
        },
        [breakpoints.down('sm')]: {
            paddingBottom: "50px",
            borderBottom: `2px solid black`,
        },
        [breakpoints.down('xs')]: {
            paddingBottom: "40px",
            borderBottom: `2px solid black`,
        },
    },
    title: {
        backgroundColor: "black",
        position: "relative",
        left: "50%",
        width: "1000px",
        transform: "translate(-50%, 0)",
        height: "100px",
        textAlign: "center",
        fontSize: "53px",
        color: "white",
        paddingTop: "30px",
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
        borderBottom: "3px solid black",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .6)',
        [breakpoints.down('md')]: {
            width: "700px",
            fontSize: "35px",
            height: "70px",
        },
        [breakpoints.down('sm')]: {
            width: "500px",
            fontSize: "30px",
            height: "60px",
        },
        [breakpoints.down('xs')]: {
            width: "380px",
            fontSize: "20px",
            height: "50px",
        },
    },
    category: {
        fontSize: "130px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "198px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "black",
        marginBottom: "50px",
        [breakpoints.down('md')]: {
            top: "180px",
            fontSize: "80px",
        },
        [breakpoints.down('sm')]: {
            top: "230px",
            fontSize: "40px",
        },
        [breakpoints.down('xs')]: {
            top: "230px",
            left: "40%",
            fontSize: "23px",
        },
    },
    homeIco: {
        fontSize: "60px",
        position: "absolute",
        left: "70px",
        color: "white",
        border: `6px solid white`,
        padding: "7px",
        top: "23px",
        borderRadius: 100,
        [breakpoints.down('md')]: {
            left: "60px",
            fontSize: "40px",
            top: "20px",
            border: `5px solid white`,
        },
        [breakpoints.down('sm')]: {
            left: "35px",
            fontSize: "30px",
            top: "22px",
            border: `3px solid white`,
        },
        [breakpoints.down('xs')]: {
            left: "30px",
            fontSize: "23px",
            top: "20px",
            border: `2px solid white`,
        },
    },
    cartIco: {
        fontSize: "60px",
        position: "absolute",
        right: "70px",
        color: "white",
        border: `6px solid white`,
        padding: "7px",
        top: "23px",
        borderRadius: 100,
        [breakpoints.down('md')]: {
            right: "60px",
            fontSize: "40px",
            top: "20px",
            border: `5px solid white`,
        },
        [breakpoints.down('sm')]: {
            right: "35px",
            fontSize: "30px",
            top: "22px",
            border: `3px solid white`,
        },
        [breakpoints.down('xs')]: {
            right: "30px",
            fontSize: "23px",
            top: "20px",
            border: `2px solid white`,
        },
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
