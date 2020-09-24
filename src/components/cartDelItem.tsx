import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';

import { Products } from "../store/types";
import { CartItemProps } from "./types";
import { isTemplateExpression } from "typescript";

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

    const setItemLocalStorage = () => {
        const itemsArray: Products = localStorage.items
            ? JSON.parse(localStorage.items)
            : []

        const result = itemsArray.filter(({ id }) => id !== item.id)
        localStorage.setItem("items", JSON.stringify(result))
        document.location.reload(true)
    }

    // - pobierasz liste elementow z local storage
    // - tworzysz nowa tablice i wkladasz do niej elementy, ktorych id jest rozny od tegom ktory chcesz usunac
    // - wrzucasz nowa tablice do local storage

    return (
        <Button onClick={setItemLocalStorage} className={classes.cartButton} >
            <RemoveShoppingCartIcon className={classes.iconCart} />
        </Button>
    )
}