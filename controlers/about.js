const asyncHandler = require('express-async-handler')
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
exports.aboutConroler = asyncHandler(async(req,res)=>{
    const getRestoron = await prisma.restoron.findMany()
    res.render("about",{title:"about",restoron:getRestoron})
})