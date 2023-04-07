import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '1e540d7d8907.41ce7c7ee6a5ca7ee228';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
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
