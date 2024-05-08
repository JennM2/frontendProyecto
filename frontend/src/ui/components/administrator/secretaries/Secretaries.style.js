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
    tableSecretaries:{  
        margin:"5vh 0vw 0vh 9vw",
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
    },
    iconSecretaries:{
        paddingLeft: "0.5vw",
    }

}));

export default useStyles;