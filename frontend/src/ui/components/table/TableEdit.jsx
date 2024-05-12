import React, { useState, useEffect } from "react";
import useStyles from "./Table.style";

const TableEdit = ({
  columns,
  data,
  className,
  className2,
  onEdit,
  tableRef,
  editMode
}) => {
  const classes = useStyles();

  const [editableCell, setEditableCell] = useState(null);


  const editableColumns = ["P1", "P2", "P3", "Examen Final", "2do Turno"];

  const handleCellClick = (rowIndex, cellIndex) => {
    const columnName = columns[cellIndex];
    if (editMode && editableColumns.includes(columnName)) {
      setEditableCell({ rowIndex, cellIndex });
    } else {
      setEditableCell(null);
    }
  }

  const handleCellChange = (event, rowIndex, cellIndex) => {
    const newData = [...data];
    newData[rowIndex][cellIndex] = event.target.value;
    onEdit(newData);
  };

  useEffect(() => {

    if (editableCell) {
      const editedColumn = columns[editableCell.cellIndex];
      if (editableColumns.includes(editedColumn)) {
        recalculatePromedio(editableCell.rowIndex);
      }
    }
  }, [data, editableCell]);

  const recalculatePromedio = (rowIndex) => {
    const p1Index = columns.indexOf("P1");
    const p2Index = columns.indexOf("P2");
    const p3Index = columns.indexOf("P3");
    const p1 = parseFloat(data[rowIndex][p1Index]);
    const p2 = parseFloat(data[rowIndex][p2Index]);
    const p3 = parseFloat(data[rowIndex][p3Index]);
    const promedio = isNaN(p1) || isNaN(p2) || isNaN(p3) ? "" : ((p1 + p2 + p3) / 3).toFixed(2);
    const newData = [...data];
    newData[rowIndex][columns.indexOf("Promedio")] = promedio;
    onEdit(newData);
  };

  return (
    <table className={className || classes.table} ref={tableRef}>
      <thead className={classes.headTable}>
        <tr>
          {columns.map((column, index) => (
            <th className={classes.nameHead} key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className={classes.rows} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                className={className2 || classes.bodyTable}
                key={cellIndex}
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              >
                {editableCell && editableCell.rowIndex === rowIndex && editableCell.cellIndex === cellIndex ?
                  (
                    <input
                      type="text"
                      value={cell}
                      onChange={(event) => {
                        const newValue = event.target.value.replace(/\D/g, '');
                        handleCellChange({ target: { value: newValue } }, rowIndex, cellIndex);
                      }}
                      className={classes.inputTable}
                    />
                  ) : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEdit;
