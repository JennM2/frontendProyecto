import search from '../../../assets/icons/search.svg'
import useStyles from './Forms.style'
const Search = ({text, onSearch}) => {
    const classes = useStyles();
    return(
        <div className={classes.search}>
            <input className={classes.inputSearch} type="text" placeholder={text} onChange={e => onSearch(e.target.value)}/>
            <img className={classes.iconSearch} src={search} alt="search" />
        </div>
    );
};

export default Search;