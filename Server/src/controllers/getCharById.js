 const axios = require('axios');
 const URL = 'https://rickandmortyapi.com/api/character';

 const getCharById = async (req, res) => {
    const { id } = req.params;
try {
    const {data}= await axios(`${URL}/${id}`);
    
    const character = {status:data.status,
                        name:data.name,
                        species:data.species,
                        origin:data.origin,
                        image:data.image,
                        gender:data.gender,
                        id:data.id};

    if(!character)throw new Error('hubo un error');
  
    return res.json(character);
}
catch(error){
    res.status(500).send(error.message)
}

}



module.exports = {
    getCharById
};