const { User,Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, status, species, gender, origin, image, userId } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: "Faltan datos" });
    }

    const character = {id, name, origin, status, image, species, gender};
    const created = await Favorite.findOrCreate({ where: character });
    if (created) {
      const favorites = await Favorite.findAll();
      return res.status(200).json(favorites);
    } else {
      return res
        .status(400)
        .json({ message: "Personaje ya existe en favoritos" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postFav;