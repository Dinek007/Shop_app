import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { ProductsComponentProps } from "./types";
import { Gender } from '../../components/gender'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    gender: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "30px"
    },
    title: {
        fontSize: "130px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "0px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: palette.primary.dark
    }
}));


export const ProductsComponent: React.FC<ProductsComponentProps> = () => {
    const classes = useStyles();

    return (
        <div>
            <p className={classes.title}>CATEGORY </p>
            <div className={classes.gender}>

                <Gender></Gender>
            </div>
        </div>
    )
}
