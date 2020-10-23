import React from "react"
import Typography from "@material-ui/core/Typography"

import { CartButtonItem } from "./cartButtonItem"
import { ProductItemProps } from "./types"
import { useStyles } from "./productStyle"

export const ProductItem: React.FC<ProductItemProps> = (
    {
        id,
        categoryId,
        price,
        name,
        condition,
        gender,
        imageUrl
    }
) => {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <img src={imageUrl} alt="itemPic" className={classes.itemPic} />
            <Typography className={classes.itemName}>{name.toUpperCase()}</Typography>
            <div className={classes.list}>
                <h4 className={classes.listItem}> Condition:
                    <b className={classes.value}> {condition} </b>
                </h4>
                <h4 className={classes.listItem}> Gender:
                    <b className={classes.value}> {gender} </b>
                </h4>
                <h4 className={classes.listItem}> Price:
                    <b className={classes.value}> {price} $ </b>
                </h4>
            </div>
            <CartButtonItem
                id={id}
                categoryId={categoryId}
                price={price}
                name={name}
                condition={condition}
                gender={gender}
                imageUrl={imageUrl}
            />
        </div >
    )
}