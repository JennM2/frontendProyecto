//import { useState } from 'react';
import useStyles from './Admin.style';
import NavMenu from '../menu/NavMenu';
import Logo from '../menu/Logo';
import User from '../menu/User';
import perfil from '../../../assets/icons/perfilMenu.svg';
import users from '../../../assets/icons/usersMenu.svg';
import secretaries from '../../../assets/icons/secretaryMenu.svg';
import teachers from '../../../assets/icons/teacherMenu.svg';
import list from '../../../assets/icons/listSubMenu.svg';
import evaluation from '../../../assets/icons/evaluationMenu.svg';
import students from '../../../assets/icons/studentsMenu.svg';
import backups from '../../../assets/icons/backupMenu.svg';
import closeSession from '../../../assets/icons/closeSessionMenu.svg';

const Admin = () => {
   const classes = useStyles();

   
    const options = [
        {
          name: 'Perfil',
          image: perfil,
        },
        {
            name: 'Usuarios',
            image: users,
        },
        {
            name: 'Secretarios',
            image: secretaries,
        },
        {
            name: 'Docentes',
            image: teachers,
            suboptions: [
                {
                    name: 'Lista',
                    image: list
                },
                {
                    name: 'Evaluación',
                    image: evaluation
                },
            ]
        },
    ];
    
    
    const options2 =[
        {
            name: 'Estudiantes',
            image: students,
        }
    ];
    
    const options3 = [ 
        {
            name: 'Backups',
            image: backups,
        },
        {
            name: 'Cerrar Sesión',
            image: closeSession,
        }
    ];


    
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Logo/>
                <User/>
            </div>
            <div className={classes.menu}>
                <NavMenu  options={options} />
                <hr className={classes.line}/>
                <NavMenu  options={options2}  />
                <hr className={classes.line}/>
                <NavMenu  options={options3} />
            </div>
            <div className={classes.container}>
                
            </div>
        </div>
        
      );

};
export default Admin;