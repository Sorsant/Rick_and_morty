import SearchBar from '../Searchb/SearchBar.jsx';
import { NavLink,} from 'react-router-dom';
import style from './Nav.module.css'
const Nav = ({ onSearch,setAccess }) => {


    const handelLogOut = ()=>{
        setAccess(false);        
    }
    return (
        <nav className={style.navegar} >
            <div className={style.botones}>

           <button ><NavLink to="/home">Home</NavLink></button>
           <button  ><NavLink to="/about">About</NavLink></button>
           <button><NavLink to="/favorite">Favoritos</NavLink></button>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logOut}  onClick={handelLogOut} >Log Out</button>
        
        </nav>
        
        
    )
}

export default Nav;