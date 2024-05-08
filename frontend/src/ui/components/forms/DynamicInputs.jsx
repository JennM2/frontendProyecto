import useStyles from './Forms.style'

const DynamicInputs = ({ fields, className, onChange,values   }) => {
  const classes = useStyles();

  return (
    <div>
      {fields.map(({ label, placeholder, type,id,value }, index) => (
        <div className={classes.dynInputs} key={index}>
          <label className={className||classes.dynLabel} htmlFor={id}>{label}:</label>
          <input className={classes.dynInput} type={type} id={id} placeholder={`${placeholder}`} {...(values && { value: values[id] })}   onChange={e => onChange(id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicInputs;