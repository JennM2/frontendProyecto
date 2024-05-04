import useStyles from './Forms.style'
const ButtonSM = ({icon, text, className, onClick}) => {
    const classes = useStyles();
    return(
        <button className={classes.button} onClick={onClick}>
            {text}
            <img className={className} src={icon} alt="icon" />
      </button>
    );
};

export default ButtonSM;