import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"

import { MenuItemProps } from "./types"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "50px",
        borderRadius: "0",
        fontSize: "5px",
    },
}));

export const MenuItem: React.FC<MenuItemProps> = ({ text = '', selectCategory }) => {
    const classes = useStyles();
    let history = useHistory();
    const onclick = () => {
        history.push("/products");
        selectCategory()
    }

    return (
        <>
            <Button className={classes.item} onClick={onclick as (e: React.MouseEvent) => void} > {text} </Button>
        </>
    )
}