    import useStyles from "./Table.style";
    import ActionColumn from "./ActionColumn";

    const Table = ({ columns, data, icon, icon2, icon3,columnIcon, textLink,columnAction,className, className2, onClick}) => {
        
        const classes = useStyles();

        return(
            <table className={className||classes.table}>
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
                                <ActionColumn icon={icon} icon2={icon2} icon3={icon3}/>
                            )}
                            {typeof cell === 'string' && !(cellIndex === columns.indexOf(`${columnIcon}`)) && cell}
                            {columns[cellIndex] === `${columnAction}`&& (
                                <p className={classes.underline} onClick={onClick}> {textLink} </p>
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
