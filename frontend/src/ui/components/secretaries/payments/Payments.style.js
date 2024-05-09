import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    tablePayments:{
        margin:"4vw 0vw 0vw 7vw",
        width:"80%",
        height:"50%",
        borderSpacing:"0px",
        textAlign:"center",
    },
    buttonPayments:{
        display:"flex",
        alignContent:"flex-end",
        cursor:"pointer",
    },
    button:{
        width:"18%",
        height:"7%",
        position:"absolute",
        bottom:"5vw",
        right:"11vw",
    },
    iconButton:{
        paddingLeft:"1vw",
        width:"2.5vw",
        height:"2.5vw",
        cursor:"pointer",
    },
}));

export default useStyles;