import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';

import { HeaderComponentProps } from "./types";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles(({ palette, breakpoints, spacing }) => createStyles({
    header: {
    },
    title: {
        backgroundColor: palette.secondary.main,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        fontSize: 35,
        color: "black",
        borderBottom: "4px solid black",
    },
    heading: {
        marginLeft: spacing(3),
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    category: {
        position: "absolute",
        left: "51%",
        color: 'black',
        transform: "translate(-50%, 0)",
        borderBottom: '3px solid black',
        width: '30%',
        top: spacing(18),
        fontSize: 50,
        [breakpoints.down('sm')]: {
            top: spacing(21),
            width: '20%',
            left: "49%",
            fontSize: "35px",
        },
        [breakpoints.down('xs')]: {
            top: spacing(23),
            width: '20%',
            left: "43%",
            fontSize: "20px",
        },
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        color: "black",
        fontSize: 35,
        margin: `${spacing(0)}px ${spacing(4)}px`,
    },
    iconTitle: {
        color: "black",
        fontSize: 35,
    },
    titletext: {
        marginTop: "9px",
        marginLeft: "3px",
    },
    link: {
        marginTop: "15px",
    }
}));

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
    categoryName,

}) => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <header className={classes.title}>
                <div className={classes.heading}>
                    <EmojiNatureIcon className={classes.iconTitle} />
                    <Typography className={classes.titletext} variant='h4'>FASHION MISTERY</Typography>

                </div>
                <div className={classes.iconContainer}>
                    <a href="/" className={classes.link}>
                        <HomeIcon className={classes.icon} />
                    </a>
                    <a href="/cart" className={classes.link}>
                        <ShoppingCartIcon className={classes.icon} />
                    </a>

                </div>
            </header >

            <Typography variant='h2' className={classes.category}> {categoryName.toUpperCase()} </Typography>

        </div>
    )
}
