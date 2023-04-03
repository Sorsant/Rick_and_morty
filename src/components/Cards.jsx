import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map(personaje=>{
         return(
            <div>
         <button  key={props.id} onClick={personaje.onClose}>X</button>
         <h2 key={props.id}>{personaje.name}</h2>
         <h2 key={props.id}>{personaje.status}</h2>
         <h2 key={props.id}>{personaje.species}</h2>
         <h2 key={props.id}>{personaje.gender}</h2>
         <h2 key={props.id}>{personaje.origin.name}</h2>
         <img  key={props.id} src={personaje.image} alt='' /> 
      </div>
         )
      })}
   </div>;
}
