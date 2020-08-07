import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { GenderProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    male: {
        position: "relative",
        float: "left",
        height: "630px",
        width: "600px",
        borderLeft: `8px solid ${palette.primary.light} `,
        borderTop: `8px solid ${palette.primary.light} `,
        borderBottom: `8px solid ${palette.primary.dark} `,

    },
    female: {
        position: "relative",
        float: "left",
        height: "630px",
        width: "600px",
        borderRight: `8px solid ${palette.primary.dark} `,
        borderTop: `8px solid ${palette.primary.light} `,
        borderBottom: `8px solid ${palette.primary.dark} `,

    },
    gender: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        boxShadow: '5px 5px 9px 2px rgba(0, 0, 0, .9)',
        marginTop: "20px"
    }
}));

export const Gender: React.FC<GenderProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.gender}>
            <img src="./male.png" className={classes.male} alt="pic"></img>
            <img src="./female.png" className={classes.female} alt="pic"></img>
        </div>
    )
}