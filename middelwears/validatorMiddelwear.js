const asyncHandler = require('express-async-handler')
const {validationResult } = require('express-validator');

exports.validatorMiddelwear = asyncHandler(async(req,res,next)=>{
  console.log(req.body.nom)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
})