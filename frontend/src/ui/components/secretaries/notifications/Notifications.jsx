import { useState } from 'react';
import secretariesStyles from '../Secretaries.style';
import modalStyles from '../../Modal.style';
import useStyles from './Notifications.style';
import Button from '../../forms/ButtonSM';
import Table from '../../table/Table';

import notificationsAddIcon from '../../../../assets/icons/newNotification.svg';
import cleanIcon from '../../../../assets/icons/clean.svg';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import sendIcon from '../../../../assets/icons/send.svg';


const Notifications = () => {
    const secretariesClasses = secretariesStyles();
    const classes = useStyles();
    const modalClasses = modalStyles();
    const [openModalNewNotification, setOpenModalNotification] = useState(false);
    const [typeNotification, setTypeNotification] = useState('');
    const [messageNotification, setMessageNotification] = useState('');

    const columns = ['N°', 'Tipo', 'Mensaje', 'Fecha'];
    const [data, setData] = useState([
        ['1', 'Tipo', 'esto es un mensaje', '20-02-2024'],
        ['2', 'Tipo', 'esto es un mensaje', '20-03-2024'],
        ['3', 'Tipo', 'esto es un mensaje', '20-04-2024']
    ]);
    const options = [
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' },
    ];

    const handleOpenModalNotification = () => {
        handleStates();
        setOpenModalNotification(!openModalNewNotification);
    };
    const handleStates = () => {
        setTypeNotification('');
        setMessageNotification('');
    };

    const handleSend = () => {
        const currentDate = new Date().toISOString().slice(0, 10);
        const newRow = [(data.length + 1).toString(), typeNotification, messageNotification, currentDate];
        setData(prevData => [...prevData, newRow]);
        setOpenModalNotification(false);
        handleStates();
    }
    const handleClean = () => {
        const lastRow = data[data.length - 1];
        lastRow[0] = '1';
        setData([lastRow]);
    }

    if (openModalNewNotification) {
        return (
            <>
                <div className={modalClasses.under}></div>
                <div className={modalClasses.container}>
                    <div className={modalClasses.content}>
                        <p className={classes.titleNotification}>CREAR NOTIFICACIÓN</p>
                        <div className={classes.typeNotification}>
                            <label className={classes.labelType} htmlFor="type">Tipo:</label>
                            <select className={classes.selectType} id="type" name="type" value={typeNotification} onChange={(e) => setTypeNotification(e.target.value)}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={classes.messageNotification}>
                            <label className={classes.labelType} htmlFor="message">Mensaje:</label>
                            <textarea className={classes.textAreaMessage} rows="7" cols="50" placeholder='Escribe aquí el mensaje'
                                id="message" name="message" value={messageNotification} onChange={(e) => setMessageNotification(e.target.value)}
                            ></textarea>
                        </div>
                        <div className={classes.buttons}>
                            <Button icon={sendIcon} text={"Enviar"} className={classes.iconButton} className2={classes.buttonSend} onClick={handleSend} />
                            <Button icon={cancelIcon} text={"Cancelar"} className={classes.iconButton} className2={classes.buttonCancel} onClick={handleOpenModalNotification} />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className={secretariesClasses.content} >
                <div>
                    <p className={secretariesClasses.text}>NOTIFICACIONES</p>
                    <hr className={secretariesClasses.lineTitle} />
                </div>
                <div className={classes.buttonNotification}>
                    <div className={classes.buttonNewNotification}><Button icon={notificationsAddIcon} text={"Crear notificaición"} className={classes.iconButton} onClick={handleOpenModalNotification} /></div>
                </div>
                <div className={classes.tableNotifications}>
                    <Table columns={columns} data={data} />
                </div>
                <div className={classes.buttonNotification}>
                    <div className={classes.buttonClean}><Button icon={cleanIcon} text={"Limpiar"} className={classes.iconButton} onClick={handleClean} /></div>
                </div>



            </div>
        );
    };
};
export default Notifications;