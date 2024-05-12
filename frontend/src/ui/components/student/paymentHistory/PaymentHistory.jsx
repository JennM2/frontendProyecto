import { useState } from 'react';
import useStyles from './PaymentHistory.style';
import studentsStyles from '../Student.style';
import Table from '../../table/Table';
import Button from '../../forms/ButtonSM';
import reportHistory from '../../../../assets/icons/reports.svg';

const PaymentHitory = () => {
    const classes = useStyles();
    const studentClasses = studentsStyles();

    const columns = ['Mes', 'Cantidad', 'Fecha de pago', 'Estado de pago'];
    const [data, setData] = useState([
        ['Mayo', '000 BS', '2024-03-10', 'Pagado'],
        ['Mayo', '000 BS', '2024-04-10', 'Pagado'],
        ['Mayo', '000 BS', '2024-05-10', 'Pagado']
    ]);

    return (
        <div className={studentClasses.content} >
            <div className={classes.title}>
                <p className={studentClasses.text}>HISTORIAL DE PAGOS</p>
                <hr className={studentClasses.lineTitle} />
            </div>
            <div className={classes.tableHistory}>
                <Table columns={columns} data={data} />
            </div>
            <div className={classes.buttonsHistory}>
                <Button icon={reportHistory} text={"Generar Historial"} className={classes.iconButton} />
            </div>

        </div>

    );
};

export default PaymentHitory;