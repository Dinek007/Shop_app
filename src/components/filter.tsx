import React from "react"
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FilterProps } from "./types";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    filter: {
        position: "fixed",
        width: "200px",
        height: "230px",
        right: "5px",
        marginTop: "8px",
        boxShadow: '0px 0px 9px 2px rgba(0, 0, 0, .7)',
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
    },
    label: {
        color: "white",
        fontSize: "30px"
    },
    formText: {
        top: "8px",
        color: "black",
        position: "relative",
        left: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
    },
    root: {
        color: palette.secondary.light,
        '&$checked': {
            color: "lightgreen",
        },
    },
}));

export const Filter: React.FC<FilterProps> = ({
    checkboxNames,
    checkboxes,
    handleChange
}) => {
    const classes = useStyles();
    return (
        <div className={classes.filter}>
            {
                (
                    checkboxNames.map((item, index) => {
                        console.log(checkboxes[item])
                        return (
                            <FormControlLabel className={classes.formText}
                                control={<Checkbox
                                    color='default'
                                    classes={{ root: classes.root }}
                                    onChange={handleChange}
                                    checked={checkboxes[item]}
                                    name={item}
                                />}
                                label={item}
                            />
                        )
                    }
                    )
                )
            }
        </div>
    )
}