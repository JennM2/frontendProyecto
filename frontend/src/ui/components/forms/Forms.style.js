import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({

    user:{
        width:"20vw",
        height:"209px",
        display:"flex",
        flexDirection:"column",
        fontSize:"20px",
        justifyContent:"center",
        alignItems:"center",
    },
    containerInputs:{
        position:"relative",
        width:"100%",
        marginTop:"3vh",
    },

    txField:{
        width:"100%",
        backgroundColor:theme.palette.primary.main,
        borderRadius:"20px",
        border:"none",
        textAlign:"center", 
        height:"35px",
    },
    iconLog:{
        position:"absolute",
        paddingTop:"4px",
        left:"10px",    
    },
    iconLogEye:{
        position:"absolute",
        paddingTop:"4px",
        right:"10px", 
    },
    dynInputs:{
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        paddingBottom:"2vh",
    },
    dynLabel:{
        fontSize:"1.1vw",
        color: theme.palette.primary.contrastText,
        padding:"0vh 0vw 0.6vh 1vw"
    },
    dynInput:{
        width:"100%",
        height:"5vh",
        border:"none",
        borderColor:"none",
        borderRadius:"1vw",
        boxShadow:`0vw 0.1vw 0.2vw ${theme.palette.primary.light}`,
        fontSize:"1.1vw",
        textAlign:"center",
    }

}));
export default useStyles;