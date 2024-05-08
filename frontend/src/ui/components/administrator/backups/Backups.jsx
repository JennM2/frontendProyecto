import { useState } from 'react';
import adminStyles from '../Admin.style';
import useStyles from './Backups.style';
import backups from '../../../../assets/icons/backupMenu.svg';
import ButtonSM from '../../forms/ButtonSM';
import Table from '../../table/Table';


const Backups = () => {

    const adminClasses = adminStyles();
    const classes = useStyles();
    const [monthlyChecked, setMonthlyChecked] = useState(false);
    const [weeklyChecked, setWeeklyChecked] = useState(false);

    const handleMonthlyRadio = () => {
        setMonthlyChecked(true);
        setWeeklyChecked(false); 
    };

    const handleWeeklyRadio = () => {
        setWeeklyChecked(true);
        setMonthlyChecked(false);
    };

    const columns = ['ID', 'Nombre', 'Fecha', 'Estado'];
    const data = [
        ['8574', 'Fernandez', '06-05-2024', 'Estado'],
        ['8574','Fernandez', '06-05-2024', 'Estado'],
        ['8574','Fernandez', '06-05-2024', 'Estado'],
    ];

    return(
        <div className={adminClasses.content} >
            <div className={classes.title}>
                <p className={adminClasses.text}>COPIAS DE SEGURIDAD</p>
                <hr className={adminClasses.lineTitle} />
            </div>
            <div className={classes.containerProgram}>
                <div className={classes.contentProgram}>
                    <div className={classes.programTime}>
                        <p className={classes.subtitle} >Programar Backup</p>
                        <div className={classes.program}>
                            <div className={classes.check}>
                                <input type="radio" id="monthly" name="monthly" value="monthly" checked={monthlyChecked} onChange={handleMonthlyRadio}/>
                                <label className={classes.labelCheck} for="monthly">Mensual</label>
                            </div>
                            <div className={classes.check}>
                                <input type="radio" id="weekly" name="weekly" value="weekly" checked={weeklyChecked} onChange={handleWeeklyRadio}/>
                                <label className={classes.labelCheck} for="weekly">Semanal</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.buttonProgram}>
                        <ButtonSM icon={backups} text={"Generar Backup"} className={classes.iconProgram} />
                    </div>
                </div>
                <hr className={adminClasses.lineTitle} />
                <div className={classes.recentsBackup}>
                    <p className={classes.subtitle}>Backup Recientes</p>
                    <div className={classes.tableContent}>
                        <Table columns={columns} data={data} className={classes.tableBackups} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Backups;