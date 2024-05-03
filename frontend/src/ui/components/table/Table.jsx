import useStyles from "./Table.style";
const Table = ({ columns, data, icon }) => {
    
    const classes =useStyles();

    return(
        <table className={classes.table}>
            <thead className={classes.headTable}>
                <tr>
                {columns.map((column, index) => (
                    <th className={classes.nameHead} key={index}>{column}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr className={classes.rows} key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                    <td className={classes.bodyTable} key={cellIndex}>
                        {cellIndex === columns.indexOf('Acción') && (
                        <img src={icon} alt="action" />
                        )}
                        {typeof cell === 'string' && !(cellIndex === columns.indexOf('Acción')) && cell}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;