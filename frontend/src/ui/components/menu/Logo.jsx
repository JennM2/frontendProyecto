import { useState } from 'react';
import useStyles from './NavMenu.style';
import logo from '../../../assets/images/logoSmsmall.svg';

const Logo = () => {
    const classes = useStyles();

    const [welcome, setWelcome] = useState(true);

    const handleClick = () => {
        setWelcome(!welcome);
      };

    return (
        <div className={classes.logo}>
            <img className={classes.logoSm} src={logo} alt="logo" onClick={handleClick}/>
            <p className={classes.nameLogo} >SAN MARTÍN</p>
        </div>
    );
};

export default Logo;