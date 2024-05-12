import useStyle from './ScheduleSubject.style';
import studentStyle from '../Student.style';
import Table from '../../table/Table';

const ScheduleSubject = () => {
    const classes = useStyle();
    const studentClasses = studentStyle();
    const columns = ['N°', 'Materia', 'Duración', 'Turno', 'Acción'];
    const data = [
        ['1', 'Materia', '1 mes', 'Tarde', ''],
        ['2', 'Materia', '1 mes', 'Tarde', ''],
        ['3', 'Materia', '1 mes', 'Tarde', ''],
    ];

    return (
        <>
            <div className={studentClasses.content} >
                <div className={classes.title}>
                    <p className={studentClasses.text}>PROGRAMAR MATERIAS</p>
                    <hr className={studentClasses.lineTitle} />
                </div>
                <div>
                    <p className={classes.subtitle}>Fecha de programación hasta el 19 de marzo</p>
                    <div className={classes.tableSchedule}>
                        <Table columns={columns} data={data} columnAction={"Acción"} textLink={"Programar"} />
                    </div>
                </div>

            </div>

        </>
    );
};

export default ScheduleSubject;
