const asyncHandler = require('express-async-handler')
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
exports.getContact = asyncHandler(async(req,res)=>{
    const getRestoron = await prisma.restoron.findMany()
    res.render("contact",{title : "contact",restoron:getRestoron})
})