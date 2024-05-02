import { makeStyles } from '@material-ui/core';
//import mq from '../../../config/mq';

const useStyles = makeStyles((theme)=>({

    icon: {
        paddingRight: "1vw",
        width: "4vw",
        height:"3vh",
    },
    
    containerMenu:{
        display:"flex",
        flexDirection:"column",
        color:theme.palette.primary.main,
        fontSize:"1.1vw",
    },
    list: {
        listStyle:"none",
    },
    subMenu: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light+"C9",
        marginRight:"1vw",
        padding: "1vh 0vw 1vh 0vw",
        borderRadius: "1vw",
        fontSize:"1vw",
        height:"100%",
    },
info: {
    display: "flex",
    alignItems: "center",
    height:"7vh"
},
options: {
    paddingLeft: "2vw",
},

logo: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    height:"15vh",
    color: theme.palette.primary.contrastText,
},
photo: {
    padding:"0vh 7vw 0vh 1vw",
},
logoSm: {
    padding:"0vh 1vw 0vh 0.7vw",
    width:"5vw",
    height:"5vw",
},
nameLogo: {
    fontFamily:"Merriweather-Bold",
    fontSize:"1.3vw",
}

}));

export default useStyles;