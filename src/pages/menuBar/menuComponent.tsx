import React from "react"
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
        top: "0px",
        width: "150px",
        height: "100%",
        fontSize: "20px",
        fontWeight: "bold",
        zIndex: 3,
        [breakpoints.down('xs')]: {
            width: 100
        },
    },
    paragraph: {
        margin: "0px",
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
        width: "100%",
        height: "40px",
        paddingTop: "8px",
        paddingBottom: "5px",
        borderBottom: `3px solid ${palette.primary.dark}`,
        borderRight: `3px solid ${palette.primary.dark}`,
        fontFamily: "Comic Sans MS",
        fontSize: "24px"
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
