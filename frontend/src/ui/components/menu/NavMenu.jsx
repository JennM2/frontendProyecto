import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './NavMenu.style';

const NavMenu = ({ options, selectedOption, setSelectedOption,className, classNameIcon }) => {
  const classes = useStyles();
  const [selectedSubOption, setSelectedSubOption] = useState('Docentes')
  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setSelectedSubOption('Docentes');
  };

  return (
    <ul className={className || classes.options}>
      {options.map(option => (
        <li className={classes.list} key={option.name}> 
          <Link to={option.path} className={classes.link}>
            <button className={classes.buttonOption} onClick={() => handleOptionClick(option)} >             
              <div className={`${classes.info} ${selectedOption === option.name && classes.selectedInfo}`}> 
                <img className={classNameIcon || classes.icon} src={option.image} alt={option.name} />
                {option.name}
              </div>
            </button>
          </Link>
          {option.name === selectedOption && option.suboptions && (
            <ul className={classes.subMenu}>
              {option.suboptions.map(suboption => (
                <li className={classes.listSub} key={suboption.name}>
                  <Link to={suboption.path} className={classes.link}>
                    <button className={classes.buttonSuboption} onClick={() => setSelectedSubOption(suboption.nameLabel)}>
                      <div className={`${classes.infoSuboption} ${selectedSubOption === suboption.nameLabel && classes.selectedInfoSub}`}>
                          <img className={classes.icon} src={suboption.image} alt={suboption.name} />
                          {suboption.name}
                      </div>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
