import { useState } from 'react';
import { useRef } from 'react';
import secretariesStyles from '../Secretaries.style'
import useStyles from './Payments.style';
import Table from '../../table/Table';
import Button from '../../forms/ButtonSM';
import reportIcon from '../../../../assets/icons/reports.svg';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../../../../assets/images/logoSMpdf.png';
import poppins from '../../../../assets/fonts/Poppins-Regular.ttf';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Payments = () => {
    const secretariesClasses = secretariesStyles();
    const classes = useStyles();
    const columns = ['N°','AR','AM','Nombre','Matrícula','Carrera','Fecha'];
    const [data, setData] = useState([
        ['1','AR','AM','Juan Perez','51258','Carrera','20-05-2020'],
        ['2','AR','AM','Carmer García','12258','Carrera','20-05-2020'],
        ['3','AR','AM','Maria Garzón','12586','Carrera','20-05-2022'],
    ]);
    const tableRef = useRef(null);
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MMMM dd, yyyy", { locale: es });

    const handleGenerateReport = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.addFont(poppins, 'Poppins', 'normal');
        doc.setFont('Poppins');
        doc.addImage(logo, 'SVG', 10, 9, 20, 20); 
        doc.setFontSize(10);
        doc.setTextColor(39,103,158);
        doc.text('Instituto Técnico', 33, 18);
        doc.setFontSize(14);
        doc.text('SAN MARTIN', 33, 23);
        doc.setFontSize(10);
        doc.text('Fecha',180, 20);
        doc.text(formattedDate,166, 25);
        doc.setFontSize(20);
        doc.setTextColor(0,0,0);
        doc.setFont('Helvetica');
        doc.text('Reporte de Pagos', 78, 45);
        
        if (tableRef.current) {
                
            doc.autoTable({
                html: tableRef.current,
                startY: 60,
                theme: 'plain', 
                headStyles: {
                    textColor: [39,103,158], 
                    fontSize: 12,
                },
                styles: {
                    fontSize: 10, 
                    cellPadding: 2, 
                    rowHeight: 10, 
                    textColor: [126,138,149], 
                    valign: 'middle',
                    vjustificate: 'center'
                },
                columnStyles: { 0: { fontStyle: 'bold' } }, 
                didDrawPage: function () {
                    doc.setLineWidth(0.5);
                    doc.setDrawColor(39,103,158);  
                    const startY =70;
                    const endY = 70;
                    const tableWidth = doc.internal.pageSize.width-25; 
                    doc.line(12, startY, tableWidth, endY);
                }
            });

        }

        doc.save('reporte.pdf');
    };

    return(
        <div className={secretariesClasses.content} >
            <div>
                <p className={secretariesClasses.text}>PAGOS</p>
                <hr className={secretariesClasses.lineTitle} />
            </div>
            <div className={classes.tablePayments}>
                <Table columns={columns} data={data} tableRef={tableRef} className={classes.tablePayments}/>
            </div>
            <div className={classes.buttonPayments}>
                <div className={classes.button}><Button icon={reportIcon} text={"Generar reporte"} className={classes.iconButton} onClick={handleGenerateReport}/></div>
            </div>

        </div>
    );
};

export default Payments;