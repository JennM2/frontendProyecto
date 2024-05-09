import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    buttonNotification:{
        display:"flex",
        alignContent:"flex-end",
        cursor:"pointer",
        margin:"3vw 0vw 0vw 7vw"

    },
    buttonNewNotification:{
        width:"18%",
        height:"7%",

    },
    tableNotifications:{
        margin:"2vw 0vw 0vw 7vw"
    },
    buttonClean:{
        width:"10%",
        height:"7%",
        position:"absolute",
        bottom:"5vw",
        right:"38vw",
    },
    iconButton:{
        paddingLeft:"1vw",
        width:"2.5vw",
        height:"2.5vw",
        cursor:"pointer",
    },
    titleNotification:{
        margin:"0vw 0vw 3vw 0vw",
    },
    typeNotification:{
        width:"80%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        marginBottom:"1vw",
    },
    labelType:{
        marginBottom:"0.5vw",
        fontFamily:"Poppins-Regular",
        fontSize:"1.5vw",
    },
    selectType:{
        width:"20vw",
        height:"2.1vw",
        border:"none",
        paddingLeft:"1vw",
        borderRadius:"4vw",
    },
    messageNotification:{
        width:"80%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    textAreaMessage:{
        borderRadius:"1vw",
        padding:"1vw 0vw 0vw 1vw",
        height:"10vw",
    },
    buttons:{
        display:"flex",
        width:"100%",
        alignItems:"flex-end",
        justifyContent:"center",
        height:"5vw",
    },
    buttonSend:{
        width:"14%",
        height:"2.5vw",
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
        fontFamily:"Poppins-Regular",
        fontSize:"1.1vw",
        border:"none",
        borderRadius:"1vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight:"2vw",
        cursor:"pointer",
    },
    buttonCancel:{
        width:"14%",
        height:"2.5vw",
        backgroundColor: theme.palette.primary.dark+"60",
        color: theme.palette.primary.main,
        fontFamily:"Poppins-Regular",
        fontSize:"1.1vw",
        border:"none",
        borderRadius:"1vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"2vw",
        cursor:"pointer",
    }
}));

export default useStyles;