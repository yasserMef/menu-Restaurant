const { check} = require('express-validator');
const {validatorMiddelwear} = require("../../middelwears/validatorMiddelwear")

exports.createRepasValidator = [
    check('nom').notEmpty().withMessage("titre is required"),
    check("description").notEmpty().withMessage("description is required"),
    check("prix").notEmpty().withMessage("prix is required").isFloat().withMessage("prix is float"),
    check("url_image").notEmpty().withMessage("image is required"),
    check("id_categorie").notEmpty().withMessage("name Category is required"),
    validatorMiddelwear,
]