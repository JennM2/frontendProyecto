import { useState } from 'react';
import useStyles from './Subjects.style';
import modalStyles from '../../Modal.style'
import secretariesStyles from '../Secretaries.style' ;
import Button from '../../forms/ButtonSM';
import Table from '../../table/Table';

import addSubject from '../../../../assets/icons/addSubject.svg';
import editSubject from '../../../../assets/icons/edit.svg';
import deleteSubject from '../../../../assets/icons/delete.svg';
import listSubject from '../../../../assets/icons/listSubject.svg';
import alertIcon from '../../../../assets/images/alert.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import deletIconW  from '../../../../assets/icons/deleteW.svg';
import enableIcon from '../../../../assets/icons/enable.svg';
import editIcon from '../../../../assets/icons/editLight.svg';


const Subjects = () => {
    const classes = useStyles();
    const modalClasses = modalStyles();
    const secretariesClasses = secretariesStyles();
    const [isDeleteDialog, setIsDeleteDilog] = useState(false);
    const [idDelete, setIdDelete] = useState(5);
    const [openModalEnableSubject, setOpenModalEnableSubject]= useState(false);
    const [openModalEditSubject, setOpenModalEditSubject ] = useState(false);
    const [editingRow, setEditingRow] = useState(null);
    const [editedId, setEditedId] = useState('');

    const [career, setCareer] = useState('');
    const [subject, setSubject] = useState('');
    const [year, setYear] = useState('');
    const [teacher, setTeacher] = useState('');
    const [schedule, setSchedule] = useState('');
    const [duration, setDuration] = useState('');
    const [enablementDate, setEnablementDate] = useState('');
    const [disablementDate, setDisablementDate] = useState('');

    const columns =['N°', 'Materia', 'Carrera', 'Año', 'Docente', 'Horario', 'Duración', 'Fecha de habilitación', 'Fecha de Finalización','Acción'];
    const [data, setData] = useState( [
        ['1','MMateria1', 'Carrera1','2022','Docente', 'Mañana', '2 meses', '08/02/2022', '08/04/2022', ' '],
        ['2','MMateria2', 'Carrera1','2022','Docente', 'Tarde', '2 meses', '08/02/2022', '08/04/2022', ' '],
        ['3','MMateria3', 'Carrera1','2022','Docente', 'Noche', '2 meses', '08/02/2022', '08/04/2022', ' '],
        ['4','MMateria4', 'Carrera1','2022','Docente', 'Tarde', '2 meses', '08/02/2022', '08/04/2022', ' '],
    ]);

    const options =[
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' },
    ];

    const handleDeleteModal = (id) => {
        setIsDeleteDilog(!isDeleteDialog);
        setIdDelete(id);
    };

    const handleFinalDeletion = () => {
        setData(data.filter(row => (row.slice(1, 2).join(' ') )!== idDelete));
        setIsDeleteDilog(!isDeleteDialog);
    };

    const handleOpenModalEnable = () => {
        setOpenModalEnableSubject(!openModalEnableSubject);
        handleStates();
    };
    const handleOpenModalEditSubject = () => {
        setOpenModalEditSubject(!openModalEditSubject);
        handleStates();
    };
    const handleStates = () => {
        setCareer('');
        setSubject('');
        setYear('');
        setTeacher('');
        setSchedule('');
        setDuration('');
        setEnablementDate('');
        setDisablementDate('');
    };

    const handleSave = () => {
        const newRow = [(data.length+1).toString(),career,subject,year,teacher,schedule,duration,enablementDate,disablementDate,''];
        setData(prevData => [...prevData, newRow]);
        handleOpenModalEnable(false);
        handleStates();

    };
    const handleInputChangeEdit = (id, newValue) => {
        const updatedRow = { ...editingRow, [id]: newValue };
        setEditingRow(updatedRow);
        console.log("aqui");
    };

    const handleEditClick = (rowId) => {
        const row = data[rowId];
        const editingRow = {
            subject: row[1],
            career: row[2],
            year: row[3],
            teacher: row[4],
            schedule: row[5],
            duration: row[6],
            enablementDate: row[7],
            disablementDate: row[8],
        };
        console.log(editingRow);
        setOpenModalEditSubject(true);
        setEditingRow(editingRow);
        setEditedId(row[0]);
    };
    const handleEditSave = () => {
        if (editingRow) {
            const newData = data.map(row => {
                if (row[0] === editedId) {
                    return [
                        row[0],
                        editingRow.subject || row[1],
                        editingRow.career || row[2],
                        editingRow.year || row[3],
                        editingRow.teacher || row[4],
                        editingRow.schedule || row[5],
                        editingRow.duration || row[6],
                        editingRow.enablementDate || row[7],
                        editingRow.disablementDate || row[8],
                        row[9],
                    ];
                }
                return row;
            });
            setData(newData);
            setOpenModalEditSubject(false);
            setEditingRow(null);
        }
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
                            <Button icon={cancelIcon} text="Cancelar" className2={modalClasses.buttonCancel} onClick={handleDeleteModal}/>
                        </div>
                        <div className={modalClasses.buttonAction}>
                            <Button icon={deletIconW} text="Eliminar" className2={modalClasses.buttonDelete} onClick={handleFinalDeletion}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if(openModalEnableSubject){
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titleEnable}>HABILITAR MATERIA</p>
                        <div className={classes.contentEnableSubject}>
                            <div className={classes.contentLeft}>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Carrera:</label>
                                    <select className={classes.select} id="opciones" name="opciones" value={career} onChange={(e) => setCareer(e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Materia:</label>
                                    <select className={classes.select} id="opciones" name="opciones" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Año:</label>
                                    <select className={classes.select} id="opciones" name="opciones" value={year} onChange={(e) => setYear(e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={classes.contentRight}>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="teacher">Docente:</label>
                                    <input className={classes.select} type="text" id="teacher" name="teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)}/>
                                </div>
                                <div className={classes.intoConentRignt}>
                                    <div className={classes.dataEnableInto}>
                                        <label className={classes.labelSelect} htmlFor="opciones">Horario:</label>
                                        <select className={classes.selectInto} id="opciones" name="opciones" value={schedule} onChange={(e) => setSchedule(e.target.value)}>
                                            {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={classes.dataEnableInto}>
                                        <label className={classes.labelSelect} htmlFor="opciones">Duración:</label>
                                        <select className={classes.selectInto} id="opciones" name="opciones" value={duration} onChange={(e) => setDuration(e.target.value)}>
                                            {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        <hr className={classes.lineSubject}/>
                        <div className={classes.contentBottomEnable}>
                            <div className={classes.contentBottom}>
                                <div className={classes.dataEnableBottom}>
                                    <label className={classes.labelSelectBottom} htmlFor="enablementDate">Fecha de habilitación:</label>
                                    <input className={classes.selectInto} type="date" id="enablementDate" name="enablementDate" value={enablementDate} onChange={(e) => setEnablementDate(e.target.value)}/>
                                </div>
                                <div className={classes.dataEnableBottom}>
                                    <label className={classes.labelSelectBottom} htmlFor="disablementDate">Fecha de finalización:</label>
                                    <input className={classes.selectInto} type="date" id="disablementDate" name="disablementDate" value={disablementDate} onChange={(e) => setDisablementDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className={classes.buttonsEnableSubject}>
                                <Button icon={enableIcon} text={"Habilitar"} className={classes.iconButton} className2={classes.buttonEnable} onClick={handleSave}/>
                                <Button icon={cancelIcon} text={"Cancelar"} className={classes.iconButton} className2={classes.buttonCancel} onClick={handleOpenModalEnable}/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }else if(openModalEditSubject){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titleEnable}>EDITAR MATERIA HABILITADA</p>
                        <div className={classes.contentEnableSubject}>
                            <div className={classes.contentLeft}>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="career">Carrera:</label>
                                    <select className={classes.select} id="career" name="career" value={editingRow && editingRow.career} onChange={(e) => handleInputChangeEdit('career', e.target.value)}>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="subject">Materia:</label>
                                    <select className={classes.select} id="subject" name="opciosubjectnes" value={editingRow && editingRow.subject} onChange={(e) => handleInputChangeEdit('subject', e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="year">Año:</label>
                                    <select className={classes.select} id="year" name="year" value={editingRow && editingRow.year} onChange={(e) => handleInputChangeEdit('year', e.target.value)}>
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={classes.contentRight}>
                                <div className={classes.dataEnable}>
                                    <label className={classes.labelSelect} htmlFor="teacher">Docente:</label>
                                    <input className={classes.select} type="text" id="teacher" name="teacher" value={editingRow && editingRow.teacher} onChange={(e) => handleInputChangeEdit('teacher', e.target.value)}/>
                                </div>
                                <div className={classes.intoConentRignt}>
                                    <div className={classes.dataEnableInto}>
                                        <label className={classes.labelSelect} htmlFor="schedule">Horario:</label>
                                        <select className={classes.selectInto} id="schedule" name="schedule" value={editingRow && editingRow.schedule} onChange={(e) => handleInputChangeEdit('schedule', e.target.value)}>
                                            {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={classes.dataEnableInto}>
                                        <label className={classes.labelSelect} htmlFor="duration">Duración:</label>
                                        <select className={classes.selectInto} id="duration" name="duration" value={editingRow && editingRow.duration} onChange={(e) => handleInputChangeEdit('duration', e.target.value)}>
                                            {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        <hr className={classes.lineSubject}/>
                        <div className={classes.contentBottomEnable}>
                            <div className={classes.contentBottom}>
                                <div className={classes.dataEnableBottom}>
                                    <label className={classes.labelSelectBottom} htmlFor="enablementDate">Fecha de habilitación:</label>
                                    <input className={classes.selectInto} type="date" id="enablementDate" name="enablementDate" value={editingRow && editingRow.enablementDate} onChange={(e) => handleInputChangeEdit('enablementDate', e.target.value)}/>
                                </div>
                                <div className={classes.dataEnableBottom}>
                                    <label className={classes.labelSelectBottom} htmlFor="disablementDate">Fecha de finalización:</label>
                                    <input className={classes.selectInto} type="date" id="disablementDate" name="disablementDate" value={editingRow && editingRow.disablementDate} onChange={(e) => handleInputChangeEdit('disablementDate', e.target.value)}/>
                                </div>
                            </div>
                            <div className={classes.buttonsEnableSubject}>
                                <Button icon={editIcon} text={"Editar"} className={classes.iconButton} className2={classes.buttonEnable} onClick={handleEditSave}/>
                                <Button icon={cancelIcon} text={"Cancelar"} className={classes.iconButton} className2={classes.buttonCancel} onClick={handleOpenModalEditSubject}/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }else{
        return(
            <div className={secretariesClasses.content} >
                <div>
                    <p className={secretariesClasses.text}>MATERIAS HABILITADAS</p>
                    <hr className={secretariesClasses.lineTitle} />
                </div>
                <div className={classes.buttonSubject}>
                    <Button icon={addSubject} text={"Habilitar Materia"} className={classes.iconButton} onClick={handleOpenModalEnable}/>
                </div>
                <div className={classes.tableSubject}>
                    <Table columns={columns} data={data} columnIcon={"Acción"} icon={editSubject} icon2={deleteSubject} icon3={listSubject} className={classes.sizeTable} classNameIcon={classes.sizeIcons} onEdit={handleEditClick} start={1} end={2} onDelete={handleDeleteModal} 
                    //onAdd={handleEditClick} 
                    />
                </div>
            </div>
        );
    }



};
export default Subjects;