import { useState } from 'react';
import useStyles from './NavMenu.style';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoSmsmall.svg';

const Logo = () => {
    const classes = useStyles();

    const [welcome, setWelcome] = useState(true);

    const handleClick = () => {
        setWelcome(!welcome);
      };

    return (
        <Link to='/wellcome' className={classes.link}>
            <div className={classes.logo}>
                <img className={classes.logoSm} src={logo} alt="logo" onClick={handleClick}/>
                <p className={classes.nameLogo} >SAN MARTÍN</p>
            </div>
        </Link>
    );
};

export default Logo;