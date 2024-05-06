import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    studentsTop:{
        display: "flex",
        alignItems: "center",
        justifyContent:"flex-end",
        marginRight:"8vw"
    },
    buttonNewStudent:{
        width: "8vw",
        height: "7vh",
    },
    iconStudent:{
        marginLeft: "0.5vw",
        width: "2vw",
        height: "4vh",
    },
    tableStudentContent:{
        marginLeft: "9vw",
    },
    tableStudents:{
        borderSpacing: "0px",
        textAlign: "center",
    },
    titlemodalList:{
        margin:"0vh 0vw 0vh 1vw"
    },
    modalTop:{
        width:"85%",
        display: "flex",
        justifyContent:"space-between",
        margin:"3vh 0vw 3vh 0vw"
    },
    enrollment:{
        display: "flex",
        flexDirection:"column",
        alignItems:"flex-start"
    },
    labelStudent:{
        width:"100%",
        fontFamily:"Poppins-Regular",
        fontSize:"1.1vw",
        color: theme.palette.primary.main,
        textAlign: "center",
    },
    inputEnrollment:{
        width:"100%",
        height:"5vh",
        border:"none",
        borderColor:"none",
        borderRadius:"1vw",
        boxShadow:`0vw 0.1vw 0.2vw ${theme.palette.primary.light}`,
        fontSize:"1.1vw",
        fontFamily:"Poppins-Regular",
        textAlign:"center",
    },
    inputsModal:{
        display:"flex",
        width:"85%",
        justifyContent:"space-between",
    },

    modalBottom:{
        width:"90%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        paddingLeft:"4.5vw"
    },
    credentials:{
        height:"25vh",
        paddingBottom:"5vh",
        display:"flex",
        alignItems:"center",
    },
    container:{
        display:"flex",
        flexDirection:"column",
        paddingLeft:"6vw"

    },
    selectContainer:{
        display:"flex",
        flexDirection:"column",
        width:"30vw",
    },
    labelSelect:{
        fontFamily:"Poppins-Regular",
        fontSize:"1.1vw",
        paddingLeft:"0.7vw"

    },
    select:{
        height:"5vh",
        borderRadius:"1vw",
        display:"flex",
        
    },
    buttonsModal:{
        display: "flex",
        justifyItems:"center",
        justifyContent:"space-around",
        paddingTop:"7vh",
        
    },
    buttonStudents:{
        width: "10vw",
        height: "7vh",
    },
}));

export default useStyles;