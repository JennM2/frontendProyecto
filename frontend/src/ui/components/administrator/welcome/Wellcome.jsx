import useStyles from './Wellcome.style';
import wellcome from '../../../../assets/images/welcome.svg';

const Wellcome = () => {

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <p>BIENVENIDO</p>
            <img src={wellcome} alt="wellcomE" />
        </div>
    );
};

export default Wellcome;