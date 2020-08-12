import React from "react"
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FilterProps } from "./types";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';



const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    filter: {
        position: "relative",
        width: "250px",
        height: "230px",
        left: "50px",
        top: "30px",
        boxShadow: '0px 0px 9px 2px rgba(0, 0, 0, .7)',
    },
    button: {
        color: "white",
        position: "absolute",
        bottom: "9px",
        left: "50%",
        transform: "translate(-50%, 0)",
        border: "1px solid white"
    },
    label: {
        color: "white",
        fontSize: "30px"
    },
    formText: {
        color: "white"
    }
}));

const GreenCheckbox = withStyles({
    root: {
        color: "white",
        '&$checked': {
            color: "lightgreen",
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);



export const Filter: React.FC<FilterProps> = ({
    checkboxNames,
    checkboxs,
    handleChange
}) => {
    const classes = useStyles();
    return (
        <div className={classes.filter}>
            {
                (
                    checkboxNames.map((item, index) =>
                        <FormControlLabel className={classes.formText}
                            control={<GreenCheckbox
                                //  checked={state.item} tu ma byc boolean z checkboxNames
                                onChange={handleChange}
                                name={item}
                            />}
                            label={item}
                        />

                    )
                )
            }





            <Button className={classes.button}> Filter </Button>
        </div>
    )
}