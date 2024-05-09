import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import useStyles from './Secretaries.style';
import NavMenu from '../menu/NavMenu';
import Logo from '../menu/Logo';
import User from '../menu/User';
import Wellcome from './wellcome/Wellcome';
import Subjects from './subjects/Subjects';
import Payments from './payments/Payments';
import Notifications from './notifications/Notifications';
import subjects from '../../../assets/icons/subjectsMenu.svg'
import payments from '../../../assets/icons/payMenu.svg';
import notifications from '../../../assets/icons/notificationsMenu.svg'
import closeSession from '../../../assets/icons/closeSessionMenu.svg'
import userPerfil from '../../../assets/icons/UserPerfil.svg';



const Secretaries = () => {
   const classes = useStyles();

   const [selectedOption, setSelectedOption] = useState();
   
    const options = [
        {
          name: 'Materias',
          image: subjects,
          path: '/subjects'
        },
        {
            name: 'Pagos',
            image: payments,
            path: '/payments'
        },
        {
            name: 'Notificaciones',
            image: notifications,
            path: '/notifications'
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
                <User userPerfil = {userPerfil} nameUser={"Secretario"}/>
            </div>
            <div className={classes.menu}>
                 <NavMenu  options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <hr className={classes.line}/>
                <NavMenu  options={options2} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
            <div className={classes.content}>
                <Routes>
                    <Route path='/' element={<Wellcome />}/>
                    <Route path='/subjects' element={<Subjects />}/>
                    <Route path='/payments' element={<Payments />}/>
                    <Route path='/notifications' element={<Notifications />}/>          
                </Routes>
            </div>
        </div>
        
      );

};
export default Secretaries;