import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MenuItemProps } from "./types";

const useStyles = makeStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: "black",
        width: "100%",
        height: "5vh",
        backgroundColor: "#ccff00",
        borderRadius: "0"
    },
});

export const MenuItem: React.FC<MenuItemProps> = ({ text = '', selectCategory }) => {
    const classes = useStyles();

    return (
        <Button className={classes.item} onClick={selectCategory as (e: React.MouseEvent) => void} > {text} </Button>
    )
}