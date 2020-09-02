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
        top: "0px",
        width: "150px",
        height: "100%",
        fontSize: "20px",
        fontWeight: "bold",
        zIndex: 3,
        [breakpoints.down('sm')]: {
            width: "115px",
            fontSize: "15px",
        },
        [breakpoints.down('xs')]: {
            width: "80px",
            fontSize: "10px",
        },
        backgroundColor: "black",
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

        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "24px",
        [breakpoints.down('sm')]: {
            fontSize: "19px",
        },
        [breakpoints.down('xs')]: {
            fontSize: "14px",
            height: "30px",
        },
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
