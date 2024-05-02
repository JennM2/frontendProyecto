import useStyles from './Perfile.style';
import adminStyles from '../Admin.style';   
import perfilPicture from '../../../../assets/icons/UserPerfil.svg';
import Credentials from '../../forms/Credentials';
import DynamicInputs from '../../forms/DynamicInputs';

const Perfil = () => {
    const classes = useStyles();
    const adminClasses = adminStyles();

    const fields = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text' },
        { label: 'Apellido Materno', placeholder: '', type: 'text' },
        { label: 'Nombre',placeholder: '', type: '' },
        { label: 'CI', placeholder: '', type: 'text' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email' },
    ];

    return(
        <div className={adminClasses.content} >
            <div className={classes.title}>
                <p className={adminClasses.text}>PERFIL</p>
                <hr className={adminClasses.lineTitle} />
            </div>
            <div className={classes.contentPerfil}>
                <div className={classes.userPerfil}>
                    <img className={classes.perfilPicture} src={perfilPicture} alt="perfil" />
                    <Credentials/>
                </div>
                <div className={classes.containerInputs}>
                    <DynamicInputs fields={fields} />
                </div>

            </div>

        </div>
    );
};

export default Perfil;