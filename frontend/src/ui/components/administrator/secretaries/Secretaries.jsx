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
import alertIcon from '../../../../assets/images/alert.svg';
import deletIconW from '../../../../assets/icons/deleteW.svg';
import editIcon from '../../../../assets/icons/edit.svg';
import editIconW from '../../../../assets/icons/editLight.svg';

const Secretaries = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();
    const modalClasses = modalStyles();
    const [isClick, setIsClick] = useState(false);
    const [isDeleteDialog, setIsDeleteDilog] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [editingRow, setEditingRow] = useState(null);
    const [editedId, setEditedId] = useState('');

    const [surnamePaternalSecretary, setSurnamePaternalSecretary] = useState('');
    const [surnameMaternalSecretary, setSurnameMaternalSecretary] = useState('');
    const [nameSecretary, setNameSecretary] = useState('');
    const [emailSecretary, setEmailSecretary] = useState('');
    const [ciSecretary, setCiSecreatry] = useState('');
    const [phoneSecretary, setPhoneSecretary] = useState('');
    const [userSecretary, setUserSecretary] = useState('');
    const [passwordSecretary, setPasswordSecretary] = useState('');

    const handleNewClick = () =>{
        setIsClick(!isClick);
    }

    const handleInputChange = (id, newValue) => {
        switch (id) {
            case 'surnamePaternalSecretary':
                setSurnamePaternalSecretary(newValue);
            break;
            case 'surnameMaternalSecretary':
                setSurnameMaternalSecretary(newValue);
            break;
            case 'nameSecretary':
                setNameSecretary(newValue);
            break;
            case 'emailSecretary':
                setEmailSecretary(newValue);
            break;
            case 'ciSecretary':
                setCiSecreatry(newValue);
            break;
            case 'phoneSecretary':
                setPhoneSecretary(newValue);
            break;
          default:
            break;
        }
    };
    const handleInputChangeEdit = (id, newValue) => {
        const updatedRow = { ...editingRow, [id]: newValue };
        setEditingRow(updatedRow);
    };
    const handleSave = () => {
        const ID = Math.round(Math.random()*9000);
        const newRow = [ID.toString(),userSecretary, surnamePaternalSecretary, surnameMaternalSecretary, nameSecretary,ciSecretary,     emailSecretary, phoneSecretary,''];
        setData(prevData => [...prevData, newRow]);
        setIsClick(false);
      };

    const handleDeleteModal = (id) => {
        setIsDeleteDilog(!isDeleteDialog);
        setIdDelete(id);
    };
    const handleFinalDeletion = () => {
        setData(data.filter(row => (row.slice(2, 5).join(' ') )!== idDelete));
        setIsDeleteDilog(!isDeleteDialog);
    };
    const handleOpenModalEdit = () => {
        setIsModalEditOpen(!isModalEditOpen);
    };
    const handleEditClick = (rowId) => {
        const row = data[rowId];
        const editingRow = {
            surnamePaternalSecretary: row[2],
            surnameMaternalSecretary: row[3],
            nameSecretary: row[4],
            ciSecretary: row[5],
            emailSecretary: row[6],
            phoneSecretary: row[7],
        };
        setIsModalEditOpen(true);
        setEditingRow(editingRow);
        setEditedId(row[0]);
    };
    const handleEditSave = () => {
        if (editingRow) {
            const newData = data.map(row => {
                if (row[0] === editedId) {
                    return [
                        row[0],
                        row[1],
                        editingRow.surnamePaternalSecretary || row[2],
                        editingRow.surnameMaternalSecretary || row[3],
                        editingRow.nameSecretary || row[4],
                        editingRow.ciSecretary || row[5],
                        editingRow.emailSecretary || row[6],
                        editingRow.phoneSecretary || row[7],
                        row[8],

                    ];
                }
                return row;
            });
            setData(newData);
            setIsModalEditOpen(false);
            setEditingRow(null);
        }
    };
    
    const columns = ['ID', 'Usuario', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo', 'Teléfono','Acción'];
    const [data, setData] = useState([
        ['8574', 'Usuario', 'Fernandez', 'Garcia', 'Juan', '12345678', 'juan@gmail.com','78745262',''],
        ['8573', 'Usuario', 'Garcia', 'Marquez', 'Juana', '910111213', 'juana@gmail.com','78745263',''],
        ['8572', 'Usuario', 'Marquez', 'Juares', 'Juanito', '14151617', 'juanito@gmail.com','78745265',''],
    ]);

    const fieldsC1 = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text', id:'surnamePaternalSecretary' },
        { label: 'Nombre',placeholder: '', type: '', id:'nameSecretary' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email', id:'emailSecretary' },
    ];
    const fieldsC2 = [
        { label: 'Apellido Materno', placeholder: '', type: 'text', id:'surnameMaternalSecretary' },
        { label: 'CI', placeholder: '', type: 'text', id:'ciSecretary' },
        { label: 'Teléfono', placeholder: '', type: 'text', id:'phoneSecretary' },
    ];
    

    if(isClick){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p>NUEVO SECRETARIO</p>
                        <div className={modalClasses.containerInputs}>
                        <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChange} />
                        <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChange} />

                        </div>
                        <div className={modalClasses.contentButtons}>
                            <Credentials onUserChange={setUserSecretary} onPasswordChange={setPasswordSecretary}/>
                            <div className={classes.buttonSecretary}>
                                <div className={classes.buttonS} >
                                    <ButtonSM  icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleSave}/>
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
    }else if(isDeleteDialog){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.containerDialog}>
                    <img className={modalClasses.iconAlert} src={alertIcon} alt="alertDelete" />
                    <p className={modalClasses.cuestionAlert}>¿Está seguro de que desea eliminar a <br/> {idDelete}?</p>
                    <div className={modalClasses.containerButtons}>
                        <div className={modalClasses.buttonAction}>
                            <ButtonSM icon={cancelIcon} text="Cancelar" className2={modalClasses.buttonCancel} onClick={handleDeleteModal}/>
                        </div>
                        <div className={modalClasses.buttonAction}>
                            <ButtonSM icon={deletIconW} text="Eliminar" className2={modalClasses.buttonDelete} onClick={handleFinalDeletion}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if (isModalEditOpen){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p>EDITAR SECRETARIO</p>
                        <div className={modalClasses.containerInputs}>
                        <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow}/>
                        <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow}/>

                        </div>
                        <div className={modalClasses.contentButtons}>
                            <Credentials onUserChange={setUserSecretary} onPasswordChange={setPasswordSecretary}/>
                            <div className={classes.buttonSecretary}>
                                <div className={classes.buttonS} >
                                    <ButtonSM  icon={editIconW} text="Editar" className={modalClasses.icons} onClick={handleEditSave} />
                                </div>
                                <div className={classes.buttonS}>
                                    <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleOpenModalEdit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else{            
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
                        <Table columns={columns} data={data} columnIcon={"Acción"} icon={editIcon} icon2={deleteIcon} onDelete={handleDeleteModal} start={2} end={5} onEdit={handleEditClick}/>
                    </div>
                </div>
            </div>
        );
    }


};

export default Secretaries;