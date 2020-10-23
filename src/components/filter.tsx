import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { FilterProps } from "./types"

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
            width: "130px",
            height: "223px",
            borderRadius: "0px",
        },
        [breakpoints.down('sm')]: {
            marginTop: spacing(0),
            position: "absolute",
        },
        [breakpoints.down('xs')]: {
            position: "absolute",
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