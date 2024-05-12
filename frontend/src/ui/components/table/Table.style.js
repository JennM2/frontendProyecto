import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    table: {
        width: "65vw",
        textAlign: "center",
        borderSpacing: "0px",
    },
    headTable: {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
        fontSize: "0.9vw"
    },
    nameHead: {
        padding: "0.5vh 1.5vw 0.5vh 1.5vw"
    },
    bodyTable: {
        padding: "0.5vh 0.5vw 0.2vh 0.5vw",
        fontSize: "0.8vw",
        borderBottom: `1px solid ${theme.palette.primary.light}`,

    },
    iconAccion: {
        width: "4vw",
        height: "4vh",
        padding: "0px",
        cursor: "pointer",
    },
    underline: {
        textDecoration: "underline",
        cursor: "pointer",
    },
    inputTable: {
        width: "50%",
        height: "100%",
        textAlign: "center",
        border: "none",

    },

}));

export default useStyles;