import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    contentPerfil:{
        height:"70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin:"0vh 5vw 0vh 5vw",
    },
    userPerfil:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.palette.primary.dark+"80",
        width:"25vw",
        height:"60vh",
        paddingBottom: "10vh",
        borderRadius:"2vw",

    },
    perfilPicture:{
        width:"30vw",
        height:"30vh",
        marginTop:"5vh",
    },
    containerInputs:{
        width:"30vw",
    }


}));
export default useStyles;