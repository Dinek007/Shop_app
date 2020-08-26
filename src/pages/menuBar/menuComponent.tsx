import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MenuItem } from '../../components/menuItem'
import { MenuComponentProps } from "./types";
import { CircularProgress } from "@material-ui/core";
import { Filter } from "../../components/filter"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    menu: {

        position: "relative",
        float: "left",
        top: "-3px",
        width: "150px",
        height: "100%",
        fontSize: "20px",
        fontWeight: "bold",
        zIndex: 3,
        [breakpoints.down('xs')]: {
            width: 100
        },
        backgroundColor: palette.primary.light
    },
    paragraph: {
        margin: "0px",
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
        width: "100%",
        height: "35px",
        paddingTop: "13px",
        paddingBottom: "5px",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
        borderBottom: `3px solid black`,
        borderTop: `3px solid black`,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "24px"
    }
}));


export const MenuComponent: React.FC<MenuComponentProps> = ({
    data,
    isLoading,
    fetchCategory,
    checkboxNames,
    checkboxes,
    handleChange
}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.menu} >
            <Filter
                checkboxNames={checkboxNames}
                checkboxes={checkboxes}
                handleChange={handleChange}
            />
            {
                isLoading
                    ? <CircularProgress color='secondary' />
                    : (
                        data.map((item, index) =>

                            <div key={index}>
                                <p className={classes.paragraph}> {item.name} </p>
                                {
                                    item.categories.map((item, index) => {
                                        const selectCategory = () => {
                                            fetchCategory(item.id, item.name)
                                        }
                                        return <MenuItem
                                            key={index}
                                            selectCategory={selectCategory}
                                            text={item.name}
                                        />
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
