import search from '../../../assets/icons/search.svg'
import useStyles from './Forms.style'
const Search = ({text}) => {
    const classes = useStyles();
    return(
        <div className={classes.search}>
            <input className={classes.inputSearch} type="text" placeholder={text}/>
            <img className={classes.iconSearch} src={search} alt="search" />
        </div>
    );
};

export default Search;