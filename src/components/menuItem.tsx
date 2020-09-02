import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MenuItemProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "50px",
        fontWeight: "bold",
        borderRadius: "0",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "15px",
        [breakpoints.down('sm')]: {
            fontSize: "13px",
        },
        [breakpoints.down('xs')]: {
            fontSize: "10px",
            height: "45px",
        },
    },
}));

export const MenuItem: React.FC<MenuItemProps> = ({ text = '', selectCategory }) => {
    const classes = useStyles();

    return (
        <Button className={classes.item} onClick={selectCategory as (e: React.MouseEvent) => void} > {text} </Button>
    )
}