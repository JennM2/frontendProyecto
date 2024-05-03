import useStyles from './Forms.style'
const ButtonSM = ({icon, text}) => {
    const classes = useStyles();
    return(
        <button className={classes.button}>
            {text}
            <img src={icon} alt="icon" />
      </button>
    );
};

export default ButtonSM;