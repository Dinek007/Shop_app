import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { CartComponentProps } from "./types"
import { CartItem } from '../../components/cartItem'

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
            left: "-8px",
        },
        [breakpoints.down('xs')]: {
            marginTop: "330px",
            left: "0px",
        },
    }
}));


export const CartComponent: React.FC<CartComponentProps> = (
    data
) => {
    const classes = useStyles();
    const newData = data.data

    return (
        <div>
            <div className={classes.products}>
                {(
                    newData.map((item, index) =>
                        <div key={index} >
                            <CartItem
                                {...item}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}