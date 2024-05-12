import { useState } from 'react';
import useStyles from './Qualifications.style';
import studenStyles from '../Student.style';
import openArrow from '../../../../assets/icons/arrowD.svg';
import closeArrow from '../../../../assets/icons/arrowD0.svg';
import Table from '../../table/Table';

const Qualification = () => {
    const classes = useStyles();
    const studentClasses = studenStyles();

    const [isTableVisible1, setTableVisible1] = useState(true);
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

    const columnsQualified = ['N°', 'Materia', 'P1', 'P2', 'P3', 'Promedio', 'Examen Final', '2do Turno'];
    const dataQualified = [
        ['1', 'Materia', '10', '20', '30', '20', '50', '51'],
        ['2', 'Materia', '20', '90', '30', '30', '60', '0'],
        ['3', 'Materia', '50', '70', '10', '50', '70', '0']
    ];

    return (
        <>
            <div className={studentClasses.content} >
                <div className={classes.title}>
                    <p className={studentClasses.text}>NOTAS</p>
                    <hr className={studentClasses.lineTitle} />
                </div>
                <div className={classes.contentQualification}>
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
                        <hr className={classes.lineFirst} />
                        {isTableVisible1 && (
                            <div className={classes.positionTable}>
                                <Table columns={columnsQualified} data={dataQualified} className2={classes.tableQualified} />

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
                        <hr className={classes.lineFirst} />
                        {isTableVisible2 && (
                            <div className={classes.positionTable}>
                                <Table columns={columnsQualified} data={dataQualified} className2={classes.tableQualified} />

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
                        <hr className={classes.lineFirst} />
                        {isTableVisible3 && (
                            <div className={classes.positionTable}>
                                <Table columns={columnsQualified} data={dataQualified} className2={classes.tableQualified} />

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Qualification;