import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import { CartButtonItem } from "./cartButtonItem"
import { ProductItemProps } from "./types";

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

            width: "200px",
            margin: "20px",
            height: "400px",
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
        [breakpoints.down('xs')]: {
            width: "130px",
            height: "130px",
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
        [breakpoints.down('xs')]: {
            left: "-3px",
            fontSize: "22px",
            width: "200px",
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
        [breakpoints.down('xs')]: {
            left: "30px",
            top: "250px",
            width: "130px",
        },
    },
    listItem: {
        position: "relative",
        left: "0px",
        textAlign: "start",
        fontSize: "20px",
        [breakpoints.down('xs')]: {
            fontSize: "10px",
        },
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