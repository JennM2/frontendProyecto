import Table from '../../table/Table';
import useStyles from './AssignedSubjects.style';
import teacherStyles from '../Teachers.style';
import { useState } from 'react';

const AssignedSubjects = () => {
    const classes = useStyles();
    const teacherClasses = teacherStyles();
    const columns = ['N°', 'Materia', 'Sigla', 'Duración', 'Carrera'];
    const [data, setData] = useState([
        ['1', 'Materia', 'SIGLA', '1 mes', 'Carrera'],
        ['2', 'Materia', 'SIGLA', '1 mes', 'Carrera'],
        ['3', 'Materia', 'SIGLA', '1 mes', 'Carrera'],
        ['4', 'Materia', 'SIGLA', '1 mes', 'Carrera'],

    ]);


    return (
        <div className={teacherClasses.content} >
            <div className={classes.title}>
                <p className={teacherClasses.text}>MATERIAS ASIGNADAS</p>
                <hr className={teacherClasses.lineTitle} />
            </div>
            <div className={classes.tableTeacher}>
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
};

export default AssignedSubjects;