const express = require("express")
const router = express.Router()
const {getHome,addEmailSubsc} = require("../controlers/home")
const {sendEmailValidator} = require("../utils/validators/subscribeValidator")

router.route("").get(getHome).post(sendEmailValidator,addEmailSubsc)

module.exports = router