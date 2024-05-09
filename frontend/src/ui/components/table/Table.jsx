    import useStyles from "./Table.style";
    import ActionColumn from "./ActionColumn";

    const Table = ({ columns, data, icon, icon2, icon3,columnIcon, textLink,columnAction,className, className2,classNameIcon, onClick, onDelete, onAdd, start, end, onEdit, tableRef}) => {
        
        const classes = useStyles();

        return(
            <table className={className||classes.table} ref={tableRef}>
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
                        <td className={className2||classes.bodyTable} key={cellIndex}>
                            {cellIndex === columns.indexOf(`${columnIcon}`) && (
                                <ActionColumn icon={icon} icon2={icon2} icon3={icon3} onDelete={onDelete} onEdit={onEdit}  onAdd={onAdd} id={row.slice(start, end).join(' ')} idEdit={rowIndex} classNameIcon={classNameIcon}/>
                            )}
                            {typeof cell === 'string' && !(cellIndex === columns.indexOf(`${columnIcon}`)) && cell}
                            {columns[cellIndex] === `${columnAction}`&& (
                                <p className={classes.underline} onClick={() => onClick(rowIndex)}> {textLink} </p>
                            )}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    export default Table;
