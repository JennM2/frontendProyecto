import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import useStyles from './Teachers.style';
import NavMenu from '../menu/NavMenu';
import Logo from '../menu/Logo';
import User from '../menu/User';
import Wellcome from'./wellcome/Wellcome';
import ActiveSubjects from './activeSubjects/ActiveSubjects';
import AssignedSubjects from './assignedSubjects/AssignedSubjects';

import userPerfil from '../../../assets/icons/UserPerfil.svg';
import activeSubjects from '../../../assets/icons/subjects.svg';
import closeSession from '../../../assets/icons/closeSessionMenu.svg';
import assignedSubjects from '../../../assets/icons/subjectsMenu.svg';


const Teachers = () => {
    const classes = useStyles();
 
    const [selectedOption, setSelectedOption] = useState();
    
     const options = [
        {
            name: 'Materias Asignadas',
            image: assignedSubjects,
            path: '/assignedSubjects'
          },
         {
           name: 'Materias Activas',
           image: activeSubjects,
           path: '/activeSubjects'
         },
     ];
     const options2 =[
        {
            name: 'Cerrar Sesión',
            image: closeSession,
            path: '/closeSession'
        }
    ];

    return (

        <div>
            <div className={classes.top}>
                <Logo/>
                <User userPerfil = {userPerfil} nameUser={"Docente"}/>
            </div>
            <div className={classes.menu}>
                 <NavMenu  options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} className={classes.optionsTeachers} classNameIcon={classes.IconMenu} />
                <hr className={classes.line}/>
                <NavMenu  options={options2} selectedOption={selectedOption} setSelectedOption={setSelectedOption} className={classes.optionsTeachers} classNameIcon={classes.IconMenu} />
            </div>
            <div className={classes.content}>
                <Routes>
                    <Route path='/' element={<Wellcome />}/>
                    <Route path='/assignedSubjects' element={<AssignedSubjects />}/>
                    <Route path='/activeSubjects' element={<ActiveSubjects />}/>
                </Routes>
                
            </div>
        </div>
        
      );

};
export default Teachers;