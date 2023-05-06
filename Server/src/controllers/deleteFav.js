const {Favorite} = require('../models/Favorite');

const deleteFav = async (req, res)=>{
try {
    const {id} = req.params;
    if (!id) {
        return res.status(404).json({ message: "id funciona" });
      }
      const char = await Favorite.findByPk(id);
      if (char) {
        await Favorite.destroy({
          where: {
            id,
          },
        });
      }
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
} catch (error) {
    res.status(500).json({ message: error });
}

    
}
module.exports = deleteFav;