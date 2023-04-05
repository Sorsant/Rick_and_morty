import axios from "axios"
import { useParams} from "react-router-dom"
import { useState,useEffect } from 'react';
const Dealit =()=>{
    const {detailId} = useParams();
    const [characters, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId])
    
return(
    <div>
      {
         characters ? <div>
         <h1>{characters.name}</h1>
         <span>{characters.status}</span>
         <span>{characters.specie}</span>
         <span>{characters.gender}</span>
         <span>{characters.origin.name}</span>
         <img src={characters.image} alt="" />
     </div> : null
      }
    </div>
)
}
export default Dealit
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
    </div> */