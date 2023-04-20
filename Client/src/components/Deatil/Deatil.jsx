import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Deatil.module.css'


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div className={style.card}>
           <div className={style.cardInfo}>
           <h2>Nombre: {character?.name}</h2>
            <h2>Estado: {character?.status}</h2>
            <h2>Especie: {character?.species}</h2>
            <h2>Genero: {character?.gender}</h2>
            <h2>Origen: {character?.origin?.name}</h2>
            </div> 
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;
// el de arriba es condiconal como un if else 
/* character && <div>
        <h1>{characters.name}</h1> condicional &&
        <span>{characters.status}</span>
        <span>{characters.specie}</span>
        <span>{characters.gender}</span>
        <span>{characters.origin.name}</span>
        <img src={characters.image} alt="" />
    </div> */

/*     <div>
        <h1>{characters?.name}</h1> //  condicional chaining 
        <span>{characters.status}</span>
        <span>{characters.specie}</span>
        <span>{characters.gender}</span>
        <span>{characters.origin.name}</span>
        <img src={characters.image} alt="" />
    </div> 
    
    
     characters ? <div>
         <h1>{characters.name}</h1>
         <span>{characters.status}</span>
         <span>{characters.specie}</span>
         <span>{characters.gender}</span>
         <span>{characters.origin.name}</span>
         <img src={characters.image} alt="" />
     </div> : null*/
