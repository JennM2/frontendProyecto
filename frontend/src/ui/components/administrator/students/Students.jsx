import { useState } from 'react';
import adminStyles from '../Admin.style';
import useStyles from './Students.style';
import modalStyles from '../Modal.style';
import Search from '../../forms/Search';
import ButtonSM from '../../forms/ButtonSM';
import Table from '../../table/Table';
import DynamicInputs from '../../forms/DynamicInputs';
import Credentials from '../../forms/Credentials';
import newStudent from '../../../../assets/icons/newUser.svg';
import editStudent from '../../../../assets/icons/edit.svg';
import deleteStudent from '../../../../assets/icons/delete.svg';
import qualification from '../../../../assets/icons/qualification.svg';
import saveIcon from '../../../../assets/icons/save.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import deletIconW from '../../../../assets/icons/deleteW.svg';
import alertIcon from '../../../../assets/images/alert.svg';
import editIconW from '../../../../assets/icons/editLight.svg';
import closeArrow from '../../../../assets/icons/arrow.svg';
import openArrow from '../../../../assets/icons/arrow2.svg';

 const Students = () => {
    const adminClasses = adminStyles();
    const classes = useStyles();
    const modalClasses = modalStyles();

    const [isOpenNew, setIsOpenNew] = useState(false);
    const [isOpenQualification, setIsOpenQualification] = useState(false);
    const [isDeleteDialog, setIsDeleteDilog] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [editingRow, setEditingRow] = useState(null);
    const [editedId, setEditedId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [ enrollmentStudent,setEnrollmentStudent ] = useState('');
    const [ surnamePStudent,setSurnamePStudent ] = useState('');
    const [ surnameMStudent,setSurnameMStudent ] = useState('');
    const [ nameStudent,setNameStudent ] = useState('');
    const [ ciStudent,setCiStudent ] = useState('');
    const [ emailStudent,setEmailStudent ] = useState('');
    const [ phoneStudent,setPhoneStudent ] = useState('');
    const [ careerStudent,setCareerStudent ] = useState('');
    const [ userStudent , setUserStudent ] = useState('');
    const [ passwordStudent, setPasswordStudent ] = useState('');
    
    const [isTableVisible1, setTableVisible1] = useState(false);
    const [isTableVisible2, setTableVisible2] = useState(false);
    const [isTableVisible3, setTableVisible3] = useState(false);
    const [iconTable1Visible, setIconTable1Visible] = useState(false);
    const [iconTable2Visible, setIconTable2Visible] = useState(false);
    const [iconTable3Visible, setIconTable3Visible] = useState(false);

    const toggleTable1 = () => {
        setTableVisible1(!isTableVisible1);
        setTableVisible2(false);
        setTableVisible3(false);
        setIconTable1Visible(!iconTable1Visible);
    };
    const toggleTable2 = () => {
        setTableVisible1(false);
        setTableVisible2(!isTableVisible2);
        setTableVisible3(false);
        setIconTable2Visible(!iconTable2Visible);
    };
    const toggleTable3 = () => {
        setTableVisible1(false);
        setTableVisible2(false);
        setTableVisible3(!isTableVisible3);
        setIconTable3Visible(!iconTable3Visible);
    };
    
    const columnsQualified =['N°', 'Materia', 'P1', 'P2', 'P3', 'Promedio','Examen Final', '2do Turno'];
    const dataQualified = [
        ['1', 'Materia','10','20','30','20','50','51'],
        ['2', 'Materia','20','90','30','30','60','0'],
        ['3', 'Materia','50','70','10','50','70','0']
    ];
    const columns = ['Matrícula', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo','Teléfono','Carrera', 'Acción'];
    const [data, setData] = useState( [
        ['8574', 'Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '75963214','Carrera',''],
        ['8575','Mendez', 'Garnica', 'Juana', '12345678','juana@gmail.com', '74125478','Carrera',''],
        ['8576','Perez', 'Gareca', 'Jan', '54256398','jan@gmail.com', '79654132','Carrera',''],
    ]);


    
    const fieldsC1 = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text', id:'surnamePStudent' },
        { label: 'Nombre',placeholder: '', type: '', id:'nameStudent' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email', id:'emailStudent' },
    ];
    const fieldsC2 = [
        { label: 'Apellido Materno', placeholder: '', type: 'text', id:'surnameMStudent' },
        { label: 'CI', placeholder: '', type: 'text', id:'ciStudent' },
        { label: 'Teléfono', placeholder: '', type: 'text', id:'phoneStudent' },
    ];

    const options =[
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' },
    ];
    const filteredData = data.filter(row => row.some(col => col.includes(searchTerm)));

    const handleNew = () => {
        setIsOpenNew(!isOpenNew);
    };
    const handleQualification = (rowId) => {
        const row = data[rowId];
        setEnrollmentStudent(row[0]); 
        setSurnamePStudent(row[1]);
        setSurnameMStudent(row[2]);
        setNameStudent(row[3]);
        setCareerStudent(row[4]);
        setIsOpenQualification(!isOpenQualification);
    };
    const handleCloseQualification = () => {
        setIsOpenQualification(!isOpenQualification);

    };
    const handleDeleteModal = (id) => {
        setIsDeleteDilog(!isDeleteDialog);
        setIdDelete(id);
    };
    const handleInputChange = (id, newValue) => {
        switch (id) {
            case 'enrollmentStudent':
                setEnrollmentStudent(newValue);
                break;
            case 'surnamePStudent':
                setSurnamePStudent(newValue);
                break;
            case 'surnameMStudent':
                setSurnameMStudent(newValue);
                break;
            case 'nameStudent':
                setNameStudent(newValue);
                break;
            case 'emailStudent':
                setEmailStudent(newValue);
                break;
            case 'ciStudent':
                setCiStudent(newValue);
                break;
            case 'phoneStudent':
                setPhoneStudent(newValue);
                break;
            default:
                break;
        }
    };
    const handleSave = () => {
        const newRow = [enrollmentStudent, surnamePStudent, surnameMStudent, nameStudent,ciStudent, emailStudent, phoneStudent, careerStudent,''];
        console.log(newRow);
        setData(prevData => [...prevData, newRow]);
        setIsOpenNew(false);
    };
    const handleInputChangeEdit = (id, newValue) => {
        const updatedRow = { ...editingRow, [id]: newValue };
        setEditingRow(updatedRow);
    };

    const handleFinalDeletion = () => {
        setData(data.filter(row => (row.slice(1, 4).join(' ') )!== idDelete));
        setIsDeleteDilog(!isDeleteDialog);
    };
    const handleEditClick = (rowId) => {
        const row = data[rowId];
        const editingRow = {
            enrollmentStudent: row[0],
            surnamePStudent: row[1],
            surnameMStudent: row[2],
            nameStudent: row[3],
            ciStudent: row[4],
            emailStudent: row[5],
            phoneStudent: row[6],
            careerStudent: row[7],
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
                        editingRow.enrollmentStudent || row[0],
                        editingRow.surnamePStudent || row[1],
                        editingRow.surnameMStudent || row[2],
                        editingRow.nameStudent || row[3],
                        editingRow.ciStudent || row[4],
                        editingRow.emailStudent || row[5],
                        editingRow.phoneStudent || row[6],
                        editingRow.careerStudent || row[7],
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
    const handleOpenModalEdit = () => {
        setIsModalEditOpen(!isModalEditOpen);
    };



    if(isDeleteDialog){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.containerDialog}>
                    <div className={modalClasses.alert}>
                        <img className={modalClasses.iconAlert} src={alertIcon} alt="alertDelete" />
                    </div>
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
    }else if (isOpenNew){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <div className={classes.modalTop}>
                            <p className={classes.titlemodalList}>NUEVO ESTUDIANTE</p>
                            <div className={classes.enrollment}>
                                <label className={classes.labelStudent} htmlFor="enrollmentStudent">Matrícula:</label>
                                <input className={classes.inputEnrollment} type="text" id="enrollmentStudent" onChange={(e) => handleInputChange('enrollmentStudent', e.target.value)} />
                            </div>
                        </div>
                        <div className={classes.inputsModal}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChange}/>
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChange}/>
                        </div>
                        <div className={classes.modalBottom}>
                            <div className={classes.credentials}>
                                <Credentials onUserChange={setUserStudent} onPasswordChange={setPasswordStudent}/>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.selectContainer}>
                                    <label className={classes.labelSelect} htmlFor="careerStudent">Carreras:</label>
                                    <select className={classes.select} id="careerStudent" name="careerStudent" value={careerStudent} onChange={(e) => setCareerStudent(e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.buttonsModal}>
                                    <div className={classes.buttonStudents} >
                                        <ButtonSM  icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleSave}/>
                                    </div>
                                    <div className={classes.buttonStudents}>
                                        <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleNew}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> 
        );
    }else if(isModalEditOpen){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <div className={classes.modalTop}>
                            <p className={classes.titlemodalList}>EDITAR ESTUDIANTE</p>
                            <div className={classes.enrollment}>
                                <label className={classes.labelStudent} htmlFor="enrollmentStudent">Matrícula:</label>
                                <input className={classes.inputEnrollment} type="text" id="enrollmentStudent" onChange={(e) => handleInputChangeEdit('enrollmentStudent', e.target.value)} value={editingRow && editingRow['enrollmentStudent']} />
                            </div>
                        </div>
                        <div className={classes.inputsModal}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow}/>
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs} onChange={handleInputChangeEdit} values={editingRow}/>
                        </div>
                        <div className={classes.modalBottom}>
                            <div className={classes.credentials}>
                                <Credentials onUserChange={setUserStudent} onPasswordChange={setPasswordStudent}/>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.selectContainer}>
                                    <label className={classes.labelSelect} htmlFor="careerStudent">Carreras:</label>
                                    <select className={classes.select} id="careerStudent" name="careerStudent" value={editingRow && editingRow['careerStudent']} onChange={(e) => handleInputChangeEdit('careerStudent', e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.buttonsModal}>
                                    <div className={classes.buttonStudents} >
                                        <ButtonSM  icon={editIconW} text="Editar" className={modalClasses.icons} onClick={handleEditSave}/>
                                    </div>
                                    <div className={classes.buttonStudents}>
                                        <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleOpenModalEdit}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> 
        );
    }else if (isOpenQualification){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <div className={classes.containerStudent}>
                            <div className={classes.nameStudent}>
                                <p>{nameStudent} <br/> {surnamePStudent} {surnameMStudent}</p>
                                <div className={classes.dataStudent}>
                                    <p>Matrícula: {enrollmentStudent}</p>
                                    <p>Carrera: {careerStudent}</p>
                                </div>
                            </div>
                            <div>
                                <div className={classes.sectionYear}>
                                    <p className={classes.year}>Primer Año</p>
                                    <button className={classes.buttonArrow} onClick={toggleTable1}>
                                        {iconTable1Visible ? (
                                            <img className={classes.iconArrow} src={openArrow} alt="arrow" />
                                            ) : (
                                            <img className={classes.iconArrow} src={closeArrow} alt="arrow" />
                                        )}
                                    </button>
                                </div>
                                <hr className={classes.lineFirst}/>
                                {isTableVisible1 && (
                                    <div className={classes.positionTable}>
                                        <Table columns={columnsQualified} data={dataQualified}  className2={classes.tableQualified} />

                                    </div>
                                )}
                            </div>
                            <div>
                                <div className={classes.sectionYear}>
                                    <p className={classes.year}>Segundo Año</p>
                                    <button className={classes.buttonArrow} onClick={toggleTable2}>
                                        {iconTable2Visible ? (
                                            <img className={classes.iconArrow} src={openArrow} alt="arrow" />
                                            ) : (
                                            <img className={classes.iconArrow} src={closeArrow} alt="arrow" />
                                        )}
                                    </button>
                                </div>
                                <hr className={classes.lineFirst}/>
                                {isTableVisible2 && (
                                    <div className={classes.positionTable}>
                                        <Table columns={columnsQualified} data={dataQualified}  className2={classes.tableQualified} />

                                    </div>
                                )}
                            </div>
                            <div>
                                <div className={classes.sectionYear}>
                                    <p className={classes.year}>Tercer Año</p>
                                    <button className={classes.buttonArrow} onClick={toggleTable3}>
                                        {iconTable3Visible ? (
                                            <img className={classes.iconArrow} src={openArrow} alt="arrow" />
                                            ) : (
                                            <img className={classes.iconArrow} src={closeArrow} alt="arrow" />
                                        )}
                                    </button>
                                </div>
                                <hr className={classes.lineFirst}/>
                                {isTableVisible3 && (
                                    <div className={classes.positionTable}>
                                        <Table columns={columnsQualified} data={dataQualified}  className2={classes.tableQualified} />

                                    </div>
                                )}
                            </div>
                            <div className={classes.buttons}>
                                <ButtonSM className={classes.iconPosition} icon={cancelIcon} text="Cerrar"  onClick={handleCloseQualification} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }else{
        return (
            <div className={adminClasses.content} >
                <div className={classes.title}>
                    <p className={adminClasses.text}>ESTUDIANTES</p>
                    <hr className={adminClasses.lineTitle} />
                </div>
                <div className={classes.studentsTop}>
                    <Search text={"Matrícula"} onSearch={setSearchTerm}/>
                    <div className={classes.buttonNewStudent}>
                        <ButtonSM icon={newStudent} text={"Nuevo"} className={classes.iconStudent} onClick={handleNew}/>
                    </div>
                </div>
                <div className={classes.tableStudentContent}>
                    <Table columns={columns} data={filteredData} icon={editStudent} icon2={deleteStudent} icon3={qualification} columnIcon={"Acción"} className={classes.tableStudents} onDelete={handleDeleteModal} start={1} end={4} onEdit={handleEditClick} onAdd={handleQualification}/>
                </div>
            </div>
        );
    }
  
 };

 export default Students;