const express = require("express")
const router = express.Router()
const {aboutConroler} = require("../controlers/about")
router.route("/").get(aboutConroler)
 
module.exports = router