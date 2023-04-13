import Card from "../Card/Card";
import { connect } from 'react-redux'
import { filterCards,ordenCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites ,filterCards,ordenCards}) => {
const dispatch = useDispatch()
const [aux,setAux]=useState(false)

const handleOrder=(evento)=>{

    dispatch(ordenCards(evento.target.value))
}
const handleFilter=(evento)=>{
   
    aux?setAux(true):setAux(false)

    dispatch(filterCards(evento.target.value))
}

    return (
        <div>
            <select onChange={handleOrder} name="order" id="">
                <option value="A">Asendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} name="gender" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">AllCharacters</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
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