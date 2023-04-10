import { Link } from "react-router-dom";
import style from './Cards.module.css'

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.contenedor}>
         <button className={style.botonx} onClick={()=>onClose(id)}>X</button>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <h2>{origin.name}</h2>
        <Link to={`/detail/${id}`}><h2 className={style.nombreDePersonaje}>Nombre: {name}</h2></Link>
         <img className={style.miImagen} src={image} alt='' /> 
      </div>
   );
}

