import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

import { Products } from "../store/types";
import { CartItemProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    iconCart: {
        width: "40px",
        height: "40px",
    },
    cartButton: {
        width: "70px",
        height: "70px",
        position: "absolute",
        right: "8px",
        bottom: "8px"
    }
}));

export const CartButtonItem: React.FC<CartItemProps> = (item) => {
    const classes = useStyles();

    const setItemLocalStorage = () => {
        const itemsArray: Products = localStorage.items
            ? JSON.parse(localStorage.items)
            : []

        const newArray = [...itemsArray, item]
        localStorage.setItem("items", JSON.stringify(newArray))
        console.log(newArray)
    }

    return (
        <Button onClick={setItemLocalStorage} className={classes.cartButton} >
            <ShoppingCartIcon className={classes.iconCart} />
        </Button>
    )
}