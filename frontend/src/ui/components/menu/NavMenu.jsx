import { useState } from 'react';
import useStyles from './NavMenu.style';

const Option = ({ name, image, suboptions,onClick }) => {
  const [showSuboptions, setShowSuboptions] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setShowSuboptions(!showSuboptions);
    if(onClick){
      onClick(name);
    }
  };

  return (
    <li className={classes.list} key={name} onClick={handleClick}>
        <div className={classes.info}> 
            <img className={classes.icon} src={image} alt={name} />
            <p className={classes.label}>{name}</p>
        </div>
      {showSuboptions && suboptions && suboptions.length > 0 && (
        <NavMenu options={suboptions} className= {classes.subMenu} onClick={onClick} />
      )}
    </li>
  );
};

const NavMenu = ({ options, className, onClick }) => {
    const classes = useStyles();
    return(
        <div className={className || classes.containerMenu}>
          <ul className={classes.options}>{options.map((option) => <Option {...option} onClick={onClick} />)}</ul>
        </div>
    ); 
    
};

export default NavMenu;
