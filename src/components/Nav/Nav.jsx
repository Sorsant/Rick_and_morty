import SearchBar from '../Searchb/SearchBar.jsx';
import { NavLink,} from 'react-router-dom';
import style from './Nav.module.css'
const Nav = ({ onSearch }) => {

    return (
        <nav className={style.navegar} >
            <div className={style.botones}>

           <button><NavLink to="/home">Home</NavLink></button>
           <button className={style.derecha}><NavLink to="/about">About</NavLink></button>
            </div>
            <SearchBar onSearch={onSearch}/>
        
        </nav>
        
        
    )
}

export default Nav;