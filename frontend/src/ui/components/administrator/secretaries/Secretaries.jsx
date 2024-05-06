import { useState } from 'react';
import useStyles from './Secretaries.style';
import modalStyles from '../Modal.style';
import adminStyles from '../Admin.style';
import Table from '../../table/Table';
import DynamicInputs from '../../forms/DynamicInputs';
import ButtonSM from '../../forms/ButtonSM';
import Credentials from '../../forms/Credentials';
import newSecretary from '../../../../assets/icons/newUser.svg'
import deleteIcon from '../../../../assets/icons/delete.svg';
import saveIcon from '../../../../assets/icons/save.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';
const Secretaries = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();
    const modalClasses = modalStyles();
    const [isClick, setIsClick] = useState(false);

    const handleNewClick = () =>{
        setIsClick(!isClick);
    }

    const columns = ['ID', 'Usuario', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo', 'Acción'];
    const data = [
        ['8574', 'Usuario', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com',''],
        ['8574', 'Usuario', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com',''],
        ['8574', 'Usuario', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com',''],
    ];

    const fieldsC1 = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text' },
        { label: 'Nombre',placeholder: '', type: '' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email' },
    ];
    const fieldsC2 = [
        { label: 'Apellido Materno', placeholder: '', type: 'text' },
        { label: 'CI', placeholder: '', type: 'text' },
        { label: 'Teléfono', placeholder: '', type: 'text' },
    ];
    
    const modalNewSecretary = () => {
        if(!isClick){
            return(
                <div className={adminClasses.content} >
                    <div className={classes.title}>
                        <p className={adminClasses.text}>SECRETARIOS</p>
                        <hr className={adminClasses.lineTitle} />
                    </div>
                    <div className={classes.contentSecretaries}>
                        <div className={classes.buttonSecretaries} onClick={handleNewClick}>
                            <ButtonSM icon={newSecretary} text="Nuevo" className={classes.iconSecretaries} />
                        </div>
                        <div className={classes.tableSecretaries}>
                            <Table columns={columns} data={data} columnIcon={"Acción"} icon={deleteIcon} />
                        </div>
                    </div>
                </div>
            );

        } else{            
            return(
                <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p>NUEVO SECRETARIO</p>
                        <div className={modalClasses.containerInputs}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs}/>
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs}/>
                        </div>
                        <div className={modalClasses.contentButtons}>
                            <Credentials/>
                            <div className={classes.buttonSecretary}>
                                <div className={classes.buttonS} >
                                    <ButtonSM  icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleNewClick}/>
                                </div>
                                <div className={classes.buttonS}>
                                    <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleNewClick}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </>
            );
        }
    };

    return(modalNewSecretary());
};

export default Secretaries;