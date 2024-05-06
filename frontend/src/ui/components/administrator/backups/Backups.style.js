import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    containerProgram:{
        display: 'flex',
        flexDirection: 'column',
    },
    contentProgram:{
        width:"90%",
        height:"100%",
        display: 'flex',
        alignItems: 'center',
        margin:"3vh 0vw 3vh 0vw",
        justifyContent:"space-between",
        
    },
    programTime:{
        display: 'flex',
        flexDirection: 'column',
        height:"15vh",

    },
    program:{
        display: 'flex',
        paddingLeft: "10.5vw",

    },
    subtitle: {
        fontFamily:"Poppins-Semibold",
        fontSize:"2vw",
        padding: "2vh 0vw 2vh 10vw",
        margin:"0px",
        color: theme.palette.primary.light,
       
    },
    check:{
        marginRight: "4.5vw",
        display: 'flex',
        alignItems: 'center',
        fontSize: "1.1vw",
    },
    labelCheck:{
        marginLeft:"0.5vw"
    },
    buttonProgram:{
        width:"15vw",
        height: "7vh",
        marginRight:"10vw",
    
    },
    recentsBackup:{
        marginTop:"1vh",
    },
    iconProgram:{
        paddingLeft:"1vw",
    },
    tableBackups:{
        width:"60%",
        height:"20vh",
        borderSpacing: "0px",
        textAlign: "center",
        margin:"2vh 0vw 0vh 10.5vw",

    }

}));

export default useStyles;