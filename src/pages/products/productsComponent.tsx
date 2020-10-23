import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { CircularProgress } from "@material-ui/core"

import { ProductsComponentProps } from "./types"
import { ProductItem } from '../../components/productItem'

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => createStyles({
    products: {
        position: "relative",
        marginTop: spacing(22),
        left: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        width: "70vw",
        marginBottom: spacing(7),
        [breakpoints.down('md')]: {

            left: "50px",
        },
        [breakpoints.down('sm')]: {
            marginTop: "230px",
            left: "-8px",
            marginLeft: "50px"
        },
        [breakpoints.down('xs')]: {
            marginTop: "330px",
            left: "0px",
            marginLeft: "0px"
        },
    },
    loading: {
        position: "absolute",
        top: "90px"
    }
}));

export const ProductsComponent: React.FC<ProductsComponentProps> = ({
    data,
    isLoading,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.products}>
            {
                isLoading
                    ? <CircularProgress color='primary' className={classes.loading} />
                    : <>
                        {(
                            data.map((item, index) =>
                                <div key={index} >
                                    <ProductItem {...item} />
                                </div>
                            )
                        )}
                    </>
            }
        </div>
    )
}
