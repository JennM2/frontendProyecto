import useStyles from './Forms.style'
const ButtonSM = ({icon, text, className, className2, onClick, enable}) => {
    const classes = useStyles();
    return(
        <button className={className2 || classes.button } onClick={onClick} disabled={enable}>
            {text}
            <img className={className} src={icon} alt="" />
        </button>
    );
};

export default ButtonSM;