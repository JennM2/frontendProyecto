import useStyles from './NavMenu.style';


const User = ({userPerfil, nameUser}) => {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <p>{nameUser}</p>
            <img className={classes.photo} src={userPerfil} alt="user" />
        </div>
    );
};

export default User;