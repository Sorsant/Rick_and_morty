import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions-types";
import axios from "axios";

export const addFav = (character) => {
  // return { type: ADD_FAV, payload: character }
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try{
      const { data } = await axios.post(endpoint, character);

      if(!data.length) throw new Error('Error, no hay favoritos')
      return dispatch({
       type: ADD_FAV,
       payload: data,
    });}
   catch(error)
    {console.log(error.menssage);}
};
};

export const removeFav = (id) => {
  // return { type: REMOVE_FAV, payload: id }
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try{const { data } = await axios.delete(endpoint);
      
    if(!data.length) throw Error('Error,No se pudo borrar')
  
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });}
    catch(error){console.log(error.menssage)}
  };
};
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
