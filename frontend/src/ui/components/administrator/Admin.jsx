//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useStyles from './Admin.style';
import NavMenu from '../menu/NavMenu';
import Logo from '../menu/Logo';
import User from '../menu/User';
import Perfil from './perfil/Perfil';
import Users from './users/Users';
import Wellcome from './wellcome/Wellcome';
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
          path: '/perfil'
        },
        {
            name: 'Usuarios',
            image: users,
            path: '/users'
        },
        {
            name: 'Secretarios',
            image: secretaries,
            path: '/secretaries'
        },
        {
            name: 'Docentes',
            image: teachers,
            path : '/teachers',
            suboptions: [
                {
                    name: 'Lista',
                    image: list,
                    path: '/list'
                },
                {
                    name: 'Evaluación',
                    image: evaluation,
                    path: '/evaluation'
                },
            ]
        },
    ];
    
    
    const options2 =[
        {
            name: 'Estudiantes',
            image: students,
            path: '/students'
        }
    ];
    
    const options3 = [ 
        {
            name: 'Backups',
            image: backups,
            path: '/backups'
        },
        {
            name: 'Cerrar Sesión',
            image: closeSession,
            path : '/closeSession'
        }
    ];


    
    return (

        <div>
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
            <div className={classes.content}>
                <Routes>
                    <Route path='/' element={<Wellcome />}/>
                    <Route path='/perfil' element={<Perfil />}/>
                    <Route path='/users' element={<Users />}/>
                </Routes>
            </div>
        </div>
        
      );

};
export default Admin;