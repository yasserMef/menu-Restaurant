const express = require("express")
const router = express.Router()
const {getContact} = require("../controlers/contact")
router.route("/").get(getContact)
 
module.exports = router