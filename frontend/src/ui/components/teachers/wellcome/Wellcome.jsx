import useStyles from './Wellcome.style';
import teacherStyles from '../Teachers.style';
import wellcome from '../../../../assets/images/welcome.svg';

const Wellcome = () => {

    const classes = useStyles();
    const adminClasses = teacherStyles();

    return (
        <div className={adminClasses.content}>
            <p className={classes.nameWellcome}>BIENVENIDO</p>
            <img className={classes.imgWellcome} src={wellcome} alt="wellcomE" />
        </div>
    );
};

export default Wellcome;