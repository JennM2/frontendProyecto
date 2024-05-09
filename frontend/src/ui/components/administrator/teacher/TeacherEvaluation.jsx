import { useState } from 'react';
import adminStyles from '../Admin.style';
import useStyles from './Teachers.style';
import modalStyles from '../../Modal.style';
import Table from '../../table/Table';
import ButtonSM from '../../forms/ButtonSM';
import closeIcon from '../../../../assets/icons/cancel.svg';


const TeacherEvaluation = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();
    const modalClasses = modalStyles();
    const [isOpenDetail, setIsOpenDetail]= useState();

    const handleModalDetails = () => {
        setIsOpenDetail(!isOpenDetail);
    };

    const columns = ['N°', 'Paterno', 'Materno', 'Nombre', 'Materia', 'Correo','Teléfono', 'Acción'];
    const data = [
        ['8574', 'Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216',''],
        ['8574','Fernandez', 'Garcia', 'Juan', '15215425','juan@gmail.com', '78745216',''],
    ];

    
    const columnsModal = ['N°', 'Aspecto 1', 'Aspecto 2', 'Aspecto 3', 'Aspecto 4','Puntaje'];
    const dataModal = [
        ['1', 'a1', 'a2', 'a3','a4', '24'],
        ['2', 'a1', 'a2', 'a3','a4', '24'],
        ['3', 'a1', 'a2', 'a3','a4', '24'],
    ];

    if(isOpenDetail){
        return(
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titleEnable}>HABILITAR MATERIAS</p>
                        <div className={classes.containerName}>
                            <div className={classes.nameteacher}>
                                <p>Ingenieria de sistemas</p>
                                <p>Juan Garcia Fernandez</p>
                                <p>27 - 04 - 2024</p>
                            </div>
                        </div>
                            <hr className={classes.lineDetail}/>
                            <div className={classes.containerTableDetail}>
                                <Table columns={columnsModal} data={dataModal} className={classes.tableDetail} className2={classes.bodyTableDetail}/>
                            </div>
                            <div className={classes.buttonClose}>
                                <ButtonSM icon={closeIcon} text= "Cerrar" className={classes.iconTeacher} onClick={handleModalDetails}/>
                            </div>


                    </div>
                </div>
            </>
        );
    }else{
        return(
            <div className={adminClasses.content} >
                <div className={classes.tittleTeacher}>
                    <p className={adminClasses.text}>EVALUACIÓN DE DOCENTES</p>
                    <hr className={adminClasses.lineTitle} />
                </div>
                <div className={classes.subtitle}>
                    <p>Materias programadas - Julio</p>
                </div>
                <div className={classes.tableEvaluation}>
                    <Table columns={columns} data={data} textLink={"Detalles"} columnAction={"Acción"} onClick={handleModalDetails}/>
                </div>
            </div>
        );
    };
};

export default TeacherEvaluation;