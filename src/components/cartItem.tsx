import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ProductItemProps } from "./types";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartButtonItem } from "./cartButtonItem"
import { CartDelItem } from "./cartDelItem";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    item: {
        float: "left",
        position: "relative",
        width: "550px",
        height: "280px",
        boxShadow: `2px 2px 8px 0.8px gray`,
        margin: "30px",
        [breakpoints.down('sm')]: {
            width: "280px",
            margin: "20px",
            height: "500px",
        },
        [breakpoints.down('xs')]: {
            marginLeft: "0px",
            marginRight: "0px",
            boxShadow: `2px 2px 8px 0.8px white`,
        },

    },
    itemPic: {
        width: "200px",
        height: "200px",
        position: "absolute",
        left: "30px",
        top: "40px",
        [breakpoints.down('sm')]: {
            top: "80px",
            left: "40px",
        },
    },
    itemName: {
        position: "absolute",
        fontStyle: 'italic',
        left: "220px",
        top: "25px",
        fontSize: "30px",
        width: "350px",
        [breakpoints.down('sm')]: {
            left: "-33px",
        },

    },
    list: {
        position: "absolute",
        left: "270px",
        top: "80px",
        listStyleType: "none",
        width: "270px",
        height: "170px",
        displat: "felx",
        flexDirection: "column",
        alignItems: "felx-start",
        flexWrap: "nowrap",
        [breakpoints.down('sm')]: {
            left: "60px",
            top: "285px",
        },
    },
    listItem: {
        position: "relative",
        left: "0px",
        textAlign: "start",
        fontSize: "20px",

    },
    value: {
        color: palette.secondary.dark,
        marginLeft: "9px",
    },
    iconCart: {
        width: "40px",
        height: "40px",
    },
    cartButton: {
        width: "70px",
        height: "70px",
        position: "absolute",
        right: "8px",
        bottom: "8px",
    }
}));

export const CartItem: React.FC<ProductItemProps> = (
    {
        id,
        categoryId,
        price,
        name,
        condition,
        gender,
    }
) => {
    const classes = useStyles();
    const idSrc = "./produkty/" + categoryId + "/item" + id + ".png"

    return (
        <div className={classes.item}>
            <img src={idSrc} alt="itemPic" className={classes.itemPic} />
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
            />

        </div >
    )
}