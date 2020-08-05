import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ProductItemProps } from "./types";

const useStyles = makeStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "1vw",
        color: "black",
        width: "100%",
        height: "5vh",
        backgroundColor: "#ccff00",
        borderRadius: "0"
    },
});

export const ProductItem: React.FC<ProductItemProps> = ({ /*text = '', selectCategory */ }) => {
    const classes = useStyles();

    return (
        <div className={classes.item} > </div>
    )
}