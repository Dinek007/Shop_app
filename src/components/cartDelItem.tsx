import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';

import { Products } from "../store/types";
import { CartItemProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    iconCart: {
        width: "40px",
        height: "40px",
        color: "#aa0000"
    },
    cartButton: {
        width: "70px",
        height: "70px",
        position: "absolute",
        right: "8px",
        bottom: "8px"
    }
}));

export const CartDelItem: React.FC<CartItemProps> = (item) => {
    const classes = useStyles();

    const removeItemLocalStorage = () => {
        const itemsArray: Products = localStorage.items
            ? JSON.parse(localStorage.items)
            : []

        const result = itemsArray.findIndex(({ id }) => id == item.id)
        const filteredList = itemsArray.filter((item, index) => index !== result)

        localStorage.setItem("items", JSON.stringify(filteredList))
        document.location.reload(true)
    }

    return (
        <Button onClick={removeItemLocalStorage} className={classes.cartButton} >
            <RemoveShoppingCartIcon className={classes.iconCart} />
        </Button>
    )
}