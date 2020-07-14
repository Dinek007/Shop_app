import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MenuItem } from '../../components/menuItem'

const useStyles = makeStyles({
    menu: {
        position: "fixed",
        backgroundColor: "#aaff00",
        height: "85%",
        left: "0px",
        top: "10%",
        width: "10%",
    },
    paragraph: {
        margin: "0px",
        backgroundColor: "black",
        textAlign: "center",
        fontSize: "1.5vw",
        color: "#ccff00",
        width: "100%",
        height: "4vh",
        paddingTop: "1vh",
    }
});


export const MenuComponent = ({ menuItemsUsed, menuItemsNoUsed, menuItemsUser }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.menu} >
            <p className={classes.paragraph}> NEW </p>
            {
                menuItemsUsed.map((val, index) => (
                    <MenuItem key={index} text={val}></MenuItem>
                ))
            }
            <p className={classes.paragraph}> USED </p>
            {
                menuItemsNoUsed.map((val, index) => (
                    <MenuItem key={index} text={val}></MenuItem>
                ))
            }
            <p className={classes.paragraph}> EX DISPLAY </p>
            {
                menuItemsUser.map((val, index) => (
                    <MenuItem key={index} text={val}></MenuItem>
                ))
            }
        </Grid>
    )
}
