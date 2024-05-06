import useStyles from './Forms.style'
const ButtonSM = ({icon, text, className, className2, onClick}) => {
    const classes = useStyles();
    return(
        <button className={className2 || classes.button} onClick={onClick}>
            {text}
            <img className={className} src={icon} alt="" />
        </button>
    );
};

export default ButtonSM;