import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress } from "@material-ui/core";

import { ProductsComponentProps } from "./types";
import { ProductItem } from '../../components/productItem'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    products: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
    }
}));


export const ProductsComponent: React.FC<ProductsComponentProps> = ({
    data,
    isLoading,
}) => {
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
                                            categoryId={item.id}
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
