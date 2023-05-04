import { useState } from 'react';
import style from './search.module.css'
export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }
   const randomizer = () => {
      const randomId = (Math.floor(Math.random() * 826) + 1).toString();
      setId(randomId);
      onSearch(randomId);
      setId("");
    };
   return (
      <div className={style.inputButton}>
         <input type='search' onChange={handleChange} value={id} />
         <button className={style.botonesAdd}  onClick={() =>{onSearch(id); setId('')}}> <img src="https://previews.dropbox.com/p/thumb/AB6mxlzPdiAiiYkcZ7wzDuRGGZNMegAzHqFV7fPzR-O68cuaYOe-f2mRE8FVAGKH-_oXfEgpvKIaKSFclVUOa6At-6xTah8L78dZdwsoNMaBUk6V8ysVlQNZpW4vAxTHdPgqHMRhqvoY7IY3f3hONY0-7IOScOIZnfU1fuyt2ShbKjtUgGUZrDr7qFWX8K3AhRgRkTgvjZF6w7RW-YHhFMFGq5j7FZTaMEjYKUpcluoBuCIjCrQvMdJHZo1wEAr9I-42IcPV_FztsOG4mLr0juVQIed3xqM2GDjw7zFNh4hiwfIgcz4TVNNeaFStq2oEZeOd8vAWzZV1WCu76qt4WINoYnjfPPRPWg_J_GfhJcrmR8wOdcmSakqIFSzGMmtIMto/p.png" alt="" /></button>
         <button 
          className={style.botonesAdd}
          onClick={() => {
            randomizer();
          }}
        >
          <img src="https://previews.dropbox.com/p/thumb/AB6vArCNJfSWsA5G8cE-tLtENPcPMLOli5yC1C2RTvQaQwISSbi2Ekqdvqz8zjO3RWRPl_o_aHexN8EuxL4Hw916RfEakEWZY4QVK-pKSdPXkbdD0SOcRzjac5_HF0dEMbJ9kclNGf_5CmO9-2H5LQr5ArL2-yTWxwmRLhP0RB3bawUsrdKWIZWUMXoxV-VdJkKwjDk0vX-uAZKEbC897Q8HRVdYUuz1rJ523cFmuCuWWKUqs4frv1OtVROZr2peRqf01V6wFqQy8iAxsvq5c5LGJ35wBUwQvL4iw4ocJmKZd7dBXDDbNNHT-FOxrqjMxP9FF_EtRgnTmxjHfMLHciyM_OlVTtvRrjwA20u-U_UVTWjeWuuubNrtDWTVP05iB9Y/p.png" alt="" />
        </button>
      </div>
   );
}
// el valor de el evento que en este caso es el input sin el spreed para que no lo pisemos
 // el evento que manda 
// escucha algun cambio y ejecuta esta funcaion
// el value y el id tiene que ser similar por quetengo que saber que esta                                                                 escribiendo el usuario
// cuando necesitemos pasar argumentos a una fn hacemos un cb para que no se auto ejecute y el setid para eliminar del value el num 