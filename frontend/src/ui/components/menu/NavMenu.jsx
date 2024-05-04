import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './NavMenu.style';

const Option = ({ name, image, suboptions, onClick, path }) => {
  const [showSuboptions, setShowSuboptions] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    if(onClick){
      onClick(name);
    }
    setShowSuboptions(!showSuboptions);
  };

  return (
    <li className={classes.list} key={name} onClick={handleClick}>
      <Link to={path || '/'} className={classes.link}>
        <div className={classes.info}> 
            <img className={classes.icon} src={image} alt={name} />
            <p className={classes.label}>{name}</p>
        </div>
      </Link>
      {showSuboptions && suboptions && suboptions.length > 0 && (
        <NavMenu options={suboptions} className= {classes.subMenu} onClick={onClick} />
      )}
    </li>
  );
};

const NavMenu = ({ options, className, onClick }) => {
    const classes = useStyles();
    const [activeOption, setActiveOption] = useState(null);
    const handleClick = (name) => {
        setActiveOption(name);
    };
    return(
        <div className={className || classes.containerMenu}>
          <ul className={classes.options}>{options.map((option) => <Option {...option} onClick={handleClick} showSuboptions={option.name === activeOption} />)}</ul>
        </div>
    ); 
};

export default NavMenu;
