import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Dealit from './components/Deatil/Deatil';
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async(userData) => {
      
      try{
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         
         const {data}= await axios(URL + `?email=${email}&password=${password}`)      
         const { access } = data;
         setAccess(access);
         access && navigate('/home');}
         
         catch(error){
            window.alert('Escribi bien bobo ')
         }
      
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

const onSearch = async(id) => {
try{ const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)


   if (data.name)setCharacters((oldChars) => [...oldChars, data]);}     


catch(error){
window.alert('¡No hay personajes con este ID!')
}
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