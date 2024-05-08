import useStyles from './Login.style';
import scute from '../../../assets/images/scute.svg';
import logoSM from '../../../assets/images/logoSM.svg';
import Credentials from '../forms/Credentials';
import ButtonSM from '../forms/ButtonSM';
import signIn from '../../../assets/icons/signinLog.svg';

const Login = () => {
  const classes = useStyles();



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
          <Credentials/>
          <div className={classes.containerButton}>
            <ButtonSM icon={signIn} text="Iniciar Sesión" className={classes.icon}/>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Login;
