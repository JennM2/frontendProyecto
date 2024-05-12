import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    subjectsTable:{
        margin:"3vw 0vw 0vw 9vw"
    },
    icons:{
        paddingLeft:"0.5vw",
        width:"2vw",
        height:"2.5vw",
    },
    buttonSubjects:{
        width:"15%",
        margin:"3.5vw 0vw 0vw 60vw",
    },
    subjectName:{
        width:"80%",
        margin:"0px"
    },
    lineQualification:{
        width: "89%",
        padding: "0.35vh",
        margin:"0.5vw 0vw 1.5vw 0vw",
        borderColor:theme.palette.primary.contrastText+"50",
        backgroundColor: theme.palette.primary.contrastText+"50",
    },
    contentTop:{
        width:"80%",
        height:"12%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"2.5vw",
    },
    timeLimit:{
        width: "20%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontFamily:"Poppins-Regular",
        fontSize:"1.2vw",
    },
    buttonTop:{
        width:"15%",
        height:"4vw"
    },
    bodyQualification:{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        fontFamily:"Poppins-Regular",
        fontSize:"1.1vw",
    },
    buttons:{
        width:"90%",
        height:"3.5vw",
        position:"absolute",
        bottom:"4vw",
        display:"flex",
        justifyContent:"space-around"
    },
    buttonBottom:{
        width:"20%",
    },
    buttonsRight:{
        width:"35%",
        display:"flex",
        justifyContent:"space-between",
    },
    bottomRight:{
        width:"45%",

    },
    editTableContainer:{
        display: "inline-block",
        width: "4vw",
        height: "2.5vw",
        position: "relative",
        border: "0.2vw solid",
        borderColor: theme.palette.primary.light,
        borderRadius:"5vw"
    },
    inputEditTable:{
        opacity: 0,
        width: 0,
        height: 0,
        position: "absolute",
        left: 0,
        top: 0
    },
    checkOff:{
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.primary.dark+"50",
        transition: "background-color 0.4s",
        borderRadius: "5vw"
    },
    checkOn:{
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.primary.contrastText,
        transition: "background-color 0.4s",
        borderRadius: "5vw"
    },
    circleOff:{
        position: "absolute",
        content: " ",
        height: "1.7vw",
        width: "1.7vw",
        left: "0.2vw",
        bottom: "0.25vw",
        backgroundColor: theme.palette.primary.main,
        transition: "transform .4s",
        borderRadius: "50%"
    },
    circle:{
        position: "absolute",
        content: " ",
        height: "1.7vw",
        width: "1.7vw",
        left: "1.85vw",
        bottom: "0.25vw",
        backgroundColor: theme.palette.primary.main,
        transition: "transform .4s",
        borderRadius: "50%"
    },
    buttonDisable: {
        width:"100%",
        height:"90%",
        marginTop:"0px",     
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.primary.dark+"50",
        fontSize:"1.1vw",
        borderRadius:"1vw",
        border:"none",
        paddingInline:"0%",
    },
    button: {
        width:"100%",
        height:"90%",
        marginTop:"0px",     
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.primary.contrastText,
        fontSize:"1.1vw",
        borderRadius:"1vw",
        border:"none",
        paddingInline:"0%",
        cursor:"pointer",
    },
}));
export default useStyles;