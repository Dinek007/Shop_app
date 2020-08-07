import React, { useCallback } from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MenuItem } from '../../components/menuItem'
import { MenuComponentProps } from "./types";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    menu: {
        backgroundColor: palette.primary.dark,
        position: "relative",
        float: "left",
        width: "150px",
        height: "100%",
        [breakpoints.down('xs')]: {
            width: 100
        },
        fontFamily: "Arial, Helvetica, sans-serif"
    },
    paragraph: {
        margin: "0px",
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
        width: "100%",
        height: "40px",
        paddingTop: "30px",
        borderBottom: "3px solid black",
        borderRight: "3px solid black",
        fontFamily: "Arial, Helvetica, sans-serif"
    }
}));


export const MenuComponent: React.FC<MenuComponentProps> = ({
    data,
    isLoading,
    fetchCategory
}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.menu} >
            {
                isLoading
                    ? <CircularProgress color='secondary' />
                    : (
                        data.map((item, index) =>
                            <div key={index}>
                                <p className={classes.paragraph}> {item.name} </p>
                                {
                                    item.categories.map((item, index) => {
                                        const selectCategory = () => fetchCategory(item.id)

                                        return <MenuItem key={index} selectCategory={selectCategory} text={item.name} />
                                    }
                                    )
                                }
                            </div>
                        )
                    )
            }

        </Grid>
    )
}
