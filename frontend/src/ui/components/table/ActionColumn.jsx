import React from "react";
import useStyles from "./Table.style";

const ActionColumn = ({ icon, icon2, icon3, onDelete, onEdit, id, idEdit,onAdd, classNameIcon }) => {
  const classes = useStyles();

  return (
    <>
      {icon && <img className={classNameIcon||classes.iconAccion} src={icon} alt=" " onClick={() => onEdit(idEdit)} />}
      {icon2 && <img className={classNameIcon||classes.iconAccion} src={icon2} alt=" " onClick={() => onDelete(id)}   />}
      {icon3 && <img className={classNameIcon||classes.iconAccion} src={icon3} alt=" " onClick={()=> onAdd(idEdit)} />}
    </>
  );
};

export default ActionColumn;
