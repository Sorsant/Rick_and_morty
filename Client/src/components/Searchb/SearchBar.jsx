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
         <button className={style.botonesAdd}  onClick={() =>{onSearch(id); setId('')}}> <img src="https://previews.dropbox.com/p/thumb/AB49I6ehUsSlkyBymcB8Bv1Q5fOMa53o88Bpd646A6NkyEAIamjjzCUDH85M7eBB1Tlbefzh2sSbRWT1ohqmQQA5aJE_mfkS30uVDR53TYwUtyxnFCt-3XURRGQHLtF2rRv82aPV3iZ8ra0RHLGr15OlxFhJQvGJpSbDNsSC8LTdN0S-gOIPwyCezSqsfUoa9BVVL4sV6G1SW-4i4S3odt64TkytM8wZ8QThqLL7lKf2J0tS-3tCX9WQnoVa6lQcxEenXq2wJu_0LeFwTHV2aO3RGcerPEmnlB9qzdXAs--kbz7a1g-ZfoAAuXFLWAbDw9D3p5PWg5P_5TCEl5FtfBpC3-xt9GD8efPB_7E0Dlf1we7Ui7yIwUV_arlfECMd_7c/p.png" alt="" /></button>
         <button 
          className={style.botonesAdd}
          onClick={() => {
            randomizer();
          }}
        >
          <img src="https://previews.dropbox.com/p/thumb/AB5H75LbSWftIL2toEjzPkWWrzdZLkhFtUHCnBYSvivrlpBOJLEkPefEevKjGHZxYGHT7kAdCaFW9gRRq7PBvvJv4SoXIsskQD68vQ4Ge578iirpVK83eCATx4UJLDg6PFdrxdw-lDkl74mKCbFg3-Vc1iYkxdQZ6oHwlfqFg09pJQTuCq8jhGUVlVeMs0FyVZNiphuKPTiBxKLBdZAzybkkm1X3MMuMrYimsiOQVMqmZIhDOZukk_KXBEanuSuMmBvc3URAdO8L-XKS51ZQ3ohb_G-rW7fWUQ3Ucfe6ry40BN1hK7YopZ5dxb5tet43ObGAIdLR743eivG0uL70zVyf182ODP-OGJ3mopFiVz3RQwTgV05at3cRp7lGr3hLbf8/p.png" alt="" />
        </button>
      </div>
   );
}
// el valor de el evento que en este caso es el input sin el spreed para que no lo pisemos
 // el evento que manda 
// escucha algun cambio y ejecuta esta funcaion
// el value y el id tiene que ser similar por quetengo que saber que esta                                                                 escribiendo el usuario
// cuando necesitemos pasar argumentos a una fn hacemos un cb para que no se auto ejecute y el setid para eliminar del value el num 