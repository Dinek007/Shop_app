import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";

import { MenuItem } from '../../components/menuItem'
import { MenuComponentProps } from "./types";
import { Filter } from "../../components/filter"

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => createStyles({
    menu: {
        float: "left",
        top: "0px",
        width: "170px",
        minHeight: "1000px",
        fontSize: "20px",
        paddingTop: spacing(6),
        zIndex: 3,
        [breakpoints.down('sm')]: {
            width: "130px"
        },
        [breakpoints.down('xs')]: {
            width: "100px"
        },
        backgroundColor: "black",
    },
    paragraph: {
        margin: "0px",
        backgroundColor: palette.secondary.main,
        textAlign: "center",
        paddingTop: spacing(1),
        color: "black",
        width: "100%",
        border: `4px solid black`,
        height: "35px",
        paddingBottom: "5px",
        borderBottom: `3px solid black`,
        fontSize: "24px",
        [breakpoints.down('xs')]: {
            fontSize: "20px",
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
        <>
            <Grid className={classes.menu} >
                {
                    isLoading
                        ? <CircularProgress color='secondary' />
                        : (
                            data.map((item, index) =>
                                <div key={index}>
                                    <p className={classes.paragraph}> {item.name} </p>
                                    {
                                        item?.categories.map((item, index) => {
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
            <Filter
                checkboxNames={checkboxNames}
                checkboxes={checkboxes}
                handleChange={handleChange}
            />
        </>
    )
}
