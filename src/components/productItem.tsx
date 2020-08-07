import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { ProductItemProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    item: {

    },
}));

export const ProductItem: React.FC<ProductItemProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.item} > </div>
    )
}