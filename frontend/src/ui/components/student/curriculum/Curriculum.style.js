import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentQualification: {
        margin: "4vw 0vw 0vw 7.5vw"
    },
    sectionYear: {
        width: "90%",
        height: "1.5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    year: {
        fontFamily: "Poppins-Semibold",
        color: theme.palette.primary.light,
        fontSize: "1.3vw",
        paddingLeft: "1.5vw",
    },
    buttonArrow: {
        background: "none",
        border: "none",
        borderColor: "none:",
        marginRight: "2vw",
    },
    iconArrow: {
        height: "100%",
        width: "100%",

    },
    tableQualified: {
        height: "80%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: "0.4vw 0.5vw 0.1vw 0.5vw",
        fontFamily: "Poppins-Regular",
        fontSize: "0.8vw",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    positionTable: {
        display: "flex",
        margin: "0vw 0vw 2vw 0.8vw",

    },
    buttons: {
        position: "absolute",
        width: "11%",
        height: "8%",
        bottom: "4vw",
        right: "10vw",
    },
    iconPosition: {
        paddingLeft: "0.7vw",
    },
    lineFirst: {
        width: "89%",
        margin: "0.5vw 0vw 1vw 0vw"
    }

}));

export default useStyles;