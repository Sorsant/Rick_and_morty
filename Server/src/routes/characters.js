const {getCharById} = require("../controllers/getCharById")
const express = require("express");
const router = express.Router();



router.get("/:id",(req, res) => {
    getCharById(req, res);
});
router.get("/detail/:id",(req, res) => {
    getCharById(req, res);
});
module.exports= router