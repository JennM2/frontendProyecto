import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme)=>({
    wrapper: {
        height : "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        background: `radial-gradient(circle at 0% 5%, ${theme.palette.primary.light}  , ${theme.palette.primary.contrastText} )`,
        [mq("md")]: {
            width: "100%",
            
        },
        [mq("lg")]: {
            width: "100%",
        },
    },
    imageContainer:{
        display:"flex",
        alignContent:"center",
        justifyContent: "center",
        width: "45vw",
        height:"100vh",
    },
    image:{
        width: "40vw",
        height:"80vh",
        margin: "10vh 0vw 10vh 5vw",
    },
    logContainer:{
        width: "50vw",
        height:"100vh",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    log:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.dark+"12",
        color: theme.palette.primary.main,
        width: "35vw",
        height: "88vh", 
        fontSize:"1.3vw",
        marginRight: "5vw",
    },
    title:{
        fontFamily:"Merriweather-Regular",
        fontSize:"3.2vw",
        margin: "0vh",
    },
    subtitle1:{
        margin: "0vh",
        marginTop: "5vh",
    },
    subtitle: {
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4vh",
        marginBottom: "2vh",
        
    },
    containerButton:{
        width:"12vw",
        height:"3.5vw",
    },
    icon:{
        paddingLeft: "0.5vw",
        width:"20%",
        height:"70%",
    }


}));

export default useStyles;