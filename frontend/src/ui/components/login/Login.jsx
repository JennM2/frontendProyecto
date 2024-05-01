import { useState } from 'react';
import useStyles from './Login.style';


import scute from '../../../assets/images/scute.svg';
import logoSM from '../../../assets/images/logoSM.svg';
import user from '../../../assets/icons/userLog.svg';
import pass from '../../../assets/icons/passLog.svg';
import closedEye from '../../../assets/icons/closedEye.svg';
import eye from '../../../assets/icons/eyeLog.svg';
import log from '../../../assets/icons/signinLog.svg';

const Login = () => {
  const classes = useStyles();

 const [showPassword, setShowPassword] = useState(false);


 const togglePasswordVisibility = () => {
   setShowPassword((prevShowPassword) => !prevShowPassword);
 };


  return (
    <div className={classes.wrapper}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={scute} alt="scute" />
      </div>
      <div className={classes.logContainer}>
        <div className={classes.log}>
          <div className={classes.subtitle}>
            <img src={logoSM} alt="logo" />
            <p className={classes.subtitle1}>INSTITUTO TÉCNICO</p>
            <p className={classes.title}>SAN MARTÍN</p>
          </div>
          <form  className={classes.user}>
            <div className={classes.containerInputs} >
                <input className={classes.txField} placeholder="Usuario" valor="user" />
                <img className={classes.iconLog} src={user} alt="user"/>
            </div>
            <div className={classes.containerInputs} >
                <input className={classes.txField} placeholder="Contraseña" type={showPassword ? "text" : "password"} valor="password"/>
                <img className={classes.iconLog} src={pass} alt="password" />
                <img className={classes.iconLogEye} src={showPassword ? eye : closedEye} alt="eye" onClick={togglePasswordVisibility} />
            </div>
              <button className={classes.button} >
                <spam>Iniciar sesión</spam>
                <img src={log} alt="log" style={{paddingLeft:"1vw"}} />
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
