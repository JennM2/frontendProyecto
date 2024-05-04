import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

    buttonSecretaries:{
        position: "relative",
        left: "66vw",
        width:"8vw",
        height:"3vw",
        padding:"0%",
        marginTop: "5vh",
    },
    iconSecretaries:{
        paddingLeft:"0.5vw",
        width:"2vw",
        height:"2vw",
    },
    tableSecretaries:{  
        margin:"5vh 0vw 0vh 9vw",
    },
    under:{
        position:"relative",
        top:"-13vh",
        left:"-17.1vw",
        width:"100vw",
        height:"100vh",
        backgroundColor:`${theme.palette.primary.main}99`,
        backdropFilter: "blur(5px)", 
    },
    containerNewSecretary:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        background: `radial-gradient(circle at 0% 300%, ${theme.palette.primary.light}  , ${theme.palette.primary.contrastText} )`,
        position:"absolute",
        top: "43%",
        left: "40.5%",
        transform: "translate(-50%, -50%)",
        borderRadius: "0.5vw",
    },
    backgroundSecretary:{
        width:"90%",
        height:"90%",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.dark+"12",
        color: theme.palette.primary.main,
        fontSize:"2.5vw",
        fontFamily:"Poppins-Semibold",
        paddingTop: "3vh",
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
    footerSecretary:{
        display: "flex",
        alignItems: "center",
        marginBottom: "12vh",
        height: "22vh",
        paddingLeft: "20vh",
    },
    buttonSecretary:{
        display: "flex",
        justifyContent:"center",
        width: "50vw",
        padding: "10vh 0vw 0vh 3vw",



    },
    buttonS:{
        width: "10vw",
        height: "7vh",
        marginLeft: "5vw",
    }

}));

export default useStyles;