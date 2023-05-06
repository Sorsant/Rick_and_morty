const express = require("express");

const postFav = require("../controllers/postFav")
const deleteFav = require("../controllers/deleteFav")
const router = express.Router();

router.post("/",(req, res) => {
    postFav(req, res);
});
router.delete("/:id",(req, res) => {
    deleteFav(req, res);
});



module.exports= router
