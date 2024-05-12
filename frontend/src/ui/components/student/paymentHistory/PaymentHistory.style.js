import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tableHistory: {
        margin: "4vw 0vw 0vw 8.5vw",

    },
    buttonsHistory: {
        position: "absolute",
        width: "15%",
        height: "8%",
        bottom: "5vw",
        right: "33vw",
        cursor: "pointer",
    },
    iconButton: {
        width: "20%",
        height: "1.5vw",
        paddingLeft: "0.1vw",
        cursor: "pointer",

    },

}));

export default useStyles;