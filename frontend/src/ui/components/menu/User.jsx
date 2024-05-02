import useStyles from './NavMenu.style';
import user from '../../../assets/icons/userLog.svg';

const User = () => {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <p>Administrador</p>
            <img className={classes.photo} src={user} alt="user" />
        </div>
    );
};

export default User;