import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress } from "@material-ui/core";

import { ProductsComponentProps } from "./types";
import { ProductItem } from '../../components/productItem'

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => createStyles({
    products: {
        position: "relative",
        marginTop: spacing(22),

        left: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        width: "70vw",
        marginBottom: spacing(7),
        [breakpoints.down('sm')]: {
            marginTop: "230px",

        },
        [breakpoints.down('xs')]: {
            left: "-48px",

        },

    }
}));


export const ProductsComponent: React.FC<ProductsComponentProps> = ({
    data,
    isLoading,

}, setLocalStorage) => {
    const classes = useStyles();

    return (
        <div>
            {
                isLoading
                    ? <CircularProgress color='primary' />
                    : <>

                        <div className={classes.products}>
                            {(
                                data.map((item, index) =>
                                    <div key={index} >
                                        <ProductItem
                                            id={item.id}
                                            categoryId={item.categoryId}
                                            price={item.price}
                                            name={item.name}
                                            condition={item.condition}
                                            gender={item.gender}

                                        />
                                    </div>
                                )
                            )}
                        </div>

                    </>
            }
        </div>
    )
}
