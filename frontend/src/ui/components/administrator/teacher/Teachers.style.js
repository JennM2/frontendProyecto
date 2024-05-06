import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

    headTeachers:{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",

    },
    
    buttonsTech:{
        display: "flex",
        width: "50%",
        fontSize:"1.3vw",
        marginLeft:"13vw"
    },
    button:{
        width:"13vw",
        paddingInline:"1vw",
        height:"7vh",
        
    },
    buttonList:{
        width:"17vw",
        paddingInline:"1vw",
        height:"6.5vh",   
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.primary.light,
        fontSize:"1.1vw",
        borderRadius:"1vw",
        border:"none",

    },
    iconTeacher:{
        paddingLeft:"1vw",
        width:"3vw",
        height:"3vh",
    },
    tableTch:{
        width: '65vw',
        margin:' 2vh 0vw 0vh 8.9vw'
    },
    
    buttonTeacher:{
        display: "flex",
        justifyContent:"center",
        width: "50vw",
        padding: "10vh 0vw 0vh 3vw",
    },
    buttonS:{
        width: "10vw",
        height: "7vh",
        marginLeft: "5vw",
    },
    table:{
        width: "65vw",
        height: "20vh",
        borderSpacing:"0px",
        textAlign: "center",
        margin: "5vh 0vw 0vh 0vw",
    },
    tableBody:{
        backgroundColor: `${theme.palette.primary.main}`,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        fontFamily:"Poppins-Regular",
        fontSize:"0.9vw",
        color:theme.palette.primary.contrastText,

    },
    contentButtons:{
        width: "10vw",
        margin: "10vh 0vw 0vh 55vw ",
        height: "7vh",
    },
    titlemodalList:{
        margin: "2vh 0vw 5vh",
    },
    titleEnable:{
        margin: "0vh 0vw 3vh 0vw",
    },
    containerName:{
        width: "90%",
        height: "10%",
        marginBottom: "1.5vh",
    },
    nameteacher:{
        display:"flex",
        justifyContent: "space-between",
        fontSize:"1.7vw",
        fontFamily:"Poppins-Regular",
        paddingInline:"2vw",
    },
    lineEnable:{
        width: "90%",
        padding: "0.35vh",
        marginBottom: "4vh",
        borderColor:theme.palette.primary.contrastText+"50",
        backgroundColor: theme.palette.primary.contrastText+"50",
    },
    containerEnable:{
        width: "90%",
        height: "100%",
        display: "flex",
        justifyContent:"Space-around",
        marginBottom:"10vh"
    },
    containerAssign:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        height: "90%",
        backgroundColor: theme.palette.primary.contrastText+"B0",
        borderRadius: "3vh",
        fontFamily: "Poppins-Regular",
        fontSize: "1.5vw",

    },
    
    assign:{
        width: "100%",
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        marginLeft: "5vw",
        fontFamily:"Poppins-Regular",
        fontSize: "1.1vw",
    },
    select:{
        width: "80%",
        height: "4.7vh",
        borderRadius: "4vw",
    },
    containerSmall:{
        display: "flex",
        justifyContent:"space-around",
        alignItems: "flex-end",
        width: "90%",
        paddingInline: "1vw",
    },
    assignSmall:{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",  
        fontFamily:"Poppins-Regular",
        fontSize: "1.1vw",
    },
    labelSelect:{
        padding: "0vh 0vw 1vh 0.5vw",
    },
    buttonContainer:{
        width: "40%",     
        height: "100%",
        paddingTop: "3vh",
    },
    buttonAssign:{
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main+"50",
        width:"100%",
        marginTop:"0.9vh",     
        color:theme.palette.primary.main,
        fontSize:"1.1vw",
        borderRadius:"1vw",
        border:"0.1 solid ",
        height: "5vh",
    },
    containerSubjectAssign:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width: "48%",
        height: "90%",
        fontFamily:"Poppins-Regular",
        fontSize: "1.5vw",
    },
    tableSubjects:{
        width:"100%",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        marginBottom:"3vh",
        borderSpacing: "0px",

    },
    bodyTable:{
        backgroundColor: theme.palette.primary.main,
        fontSize:"0.8vw",
        fontFamily:"Poppins-Regular",
        borderBottom: `1px solid ${theme.palette.primary.light}`,

    },
    butonsActions:{
        display: "flex",
        justifyContent:"space-evenly",
        width: "60%",
        height: "15vh",
        paddingTop: "4vh",
    },
    buttons:{
        width: "9vw",
        height: "6.5vh",
    },
    lineDetail:{
        width: "95%",
        padding: "0.35vh",
        marginBottom: "4vh",
        borderColor:theme.palette.primary.contrastText+"50",
        backgroundColor: theme.palette.primary.contrastText+"50",
    },
    containerTableDetail:{
        width: "90%",
        height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7vh",

    },
    tableDetail:{
        width: "80%",
        borderSpacing: "0px",
        paddingBottom:"20vh",

    },
    bodyTableDetail:{
        height: "5vh",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontSize:"0.8vw",
        fontFamily:"Poppins-Regular",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        textAlign: "center",
    },
    buttonClose:{
        width:"9vw",
        height:"6vh",
        marginLeft: "58vw",
        
    },
    subtitle: {
        fontFamily:"Poppins-Semibold",
        fontSize:"2vw",
        marginLeft: "9vw",
        color: theme.palette.primary.contrastText,
    },
    tableEvaluation:{
        marginLeft: "9vw",
    },


}));

export default useStyles;