import style from './Cards.module.css'
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { useState,useEffect } from "react";
import {connect} from 'react-redux'  // esto es para el map dispatch

function Card({id,name,status,species,gender,origin,image,onClose , addFav,removeFav,myFavorites} ) {
   const [isFav,setIsFav]= useState(false);

   
   const handleFavorite =() => {
      if(isFav){        
         setIsFav(false);
         removeFav(id);         
      }
      else{
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose})   
      }
   }
   
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [id,myFavorites]);





   return (
      <div className={style.contenedor}>
            {
            isFav
             ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
            }
         <button className={style.botonx} onClick={()=>onClose(id)}>X</button>
        <Link to={`/detail/${id}`}><h2 className={style.nombreDePersonaje}>Nombre: {name}</h2></Link>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <h2>{origin}</h2>
         <img className={style.miImagen} src={image} alt='' /> 
      </div>
   );

   
}
const mapStateToProps = (state) =>{
   return{
     myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}
export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);