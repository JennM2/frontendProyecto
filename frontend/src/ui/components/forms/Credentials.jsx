import { useState } from 'react';
import useStyles from './Forms.style';
import user from '../../../assets/icons/userLog.svg';
import pass from '../../../assets/icons/passLog.svg';
import closedEye from '../../../assets/icons/closedEye.svg';
import eye from '../../../assets/icons/eyeLog.svg';

const Credentials = ({nameUser, passwordUser, onUserChange, onPasswordChange}) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <form  className={classes.user}>
            <div className={classes.containerInputs} >
                <input className={classes.txField} placeholder="Usuario" value={nameUser} onChange={e => onUserChange(e.target.value)}/>
                <img className={classes.iconLog} src={user} alt="user"/>
            </div>

            <div className={classes.containerInputs} >
                <input className={classes.txField} placeholder="Contraseña" type={showPassword ? "text" : "password"} value={passwordUser} onChange={e => onPasswordChange(e.target.value)}s/>
                <img className={classes.iconLog} src={pass} alt="password" />
                <img className={classes.iconLogEye} src={showPassword ? eye : closedEye} alt="eye" onClick={togglePasswordVisibility} />
            </div>
      </form>
    );
};

export default Credentials;