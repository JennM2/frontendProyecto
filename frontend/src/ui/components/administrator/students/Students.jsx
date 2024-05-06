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


 const Students = () => {
    const adminClasses = adminStyles();
    const classes = useStyles();
    const modalClasses = modalStyles();

    const [isOpenNew, setIsOpenNew] = useState(false);
    const [isOpenQualification, setIsOpenQualification] = useState(false);


    const handleNew = () => {
        setIsOpenNew(!isOpenNew);
    };
    const handleQualification = () => {
        setIsOpenQualification(!isOpenQualification);
    };

    const columns = ['Matrícula', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo','Teléfono','Carrera', 'Acción'];
    const data = [
        ['8574', 'Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','Carrera',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','Carrera',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216','Carrera',''],
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

    if (isOpenNew){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <div className={classes.modalTop}>
                            <p className={classes.titlemodalList}>NUEVO ESTUDIANTE</p>
                            <div className={classes.enrollment}>
                                <label className={classes.labelStudent} htmlFor="enrollment">Matrícula:</label>
                                <input className={classes.inputEnrollment} type="text" id="enrollment" />
                            </div>
                        </div>
                        <div className={classes.inputsModal}>
                            <DynamicInputs fields={fieldsC1} className={modalClasses.inputs}/>
                            <DynamicInputs fields={fieldsC2} className={modalClasses.inputs}/>
                        </div>
                        <div className={classes.modalBottom}>
                            <div className={classes.credentials}>
                                <Credentials/>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.selectContainer}>
                                    <label className={classes.labelSelect} htmlFor="opciones">Carreras:</label>
                                    <select className={classes.select} id="opciones" name="opciones">
                                        {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={classes.buttonsModal}>
                                    <div className={classes.buttonStudents} >
                                        <ButtonSM  icon={saveIcon} text="Guardar" className={modalClasses.icons} onClick={handleNew}/>
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
    }else{
        return (
            <div className={adminClasses.content} >
                <div className={classes.title}>
                    <p className={adminClasses.text}>ESTUDIANTES</p>
                    <hr className={adminClasses.lineTitle} />
                </div>
                <div className={classes.studentsTop}>
                    <Search text={"Matrícula"}/>
                    <div className={classes.buttonNewStudent}>
                        <ButtonSM icon={newStudent} text={"Nuevo"} className={classes.iconStudent} onClick={handleNew}/>
                    </div>
                </div>
                <div className={classes.tableStudentContent}>
                    <Table columns={columns} data={data} icon={editStudent} icon2={deleteStudent} icon3={qualification} columnIcon={"Acción"} className={classes.tableStudents} />
                </div>
            </div>
        );
    }
  
 };

 export default Students;