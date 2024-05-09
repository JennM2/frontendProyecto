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

    const [number, setNumber] = useState('5');
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
        setOpenModalEditSubject(!openModalEnableSubject);
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
        const newRow = [number,career,subject,year,teacher,schedule,duration,enablementDate,disablementDate,''];
        setData(prevData => [...prevData, newRow]);
        handleOpenModalEnable(false);
        handleStates();
        setNumber((parseInt(number)+1).toString());

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
                    <Table columns={columns} data={data} columnIcon={"Acción"} icon={editSubject} icon2={deleteSubject} icon3={listSubject} className={classes.sizeTable} classNameIcon={classes.sizeIcons} onEdit={handleOpenModalEditSubject} start={1} end={2} onDelete={handleDeleteModal}
                    //     onAdd={1}
                    />
                </div>
            </div>
        );
    }



};
export default Subjects;