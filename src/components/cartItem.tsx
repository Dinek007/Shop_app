import React from "react"
import Typography from "@material-ui/core/Typography"

import { ProductItemProps } from "./types"
import { CartDelItem } from "./cartDelItem"
import { useStyles } from "./productStyle"

export const CartItem: React.FC<ProductItemProps> = (
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
            <CartDelItem
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