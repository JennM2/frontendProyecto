import useStyles from './Users.style';
import adminStyles from '../Admin.style';
import Table from '../../table/Table';
import deleteIcon from '../../../../assets/icons/delete.svg';
import Search from '../../forms/Search';

const Users = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();

    const columns = ['ID', 'Usuario', 'Rol', 'Paterno', 'Materno', 'Nombre', 'CI', 'Correo', 'Teléfono', 'Acción'];
    const data = [
        ['8574', 'Usuario', 'Docente', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com', '78745745',''],
        ['8574', 'Usuario', 'Docente', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com', '78745745',''],
        ['8574', 'Usuario', 'Docente', 'Fernandez', 'Garcia', 'Juan', '15215425', 'juan@gmail.com', '78745745',''],
    ];

    return(
        <div className={adminClasses.content} >
            <div className={classes.title}>
                <p className={adminClasses.text}>USUARIOS</p>
                <hr className={adminClasses.lineTitle} />
            </div>
            <div className={classes.contentUsers}>
                <div className={classes.searchUsers}>
                    <Search/>
                </div>
                <div className={classes.tableUsers}>
                    <Table columns={columns} data={data} icon={deleteIcon}/>
                </div>
            </div>
        </div>
    );
};

export default Users;