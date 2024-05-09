import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    buttonSubject:{
        width:"17%",
        height:"8%",
        margin:"3vw 0vw 2.5vw 63vw",
        cursor:"pointer",
    },
    iconButton:{
        paddingLeft:"0.8vw",
        cursor:"pointer",

    },
    tableSubject:{
        width:"80%",
        paddingLeft:"5.5vw",
    },
    sizeTable:{
        borderSpacing:"0px",
        width:"72vw",
        textAlign:"center",
    },
    sizeIcons:{
        width:"32%",
        height:"32%",
        paddingLeft:"0.5vw",
        cursor:"pointer",
    },
    titleEnable:{
        margin:"0vw  0vw 1vw 0vw"
    },
    contentEnableSubject:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        fontFamily:"Poppins-Regular",
        fontSize: "1.1vw",
    },
    contentLeft:{
        width:"35%",
        display:"flex",
        flexDirection:"column",
        marginLeft:"5.5vw",
    },
    contentRight:{
        width:"45%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginRight:"6vw",
    },
    intoConentRignt:{
        display:"flex",
        width:"100% ",
        height:"5vw",
        alignItems:"flex-start",
        justifyContent:"space-between",

    },
    dataEnable:{
        width:"100%",
        height: "4vw",
        display: "flex",
        flexDirection: "column",
        margin: "0vw 0vw 1.2vw 0vw",
    },
    dataEnableInto:{
        width:"45%",
        height: "4vw",
        display: "flex",
        flexDirection: "column",
        margin: "0vw 0vw 1.2vw 0vw",
    },
    selectInto:{
        width:"100%",
        height: "4vw",
        borderRadius: "0.5vw",
        paddingLeft: "0.5vw",

    },
    labelSelect:{
        width:"50%",
        padding: "0vw 0vw 0.4vw 0.5vw",
    },
    select:{
        width:"100%",
        height: "4vw",
        borderRadius: "0.5vw",
        paddingLeft: "0.5vw",
    },
    lineSubject:{
        width: "89%",
        padding: "0.35vh",
        margin:"0.5vw 0vw 1.5vw 0vw",
        borderColor:theme.palette.primary.contrastText+"50",
        backgroundColor: theme.palette.primary.contrastText+"50",
    },
    contentBottomEnable:{
        width:"100%",
        fontSize: "1.1vw",
        fontFamily:"Poppins-Regular",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
    },
    labelSelectBottom:{
        width:"100%",
        padding: "0vw 0vw 0.4vw 0.5vw",
    },
    contentBottom:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
    },
    dataEnableBottom:{
        width:"25%",
        height: "4vw",
        display: "flex",
        flexDirection: "column",
        margin: "0vw 0vw 1.2vw 0vw",
    },
    buttonsEnableSubject:{
        display:"flex",
        width:"100%",
        alignItems:"flex-end",
        justifyContent:"center",
        height:"5vw",
    },
    buttonEnable:{
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
        marginRight:"2vw"
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
        marginLeft:"2vw"
    }
    

}));

export default useStyles;