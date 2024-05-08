import { useState } from 'react';
import useStyles from './Perfile.style';
import adminStyles from '../Admin.style';   
import perfilPicture from '../../../../assets/icons/UserPerfil.svg';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';
import Credentials from '../../forms/Credentials';
import DynamicInputs from '../../forms/DynamicInputs';

const Perfil = ({setSelectedImage, nameUser }) => {
    const classes = useStyles();
    const adminClasses = adminStyles();
    const [hover, setHover] = useState(false);
    const [image, setImage] = useState(perfilPicture);
    

    const fields = [
        { label: 'Apellido Paterno', placeholder: '', type: 'text',id: 'lastnamePaternalPerfil', value: 'Rodriguez' },
        { label: 'Apellido Materno', placeholder: '', type: 'text',id: 'lastnameMaternalPerfil', value: 'Victoria' },
        { label: 'Nombre',placeholder: '', type: '',id: 'namePerfil', value: 'Juan' },
        { label: 'CI', placeholder: '', type: 'text',id: 'ciPerfil', value: '12345678' },
        { label: 'Correo electrónico', placeholder: 'correo@gmail.com', type: 'email',id: 'emailPerfil', value: 'juan@gmail.com' },
    ];

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(URL.createObjectURL(img));
            setSelectedImage(URL.createObjectURL(img));
        }
    };

    return(
        <div className={adminClasses.content} >
            <div className={classes.title}>
                <p className={adminClasses.text}>PERFIL</p>
                <hr className={adminClasses.lineTitle} />
            </div>
            <div className={classes.contentPerfil}>
                <div className={classes.userPerfil}>
                    <div 
                        className={`${classes.perfilPicture} ${hover}`} 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                    >
                        {hover && (
                            <div className={classes.editOverlay}>
                                <EditIcon className={classes.iconEditOverlay} />
                                <p>Editar perfil</p>
                                <input type="file" accept="image/*" onChange={handleImageChange} className={classes.fileInput}/>
                            </div>
                        )}
                        <img className={classes.picture} src={image} alt="perfil" />
                    </div>
                    <Credentials nameUser={nameUser} passwordUser={"4dm1n1str4d0r"}/>
                </div>
                <div className={classes.containerInputs}>
                    <DynamicInputs fields={fields} />
                </div>

            </div>

        </div>
    );
};

export default Perfil;
