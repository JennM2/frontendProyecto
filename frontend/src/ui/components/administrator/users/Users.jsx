import { useState } from 'react';
import useStyles from './Users.style';
import modalStyles from '../../Modal.style';
import adminStyles from '../Admin.style';
import Table from '../../table/Table';
import Search from '../../forms/Search';
import ButtonSM from '../../forms/ButtonSM';
import deletIcon from '../../../../assets/icons/delete.svg';
import deletIconW from '../../../../assets/icons/deleteW.svg';
import alertIcon from '../../../../assets/images/alert.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';

const Users = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();
    const modalClasses = modalStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeleteDialog, setIsDeleteDilog] = useState(false);
    const [idDelete, setIdDelete] = useState('');

    const columns = ['ID', 'Usuario', 'Rol', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo', 'Teléfono', 'Acción'];
    const [data, setData] = useState([
        ['8574', 'Usuario', 'Docente', 'Fernandez', 'Garcia', 'Juan', '12345678', 'juan@gmail.com', '78745744', ''],
        ['8573', 'Usuario', 'Docente', 'Garcia', 'Rivera', 'Juana', '91011112', 'juana@gmail.com', '78745743', ''],
        ['8572', 'Usuario', 'Docente', 'Rivera', 'Martinez', 'Padro', '13141516', 'pedro@gmail.com', '78745742', ''],
    ]);

    const filteredData = data.filter(row => row.some(col => col.includes(searchTerm)));

    const handleDeleteModal = (id) => {
        setIsDeleteDilog(!isDeleteDialog);
        setIdDelete(id);
    };
    const handleFinalDeletion = () => {
        setData(data.filter(row => (row.slice(3, 6).join(' ')) !== idDelete));
        setIsDeleteDilog(!isDeleteDialog);
    };

    if (isDeleteDialog) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.containerDialog}>
                    <div className={modalClasses.alert}>
                        <img className={modalClasses.iconAlert} src={alertIcon} alt="alertDelete" />
                    </div>
                    <p className={modalClasses.cuestionAlert}>¿Está seguro de que desea eliminar al usuario <br /> {idDelete}?</p>
                    <div className={modalClasses.containerButtons}>
                        <div className={modalClasses.buttonAction}>
                            <ButtonSM icon={cancelIcon} text="Cancelar" className2={modalClasses.buttonCancel} onClick={handleDeleteModal} />
                        </div>
                        <div className={modalClasses.buttonAction}>
                            <ButtonSM icon={deletIconW} text="Eliminar" className2={modalClasses.buttonDelete} onClick={handleFinalDeletion} />
                        </div>
                    </div>
                </div>
            </>
        );

    } else {
        return (
            <div className={adminClasses.content} >
                <div className={classes.title}>
                    <p className={adminClasses.text}>USUARIOS</p>
                    <hr className={adminClasses.lineTitle} />
                </div>
                <div className={classes.contentUsers}>
                    <div className={classes.searchUsers}>
                        <Search text={"Buscar"} onSearch={setSearchTerm} />
                    </div>
                    <div className={classes.tableUsers}>

                        <Table columns={columns} data={filteredData} columnIcon={"Acción"} icon2={deletIcon} onDelete={handleDeleteModal} start={3} end={6} />
                    </div>
                </div>
            </div>
        );
    }

};

export default Users;