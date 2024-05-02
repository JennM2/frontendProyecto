import { makeStyles } from '@material-ui/core';
//import mq from '../../../config/mq';

const useStyles = makeStyles((theme)=>({

    content:{
        position: "absolute",
        width:"82.9vw",
        height:"83vh",
        right: "0px",
        bottom: "0px",
    },

    text:{
        fontFamily:"Poppins-Bold",
        fontSize:"3vw",
        margin:"0vh 0vw 0vh 7vw",
        color: theme.palette.primary.light
    },
    lineTitle:{
        width:"78vw",
        height: "0.5vh",
        borderColor: theme.palette.primary.light+"10",
        backgroundColor: theme.palette.primary.light+"10",
    },

    menu: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `radial-gradient(circle at 0% 5%, ${theme.palette.primary.light}  , ${theme.palette.primary.contrastText} )`,
        width:"17vw",
        height:"85vh",
        position: 'absolute',
        bottom: "0vh",
        marginBottom: "0px",
        paddingBottom: "1vh",
        borderRadius: " 0vh 4vw 0vh 0vw",

    },
    line: {
        width: "90%",
        borderColor: theme.palette.primary.light+"90",
        height: "3px",
        backgroundColor: theme.palette.primary.light+"90",
        
    },
    top:{
        display: "flex",
        justifyContent: "space-between",
    }

}));

export default useStyles;