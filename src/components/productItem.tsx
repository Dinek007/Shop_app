import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ProductItemProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({

    item: {
        float: "left",
        position: "relative",
        width: "550px",
        height: "280px",
        boxShadow: '2px 2px 9px 2px rgba(51, 102, 204, .7)',
        marginTop: "95px",
        marginLeft: "95px",
        marginRight: "95px",
    },
    itemPic: {
        width: "200px",
        height: "200px",
        position: "absolute",
        left: "30px",
        top: "40px"
    },
    itemName: {
        position: "absolute",
        left: "180px",
        top: "30px",
        fontSize: "30px",
        width: "350px",
        fontFamily: "Arial, Helvetica, sans-serif",
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
    },
    listItem: {
        position: "relative",
        left: "0px",
        textAlign: "start",
        fontSize: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
    },
    value: {
        color: palette.secondary.main,
        marginLeft: "9px",
        fontFamily: "Arial, Helvetica, sans-serif",
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


    }
) => {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <img src="./item.png" alt="itemPic" className={classes.itemPic} />
            <div className={classes.itemName}> <i> {name} </i> </div>
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
        </div>
    )
}