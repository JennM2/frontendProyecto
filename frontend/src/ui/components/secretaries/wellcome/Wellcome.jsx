import useStyles from './Wellcome.style';
import secretariesStyles from '../Secretaries.style';  
import wellcome from '../../../../assets/images/welcome.svg';

const Wellcome = () => {

    const classes = useStyles();
    const secretariesClasses = secretariesStyles();

    return(
        <div className={secretariesClasses.content}>
            <p className={classes.nameWellcome}>BIENVENIDO</p>
            <img className={classes.imgWellcome} src={wellcome} alt="wellcomE" />
        </div>
    );
};

export default Wellcome;