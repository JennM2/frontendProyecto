import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    under:{
        position:"relative",
        top:"-13vh",
        left:"-17.1vw",
        width:"100vw",
        height:"100vh",
        backgroundColor:`${theme.palette.primary.dark}99`,
        backdropFilter: "blur(5px)", 
    },
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        background: `radial-gradient(circle at 0% 50%, ${theme.palette.primary.light}, ${theme.palette.primary.contrastText})` ,
        position:"absolute",
        top: "43%",
        left: "40.5%",
        transform: "translate(-50%, -50%)",
        borderRadius: "0.5vw",
    },
    content:{
        width:"90%",
        height:"90%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.dark+"12",
        color: theme.palette.primary.main,
        fontSize:"2.5vw",
        fontFamily:"Poppins-Semibold",
        paddingTop: "3vh",
        borderRadius: "1vw",

    },

    containerInputs:{
        display: "flex",
        width: "100%",
        justifyContent:"space-around",
    },
    inputs:{
        color: theme.palette.primary.main,
        fontSize:"1.1vw",
        width: "30vw",
        paddingLeft: "1vw",
        fontFamily:"Poppins-Regular",
        
    },

    contentButtons:{
        display: "flex",
        alignItems: "center",
        marginBottom: "12vh",
        height: "22vh",
        paddingLeft: "20vh",
    },
    icons:{
        paddingLeft:"0.5vw",
        width:"2vw",
        height:"2vw",
    },
    tableModal:{
        width: '65vw',  
        margin:' 2vh 0vw 12vh 0.3vw'
    }

}));

export default useStyles;