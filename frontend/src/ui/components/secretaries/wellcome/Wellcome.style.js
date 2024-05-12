import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    nameWellcome: {
        fontFamily: "Merriweather-Regular",
        fontSize: "6vw",
        color: theme.palette.primary.light,
        margin: "2vh 0vw 5vh 10vw",
        textShadow: `-0.6vw 0.4vw 0.3vw ${theme.palette.primary.contrastText}40`,
    },
    imgWellcome: {
        position: "absolute",
        width: "60vw",
        height: "60vh",
        bottom: "0px",
        right: "1vw",
    },

}));

export default useStyles;