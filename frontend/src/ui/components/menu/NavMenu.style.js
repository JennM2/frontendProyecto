import { makeStyles } from '@material-ui/core';


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
    },
    list: {
        listStyle:"none",
    },
    buttonOption:{
        background:"none",
        border:"none",
        width:"100%",
        fontSize:"1.1vw",
    },
    info: {
        display: "flex",
        alignItems: "center",
        height:"7vh",
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    selectedInfo:{
        width:"95%",
        backgroundColor: theme.palette.primary.main+"30",
        paddingLeft:"2vw",
        borderRadius: "0.5vw",
        boxShadow:` -0.2vw 0.2vw 0.1vw ${theme.palette.primary.contrastText}`,
        height:"2.5vw"
    },
    
    options: {
        paddingLeft: "1.5vw",
    },
    listSub: {
        listStyle:"none",
    },
    subMenu: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.light+"C9",
        marginLeft:"2.5vw",
        padding: "1vh 0vw 1vh 0vw",
        fontSize:"1vw",
        height:"80%",
        width:"75%",
    },
    buttonSuboption:{
        display: "flex",
        alignItems: "center",
        background:"none",
        border:"none",
        width:"100%",
        color: theme.palette.primary.main,
        height:"3.5vw",
        fontSize:"1vw",

    },
    infoSuboption:{
        paddingLeft: "0.5vw",
        display: "flex",
        alignItems: "center",
    },
    selectedInfoSub:{
        backgroundColor: theme.palette.primary.contrastText,
        width:"100%",
        height:"75%"
    },
    
    logo: {
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        height:"15vh",
        color: theme.palette.primary.contrastText,
    },
    photo: {
        margin:"0vh 5vw 0vh 1vw",
        width:"3vw",
        height:"3vw",
        borderRadius: "50%",
    },
    logoSm: {
        padding:"0vh 1vw 0vh 0.7vw",
        width:"5vw",
        height:"5vw",
    },
    nameLogo: {
        fontFamily:"Merriweather-Bold",
        fontSize:"1.3vw",
    },

    link: {
        color: "inherit",
        textDecoration: "none",
    }

}));

export default useStyles;