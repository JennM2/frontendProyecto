import useStyles from './Forms.style'

const DynamicInputs = ({ fields, className }) => {
  const classes = useStyles();

  return (
    <div>
      {fields.map(({ label, placeholder, type }, index) => (
        <div className={classes.dynInputs} key={index}>
          <label className={className||classes.dynLabel} htmlFor={`input-${index}`}>{label}:</label>
          <input className={classes.dynInput} type={type} id={`input-${index}`} placeholder={`${placeholder}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicInputs;