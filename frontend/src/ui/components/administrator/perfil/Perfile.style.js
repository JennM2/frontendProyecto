import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentPerfil: {
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "0vh 5vw 0vh 5vw",
    },
    userPerfil: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.palette.primary.dark + "80",
        width: "25vw",
        height: "60vh",
        paddingBottom: "10vh",
        borderRadius: "2vw",
    },
    perfilPicture: {
        position: 'relative',
        width: "14vw",
        height: "14vw",
        marginTop: "5vh",
        display: "flex",
        alignItems: "center",
    },
    picture: {
        width: "14vw",
        height: "14vw",
        borderRadius: "50%"
    },
    editOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light + "E0",
        color: theme.palette.primary.main,
        cursor: 'pointer',
        borderRadius: "50%",
        border: "3px solid",
        borderColor: theme.palette.primary.light,
        fontFamily: "Poppins-Semibold",
        fontSize: "1.3vw",
    },
    iconEditOverlay: {
        width: "4vw",
        height: "7vh",
        '& path': {
            fill: theme.palette.primary.main
        }
    },
    fileInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "14vw",
        height: "14vw",
        opacity: 0,
        cursor: 'pointer',
    },
    containerInputs: {
        width: "30vw",
    }
}));

export default useStyles;
