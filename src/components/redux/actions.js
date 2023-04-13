import { ADD_FAV , REMOVE_FAV, ORDER,FILTER } from "./actions-types";

export const addFav = (character) => {
return {type:ADD_FAV , payload: character}
}

export const removeFav = (id) => {
    return {type:REMOVE_FAV,payload: id}
    }

export const filterCards = (gender) =>{
   return{type:FILTER ,payload:gender}
}
export const ordenCards = (orden) =>{
    return{ type:ORDER ,payload:orden}
}