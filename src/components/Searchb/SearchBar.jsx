import { useState } from 'react';
import style from './search.module.css'
export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.inputButton}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
// el valor de el evento que en este caso es el input sin el spreed para que no lo pisemos
 // el evento que manda 
// escucha algun cambio y ejecuta esta funcaion
// el value y el id tiene que ser similar por quetengo que saber que esta                                                                 escribiendo el usuario
// cuando necesitemos pasar argumentos a una fn hacemos un cb para que no se auto ejecute y el setid para eliminar del value el num 