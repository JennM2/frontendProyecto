import React from "react";
import useStyles from "./Table.style";

const ActionColumn = ({ icon, icon2, icon3 }) => {
  const classes = useStyles();

  return (
    <>
      {icon && <img className={classes.iconAccion} src={icon} alt=" " />}
      {icon2 && <img className={classes.iconAccion} src={icon2} alt=" " />}
      {icon3 && <img className={classes.iconAccion} src={icon3} alt=" " />}
    </>
  );
};

export default ActionColumn;
