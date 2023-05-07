import Card from "../Card/Card";
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import { useState } from "react";
import {orderCards,filterCards} from "../redux/actions";
import style from './favotire.module.css'

const Favorites = ({ myFavorites}) => {
const dispatch = useDispatch()
const [aux,setAux]=useState(false)

const handleOrder=(evento)=>{

    dispatch(orderCards(evento.target.value))
    setAux(true);
}
const handleFilter=(evento)=>{
   
    aux?setAux(true):setAux(false)

    dispatch(filterCards(evento.target.value))
}

    return (
        <div className={style.fondo}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select><div>

            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            status={fav.status}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);

