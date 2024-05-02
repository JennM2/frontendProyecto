import useStyles from './Login.style';
import scute from '../../../assets/images/scute.svg';
import logoSM from '../../../assets/images/logoSM.svg';
import Credentials from '../forms/Credentials';

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
        </div>
      </div>
    </div>
  );
};
export default Login;
