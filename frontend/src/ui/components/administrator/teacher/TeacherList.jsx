import { useState } from 'react';
import adminStyles from '../Admin.style';
import useStyles from './Teachers.style'
import modalStyles from '../../Modal.style';
import Search from '../../forms/Search';
import Table from '../../table/Table';
import ButtonSM from '../../forms/ButtonSM';
import Credentials from '../../forms/Credentials';
import DynamicInputs from '../../forms/DynamicInputs';
import listIcon from '../../../../assets/icons/listSubMenu.svg';
import newTeacher from '../../../../assets/icons/newUser.svg';
import editTeacher from '../../../../assets/icons/edit.svg';
import deleteTeacher from '../../../../assets/icons/delete.svg';
import saveIcon from '../../../../assets/icons/save.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import alertIcon from '../../../../assets/images/alert.svg';
import deletIconW from '../../../../assets/icons/deleteW.svg';
import editIconW from '../../../../assets/icons/editLight.svg';

const TeacherList = () => {
    const adminClasses = adminStyles();
    const classes = useStyles();
    const modalClasses = modalStyles();

    const [isModalNewOpen, setIsModalNewOpen] = useState(false);
    const [isModalListOpen, setIsModalListOpen] = useState(false);
    const [isModalAssingOpen, setIsModalAssingOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeleteDialog, setIsDeleteDilog] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [editingRow, setEditingRow] = useState(null);
    const [editedId, setEditedId] = useState('');

    const [assignName, setAssignName] = useState('');
    const [assignSurnameP, setAssignSurnameP] = useState('');
    const [assignSurnameM, setAssignSurnameM] = useState('');
    const [assignId, setAssignId] = useState('');
    const [dataAssignName, setDataAssignName] = useState([]);
    const [dataAssignOriginal, setDataAssignOriginal] = useState([
        ['Materia', '2024', 'Carrera', ''],
        ['Materia', '2024', 'Carrera', ''],
        ['Materia', '2024', 'Carrera', ''],
    ]);

    const [dataModal, setDataModal] = useState([
        ['Fernandez', 'Garcia', 'Juan', 'Carrera', 'Materia', '2024'],
        ['Fernandez', 'Garcia', 'Juan', 'Carrera', 'Materia', '2024'],
        ['Fernandez', 'Garcia', 'Juan', 'Carrera', 'Materia', '2024'],
    ]);
    const [dataAssign, setDataAssign] = useState(dataAssignOriginal);
    const [selectedCareer, setSelectedCareer] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const [surnamePTeacher, setSurnamePTeacher] = useState('');
    const [surnameMTeacher, setSurnameMTeacher] = useState('');
    const [nameTeacher, setNameTeacher] = useState('');
    const [ciTeacher, setCiTeacher] = useState('');
    const [emailTeacher, setEmailTeacher] = useState('');
    const [phoneTeacher, setPhoneTeacher] = useState('');
    const [userTeacher, setUserTeacher] = useState('');
    const [passwordTeacher, setPasswordTeacher] = useState('');



    const columns = ['ID', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo', 'Teléfono', 'Materias', 'Acción'];
    const [data, setData] = useState([
        ['8574', 'Fernandez', 'Garcia', 'Juan', '1241526', 'juan@gmail.com', '78745216', '', ''],
        ['8573', 'Fernande', 'Gracia', 'Jan', '3788455', 'jan@gmail.com', '78745215', '', ''],
        ['8572', 'Fernan', 'Garia', 'Jani', '6354225', 'jani@gmail.com', '78745214', '', ''],
    ]);

    const columnsModal = ['Paterno', 'Materno', 'Nombre', 'Carrera', 'Materia', 'Año'];

    const fieldsC1 = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text', id: 'surnamePTeacher' },
        { label: 'Nombre', placeholder: '', type: '', id: 'nameTeacher' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email', id: 'emailTeacher' },
    ];
    const fieldsC2 = [
        { label: 'Apellido Materno', placeholder: '', type: 'text', id: 'surnameMTeacher' },
        { label: 'CI', placeholder: '', type: 'text', id: 'ciTeacher' },
        { label: 'Teléfono', placeholder: '', type: 'text', id: 'phoneTeacher' },
    ];

    const options = [
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' },
    ];

    const columnsAssign = ['Materia', 'Año', 'Carrera', 'Acción'];


    const filteredData = data.filter(row => row.some(col => col.includes(searchTerm)));

    const handleOpenModalNew = () => {
        setIsModalNewOpen(!isModalNewOpen);
    };
    const handleOpenModalEdit = () => {
        setIsModalEditOpen(!isModalEditOpen);
    };

    const handleOpenModalList = () => {
        setIsModalListOpen(!isModalListOpen);
    };
    const handleCloseModalAssign = () => {
        setDataAssign(dataAssignOriginal);
        setIsModalAssingOpen(!isModalAssingOpen);
    };
    const handleModalAssign = (rowId) => {
        const row = data[rowId];
        setAssignId(row[0]);
        setAssignSurnameP(row[1]);
        setAssignSurnameM(row[2]);
        setAssignName(row[3]);
        setIsModalAssingOpen(!isModalAssingOpen);
    };
    const handleDeleteModal = (id) => {
        setIsDeleteDilog(!isDeleteDialog);
        setIdDelete(id);
    };
    const handleFinalDeletion = () => {
        if (isModalAssingOpen) {
            setDataAssign(dataAssign.filter(row => (row.slice(0, 3).join(' ')) !== idDelete));
            setIsDeleteDilog(!isDeleteDialog);
            console.log("desde el if");
            console.log(idDelete)

        } else {
            setData(data.filter(row => (row.slice(1, 4).join(' ')) !== idDelete));
            setIsDeleteDilog(!isDeleteDialog);
        }
    };
    const handleInputChange = (id, newValue) => {

        switch (id) {
            case 'surnamePTeacher':
                setSurnamePTeacher(newValue);
                break;
            case 'surnameMTeacher':
                setSurnameMTeacher(newValue);
                break;
            case 'nameTeacher':
                setNameTeacher(newValue);
                break;
            case 'emailTeacher':
                setEmailTeacher(newValue);
                break;
            case 'ciTeacher':
                setCiTeacher(newValue);
                break;
            case 'phoneTeacher':
                setPhoneTeacher(newValue);
                break;
            default:
                break;
        }

    };
    const handleInputChangeEdit = (id, newValue) => {
        const updatedRow = { ...editingRow, [id]: newValue };
        setEditingRow(updatedRow);
        console.log("aqui");
    };
    const handleSave = () => {
        const ID = Math.round(Math.random() * 9000);
        const newRow = [ID.toString(), surnamePTeacher, surnameMTeacher, nameTeacher, ciTeacher, emailTeacher, phoneTeacher, '', ''];
        setData(prevData => [...prevData, newRow]);
        handleOpenModalNew(false);
    };
    const handleEditSave = () => {
        if (editingRow) {
            const newData = data.map(row => {
                if (row[0] === editedId) {
                    return [
                        row[0],
                        editingRow.surnamePTeacher || row[1],
                        editingRow.surnameMTeacher || row[2],
                        editingRow.nameTeacher || row[3],
                        editingRow.ciTeacher || row[4],
                        editingRow.emailTeacher || row[5],
                        editingRow.phoneTeacher || row[6],
                        row[7],
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

    const handleEditClick = (rowId) => {
        const row = data[rowId];
        const editingRow = {
            surnamePTeacher: row[1],
            surnameMTeacher: row[2],
            nameTeacher: row[3],
            ciTeacher: row[4],
            emailTeacher: row[5],
            phoneTeacher: row[6],
        };
        setIsModalEditOpen(true);
        setEditingRow(editingRow);
        setEditedId(row[0]);
    };
    const handleAssignSubject = () => {

        if (selectedCareer && selectedSubject && selectedYear) {
            const newSubjectAssignment = [selectedSubject, selectedYear, selectedCareer, ''];
            setDataAssignName([selectedSubject, selectedYear, selectedCareer]);
            setDataAssign(prevData => [...prevData, newSubjectAssignment]);
            setSelectedCareer('');
            setSelectedSubject('');
            setSelectedYear('');
        } else {
            console.error('¡Faltan campos por seleccionar!');
        }
    };
    const handleSaveAssignment = () => {
        const newRow = [assignSurnameP, assignSurnameM, assignName, dataAssignName[0], dataAssignName[1], dataAssignName[2]];
        setDataModal(prevData => [...prevData, newRow]);
        setIsModalAssingOpen(!isModalAssingOpen);
    };

    if (isDeleteDialog) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.containerDialog}>
                    <div className={modalClasses.alert}>
                        <img className={modalClasses.iconAlert} src={alertIcon} alt="alertDelete" />
                    </div>
                    <p className={modalClasses.cuestionAlert}>¿Está seguro de que desea eliminar a <br /> {idDelete}?</p>
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
    } else if (isModalNewOpen) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titlemodalList}>NUEVO DOCENTE</p>
                        <div className={modalClasses.containerInputs}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChange} />
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChange} />
                        </div>
                        <div className={modalClasses.contentButtons}>
                            <Credentials onUserChange={setUserTeacher} onPasswordChange={setPasswordTeacher} />
                            <div className={classes.buttonTeacher}>
                                <div className={classes.buttonS} >
                                    <ButtonSM icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleSave} />
                                </div>
                                <div className={classes.buttonS}>
                                    <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleOpenModalNew} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else if (isModalListOpen) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titlemodalList}>LISTAS DE ASIGNACION</p>
                        <div className={modalClasses.tableModal}>
                            <Table columns={columnsModal} data={dataModal} className={classes.table} className2={classes.tableBody} />
                        </div>
                        <div className={classes.contentButtons}>
                            <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleOpenModalList} />
                        </div>

                    </div>
                </div>
            </>

        );
    } else if (isModalAssingOpen) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titleEnable}>HABILITAR MATERIAS</p>
                        <div className={classes.containerName}>
                            <div className={classes.nameteacher}>
                                <p>{assignName} {assignSurnameP} {assignSurnameM}</p>
                                <p>ID: {assignId}</p>
                            </div>
                        </div>
                        <hr className={classes.lineEnable} />
                        <div className={classes.containerEnable}>
                            <div className={classes.containerAssign}>
                                <p className={classes.subtitleAssign}>ASIGNAR MATERIAS</p>
                                <div className={classes.assign}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Carreras:</label>
                                    <select className={classes.select} id="opciones" name="opciones" value={selectedCareer} onChange={(e) => setSelectedCareer(e.target.value)}>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.assign}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Materias:</label>
                                    <select className={classes.select} id="opciones" name="opciones" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.containerSmall}>
                                    <div className={classes.assignSmall}>
                                        <label className={classes.labelSelect} htmlFor="opciones">Año:</label>
                                        <select className={classes.select} id="opciones" name="opciones" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={classes.buttonContainer}>
                                        <ButtonSM text="Asignar" className2={classes.buttonAssign} onClick={handleAssignSubject} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.containerSubjectAssign}>
                                <p className={classes.subtitleAssign}>MATERIAS ASIGNADAS</p>
                                <Table columns={columnsAssign} data={dataAssign} columnIcon={"Acción"} icon2={deleteTeacher} className={classes.tableSubjects} className2={classes.bodyTable} onDelete={handleDeleteModal} start={0} end={3} />
                                <div className={classes.butonsActions}>

                                    <div className={classes.buttons}>
                                        <ButtonSM icon={saveIcon} text="Guardar" className={classes.iconTeacher} onClick={handleSaveAssignment} />
                                    </div>

                                    <div className={classes.buttons}>
                                        <ButtonSM icon={cancelIcon} text="Cancelar" className={classes.iconTeacher} onClick={handleCloseModalAssign} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );

    } else if (isModalEditOpen) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titlemodalList}>EDITAR DOCENTE</p>
                        <div className={modalClasses.containerInputs}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow} />
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow} />
                        </div>
                        <div className={modalClasses.contentButtons}>
                            <Credentials onUserChange={setUserTeacher} onPasswordChange={setPasswordTeacher} />
                            <div className={classes.buttonTeacher}>
                                <div className={classes.buttonS} >
                                    <ButtonSM icon={editIconW} text="Editar" className={modalClasses.icons} onClick={handleEditSave} />
                                </div>
                                <div className={classes.buttonS}>
                                    <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleOpenModalEdit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <div className={adminClasses.content} >
                <div className={classes.tittleTeacher}>
                    <p className={adminClasses.text}>LISTA DE DOCENTES</p>
                    <hr className={adminClasses.lineTitle} />
                </div>
                <div className={classes.headTeachers}>
                    <Search text={"Buscar"} onSearch={setSearchTerm} />
                    <div className={classes.buttonsTech}>
                        <div>
                            <ButtonSM icon={listIcon} text="Lista de asignación" className={classes.iconTeacher} className2={classes.buttonList} onClick={handleOpenModalList} />
                        </div>
                        <div className={classes.button}>
                            <ButtonSM icon={newTeacher} text="Nuevo" className={classes.iconTeacher} onClick={handleOpenModalNew} />
                        </div>
                    </div>
                </div>
                <div className={classes.tableTch}>
                    <Table columns={columns} data={filteredData} columnIcon={"Acción"} icon={editTeacher} icon2={deleteTeacher} textLink="Asignar" columnAction={"Materias"} onClick={(rowId) => handleModalAssign(rowId)} onDelete={handleDeleteModal} start={1} end={4} onEdit={handleEditClick} />
                </div>
            </div>
        );
    }
};

export default TeacherList;