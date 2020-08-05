import React, { useCallback } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MenuItem } from '../../components/menuItem'
import { MenuComponentProps } from "./types";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
    menu: {
        backgroundColor: "#aaff00",
        marginTop: '5vh',
        width: 150,
        [breakpoints.down('xs')]: {
            width: 100
        }
    },
    paragraph: {
        margin: "0px",
        backgroundColor: "black",
        textAlign: "center",
        color: "#ccff00",
        width: "100%",
        height: "4vh",
        paddingTop: "1vh",
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
                    ? <CircularProgress color='secondary'/>
                    : (
                        data.map((item, index)=>
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
