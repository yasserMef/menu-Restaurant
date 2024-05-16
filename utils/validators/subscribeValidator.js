const { check} = require('express-validator');
const {validatorMiddelwear} = require("../../middelwears/validatorMiddelwear")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

exports.sendEmailValidator = [
    check("email").notEmpty().withMessage("email is required").isEmail().withMessage("email invalid").custom(async(val)=>{
      const oneEmail = await prisma.emailSubscribe.findUnique({
        where: {
            email: val
        }
      })
      if(oneEmail){
        return Promise.reject(new Error("this email already exist"))
      }
    }),
    validatorMiddelwear 
]