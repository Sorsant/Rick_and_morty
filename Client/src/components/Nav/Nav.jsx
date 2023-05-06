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

            <NavLink to="/home" className={style.botonesAdd}><button ><img src="https://i.ibb.co/BqpcjBG/home.png" alt="" /></button></NavLink>
            <NavLink className={style.botonesAdd} to="/about"> <button  ></button></NavLink>
            <NavLink className={style.botonesAdd} to="/favorite"><button><img src="https://i.ibb.co/0yg4qjw/Favoritos.png" alt="" /></button></NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logOut}  onClick={handelLogOut} >Log Out</button>
        
        </nav>
        
        
    )
}

export default Nav;
{/* <img src="https://i.ibb.co/RCmNxZb/agregar.png" alt="" /> */}