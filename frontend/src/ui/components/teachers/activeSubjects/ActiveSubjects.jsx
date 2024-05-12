import { useState } from 'react';
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import 'jspdf-autotable';
import useStyles from './ActiveSubjects.style';
import subjectsStyles from '../Teachers.style';
import modalStyles from '../../Modal.style'
import TableEdit from '../../table/TableEdit';
import Table from '../../table/Table';
import Button from '../../forms/ButtonSM';
import logo from '../../../../assets/images/logoSMpdf.png';
import poppins from '../../../../assets/fonts/Poppins-Regular.ttf';
import list from '../../../../assets/icons/generatelist.svg'
import qualification from '../../../../assets/icons/qualification.svg';
import updateIcon from '../../../../assets/icons/editLight.svg';
import upload from '../../../../assets/icons/top.svg';
import report from '../../../../assets/icons/reports.svg';
import save from '../../../../assets/icons/save.svg';
import cancel from '../../../../assets/icons/cancel.svg';

const ActiveSubjects = () => {
    const classes = useStyles();
    const subjectsClasses = subjectsStyles();
    const modalClasses = modalStyles();
    const columns = ['N°', 'Materia', 'Carrera', 'Acción',];
    const [data, setData] = useState([
        ['1', 'Materia', 'Carrera', ''],
        ['2', 'Materia', 'Carrera', ''],
        ['3', 'Materia', 'Carrera', ''],
        ['4', 'Materia', 'Carrera', ''],

    ]);
    const [openModalQualifications, setOpenModalQualifications] = useState(false);
    const [subjectName, setSubjectName] = useState('');

    const columnsQualifiedStudent = ['N°', 'Paterno', 'Materno', 'Nombre', 'P1', 'P2', 'P3', 'Promedio', 'Examen Final', '2do Turno'];
    const [dataQualifiedStudent, setDataQualifiedStudent] = useState([
        ['1', 'Fernandez', 'Garcia', 'Juan', ' ', '', '', '', '', ''],
        ['2', 'Mendez', 'Garnica', 'Juana', ' ', '', '', '', '', ''],
        ['3', 'Perez', 'Gareca', 'Jan', ' ', '', '', '', '', '']
    ]);

    const [editMode, setEditMode] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const handleOpenModalQualifications = (rowID) => {
        const row = data[rowID];
        setSubjectName(row[1]);
        console.log(subjectName);
        setOpenModalQualifications(!openModalQualifications);
    };

    const tableRef = useRef(null); //referenciar  la tabla de estudiantes para generar las listas
    const tableQualificationRef = useRef(null);
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MMMM dd, yyyy", { locale: es });

    const handleGenerateList = (rowId) => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.addFont(poppins, 'Poppins', 'normal');
        doc.setFont('Poppins');
        doc.addImage(logo, 'SVG', 10, 9, 20, 20);
        doc.setFontSize(10);
        doc.setTextColor(39, 103, 158);
        doc.text('Instituto Técnico', 33, 18);
        doc.setFontSize(14);
        doc.text('SAN MARTIN', 33, 23);
        doc.setFontSize(10);
        doc.text('Fecha', 180, 20);
        doc.text(formattedDate, 166, 25);
        doc.setFontSize(20);
        doc.setTextColor(17, 45, 94);
        doc.setFont('Helvetica');
        doc.text('Lista de estudiantes', 78, 45);

        if (tableRef.current) {

            doc.autoTable({
                html: tableRef.current,
                startY: 60,
                theme: 'plain',
                headStyles: {
                    textColor: [39, 103, 158],
                    fontSize: 12,
                },
                styles: {
                    fontSize: 10,
                    cellPadding: 2,
                    rowHeight: 10,
                    textColor: [126, 138, 149],
                    valign: 'middle',
                    vjustificate: 'center'
                },
                columnStyles: { 0: { fontStyle: 'bold' } },
                didDrawPage: function () {
                    doc.setLineWidth(0.5);
                    doc.setDrawColor(39, 103, 158);
                    const startY = 70;
                    const endY = 70;
                    const tableWidth = doc.internal.pageSize.width - 25;
                    doc.line(12, startY, tableWidth, endY);
                }
            });

        }

        doc.save('reporte.pdf');
    };

    const handleGenerateReportQualification = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.addFont(poppins, 'Poppins', 'normal');
        doc.setFont('Poppins');
        doc.addImage(logo, 'SVG', 10, 9, 20, 20);
        doc.setFontSize(10);
        doc.setTextColor(39, 103, 158);
        doc.text('Instituto Técnico', 33, 18);
        doc.setFontSize(14);
        doc.text('SAN MARTIN', 33, 23);
        doc.setFontSize(10);
        doc.text('Fecha', 180, 20);
        doc.text(formattedDate, 166, 25);
        doc.setFontSize(20);
        doc.setTextColor(17, 45, 94);
        doc.setFont('Helvetica');
        doc.text('Calificaciones', 78, 45);

        if (tableQualificationRef.current) {

            doc.autoTable({
                html: tableQualificationRef.current,
                startY: 60,
                theme: 'plain',
                headStyles: {
                    textColor: [39, 103, 158],
                    fontSize: 12,
                },
                styles: {
                    fontSize: 10,
                    cellPadding: 2,
                    rowHeight: 10,
                    textColor: [126, 138, 149],
                    valign: 'middle',
                    vjustificate: 'center'
                },
                columnStyles: { 0: { fontStyle: 'bold' } },
                didDrawPage: function () {
                    doc.setLineWidth(0.5);
                    doc.setDrawColor(39, 103, 158);
                    const startY = 70;
                    const endY = 70;
                    const tableWidth = doc.internal.pageSize.width - 25;
                    doc.line(12, startY, tableWidth, endY);
                }
            });

        }

        doc.save('reporte.pdf');
    };

    const handleEdit = (newData) => {
        setDataQualifiedStudent(newData);
    };
    const toggleEditMode = () => {
        setIsChecked(!isChecked);
        setEditMode(prevMode => !prevMode);
    };

    if (openModalQualifications) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <div className={classes.subjectName}>
                            <p className={classes.subjectName}> {subjectName}</p>
                        </div>
                        <hr className={classes.lineQualification} />
                        <div className={classes.contentTop}>
                            <div className={classes.timeLimit}>
                                <p>Gestión</p>
                                <p>1/2024 <br /> 2/2024</p>
                            </div>
                            <div className={classes.buttonTop}>
                                <Button icon={upload} text={"Subir"} className={modalClasses.icons} className2={`${classes.buttonDisable} ${isChecked && classes.button}`} />
                            </div>
                            <div className={classes.editTableContainer}
                                onClick={toggleEditMode}
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    className={classes.inputEditTable}
                                />

                                <div className={`${classes.checkOff} ${isChecked && classes.checkOn}`} >
                                    <div className={`${classes.circleOff} ${isChecked && classes.circle}`}></div>
                                </div>
                            </div>
                        </div>
                        <TableEdit columns={columnsQualifiedStudent} data={dataQualifiedStudent} className2={classes.bodyQualification} onEdit={handleEdit} editMode={editMode} tableRef={tableQualificationRef} />
                        <div className={classes.buttons}>
                            <div className={classes.buttonBottom}>
                                <Button icon={report} text={"Generar Reporte"} className={modalClasses.icons}
                                    onClck={handleGenerateReportQualification}
                                    className2={`${classes.buttonDisable} ${isChecked && classes.button}`} />
                            </div>
                            <div className={classes.buttonsRight}>
                                <div className={classes.bottomRight}>
                                    <Button icon={save} text={"Guardar"} className={modalClasses.icons} className2={`${classes.buttonDisable} ${isChecked && classes.button}`} />
                                </div>
                                <div className={classes.bottomRight}>
                                    <Button icon={cancel} text={"Cancelar"} className={modalClasses.icons} className2={`${classes.buttonDisable} ${isChecked && classes.button}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {

        return (
            <div>
                <div className={subjectsClasses.content} >
                    <div className={classes.title}>
                        <p className={subjectsClasses.text}>MATERIAS ACTIVAS</p>
                        <hr className={subjectsClasses.lineTitle} />
                    </div>
                    <div className={classes.buttonSubjects}>
                        <Button icon={updateIcon} text={"Actualizar"} className={classes.icons} />
                    </div>
                    <div className={classes.subjectsTable}>
                        <Table columns={columns} data={data} columnIcon={"Acción"} icon3={list} icon={qualification} onEdit={handleOpenModalQualifications}
                        //onAdd={handleGenerateList}
                        />
                    </div>
                </div>
            </div>
        );
    }
};
export default ActiveSubjects;