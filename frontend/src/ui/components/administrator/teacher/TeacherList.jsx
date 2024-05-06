import { useState } from 'react';
import adminStyles from '../Admin.style';
import useStyles from './Teachers.style'
import modalStyles from '../Modal.style';
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

const TeacherList = ( ) => {
    const adminClasses = adminStyles();
    const classes =  useStyles();
    const modalClasses = modalStyles();

    const [isModalNewOpen, setIsModalNewOpen] = useState(false);
    const [isModalListOpen, setIsModalListOpen] = useState(false);
    const [isModalAssingOpen, setIsModalAssingOpen] = useState(false);


    const handleOpenModalNew = () => {
        setIsModalNewOpen(true);
    };

    const handleCloseModalNew = () => {
        setIsModalNewOpen(false);
    };

    const handleOpenModalList = () => {
        setIsModalListOpen(true);
    };

    const handleCloseModalList = () => {
        setIsModalListOpen(false);
    };
    const handleModalAssign = () => {
        setIsModalAssingOpen(!isModalAssingOpen);
    };

    const columns = ['ID', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo','Teléfono','Materias', 'Acción'];
    const data = [
        ['8574', 'Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','',''],
    ];

    const columnsModal = ['Paterno', 'Materno', 'Nombre', 'Carrera', 'Materia','Año'];
    const dataModal = [
        ['Fernandez', 'Garcia', 'Juan', 'Carrera','Materia', '2024'],
        ['Fernandez', 'Garcia', 'Juan', 'Carrera','Materia', '2024'],
        ['Fernandez', 'Garcia', 'Juan', 'Carrera','Materia', '2024'],
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

    const options =[
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' },
    ];

    
    const columnsAssign = ['Materia','Año','Carrera', 'Acción'];
    const dataAssign = [
        ['Materia', '2024', 'Carrera', ''],
        ['Materia','2024', 'Carrera', ''],
        ['Materia','2024', 'Carrera', ''],
    ];

    const modalTeacher = () =>{

        if(isModalNewOpen){
            return(
                <>
                    <div className={modalClasses.under}></div>
                    <div className={modalClasses.container}>
                        <div className={modalClasses.content}>
                            <p className={classes.titlemodalList}>NUEVO DOCENTE</p>
                            <div className={modalClasses.containerInputs}>
                                <DynamicInputs fields={fieldsC1} className={modalClasses.inputs}/>
                                <DynamicInputs fields={fieldsC2} className={modalClasses.inputs}/>
                            </div>
                            <div className={modalClasses.contentButtons}>
                                <Credentials/>
                                <div className={classes.buttonTeacher}>
                                    <div className={classes.buttonS} >
                                        <ButtonSM  icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleCloseModalNew}/>
                                    </div>
                                    <div className={classes.buttonS}>
                                        <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleCloseModalNew}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else if(isModalListOpen){
            return(
                <>
                    <div className={modalClasses.under}></div>
                    <div className={modalClasses.container}>
                        <div className={modalClasses.content}>
                            <p className={classes.titlemodalList}>LISTAS DE ASIGNACION</p>
                            <div className={modalClasses.tableModal}>
                                <Table columns={columnsModal} data={dataModal}  className={classes.table} className2={classes.tableBody} />
                            </div>
                            <div className={classes.contentButtons}>
                                <ButtonSM icon={cancelIcon} text="Cancelar" className={modalClasses.icons} onClick={handleCloseModalList}/>
                            </div>
                            
                        </div>
                    </div>
                </>

            );
        }else if(isModalAssingOpen){
            return(
                <>
                    <div className={modalClasses.under}></div>
                    <div className={modalClasses.container}>
                        <div className={modalClasses.content}>
                            <p className={classes.titleEnable}>HABILITAR MATERIAS</p>
                            <div className={classes.containerName}>
                                <div className={classes.nameteacher}>
                                    <p>Juan Garcia Fernandez</p>
                                    <p>ID: 8574</p>
                                </div>
                            </div>
                            <hr className={classes.lineEnable}/>
                            <div className={classes.containerEnable}>
                                <div className={classes.containerAssign}>
                                    <p>ASIGNAR MATERIAS</p>
                                    <div className={classes.assign}>
                                        <label className={classes.labelSelect} htmlFor="opciones">Carreras:</label>
                                        <select className={classes.select} id="opciones" name="opciones">
                                            {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={classes.assign}>
                                        <label className={classes.labelSelect} htmlFor="opciones">Materias:</label>
                                        <select className={classes.select} id="opciones" name="opciones">
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
                                            <select className={classes.select} id="opciones" name="opciones">
                                                {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={classes.buttonContainer}>
                                            <ButtonSM text="Asignar" className2={classes.buttonAssign}  />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.containerSubjectAssign}>
                                    <p>MATERIAS ASIGNADAS</p>
                                    <Table columns={columnsAssign} data={dataAssign} columnIcon={"Acción"} icon={deleteTeacher} className={classes.tableSubjects} className2={classes.bodyTable}/>
                                    <div className={classes.butonsActions}>

                                        <div className={classes.buttons}>
                                            <ButtonSM icon={saveIcon} text="Guardar"  className={classes.iconTeacher} onClick={handleModalAssign}/>
                                        </div>
                                        
                                        <div className={classes.buttons}>
                                            <ButtonSM icon={cancelIcon} text="Cancelar" className={classes.iconTeacher}  onClick={handleModalAssign}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            );
            
        }else{
            return(
                <div className={adminClasses.content} >
                    <div className={classes.tittleTeacher}>
                        <p className={adminClasses.text}>LISTA DE DOCENTES</p>
                        <hr className={adminClasses.lineTitle} />
                    </div>
                    <div className={classes.headTeachers}>
                        <Search text={"Buscar"}/>
                        <div className={classes.buttonsTech}>
                            <div>
                                <ButtonSM icon = {listIcon} text= "Lista de asignación" className={classes.iconTeacher} className2={classes.buttonList} onClick={handleOpenModalList}/>
                            </div>
                            <div className={classes.button}>
                                <ButtonSM icon = {newTeacher} text= "Nuevo" className={classes.iconTeacher} onClick={handleOpenModalNew}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.tableTch}>
                        <Table columns={columns} data={data} columnIcon={"Acción"}   icon={editTeacher}  icon2={deleteTeacher} textLink="Asignar" columnAction={"Materias"}  onClick={handleModalAssign}  />           
                    </div>
                </div>
            );
        }
    }

    return (modalTeacher());
};

export default TeacherList;