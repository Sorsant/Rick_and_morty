const express = require("express");
const router = express.Router();

const login = require("../controllers/login")
const postUser = require("../controllers/postUser")
router.get('/', login);

router.post('/', postUser);



module.exports= router