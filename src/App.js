import './App.css';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Dealit from './components/Deatil/Deatil';
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites';

function App() {
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '1e540d7d8907.41ce7c7ee6a5ca7ee228';
   const location = useLocation();// toma la url 

   const [characters, setCharacters] = useState([]);
   const [access,setAccess]=useState(false);

   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1Password';

   const navigate = useNavigate();
   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
     
      <div className='App'>
      {location.pathname !== "/" ? <Nav setAccess={setAccess} onSearch={onSearch} /> : null}      
         <Routes>  
         <Route path='/' element={<Form login={login}/>} />       
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:id'  element={<Dealit/>}/>
         <Route path ='/favorite' element={<Favorite/>} />
       </Routes>
           </div>
      
 
   );
}

export default App;