import React from "react"
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FilterProps } from "./types";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => createStyles({
    filter: {
        position: "fixed",
        width: "180px",
        height: "230px",
        right: "0px",
        marginTop: spacing(8),
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        [breakpoints.down('md')]: {
            width: "150px",
            height: "223px",
            borderRadius: "0px",
        },
        [breakpoints.down('sm')]: {
            marginTop: spacing(0),
        },
    },
    formText: {
        top: "8px",
        color: "white",
        position: "relative",
        left: "30px",
        [breakpoints.down('md')]: {
            left: "8px",

        },
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