const express = require("express")
const router = express.Router()
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
var bodyParser = require('body-parser')
var parseForm = bodyParser.urlencoded({ extended: false })
const {getAllRepas, addRepasControler,uploadRepasImage,resizeImage} = require("../controlers/addRepas")
const {createRepasValidator} = require("../utils/validators/addRepasValidator")

router.route("/").get(csrfProtection,getAllRepas).post(csrfProtection,uploadRepasImage,resizeImage,createRepasValidator,addRepasControler)
module.exports = router